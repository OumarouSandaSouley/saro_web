import { NextResponse } from 'next/server'
import { createSupabaseClient } from '@/utils/supabase/server';
import { customHash } from '@/lib'; 


type RequestBody = {
  email: string;
  password: string;
  school_id: number;
  role: 'parent' | 'teacher' | 'admin' | 'super_admin';
  is_supervisor: boolean;
}

export async function POST(request: Request) {
  try {
    const body: RequestBody = await request.json();
    const { email, password, school_id, role, is_supervisor } = body;
    const hashedPassword = customHash(password)
    
    if (!email || !password || !school_id || !role) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const supabase = await createSupabaseClient();
    
    // Query user by email
    const { data: users, error: queryError } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('role', role)
      .eq('school_id', school_id)
      .single();
    
    if (queryError || !users) {
      console.error("User query error:", queryError);
      return NextResponse.json(
        { success: false, message: "Identifiants invalides ou utilisateur non trouvé" },
        { status: 401 }
      );
    }

    // For supervisors, check if they have the supervisor flag
    if (is_supervisor && !users.is_supervisor) {
      return NextResponse.json(
        { success: false, message: "Vous n'avez pas les droits d'accès surveillant" },
        { status: 403 }
      );
    }

    // Check password
    if (users.password_hash !== hashedPassword) {
      return NextResponse.json(
        { success: false, message: "Mot de passe incorrect" },
        { status: 401 }
      );
    }

    // Create minimal user object without password
    const userData = {
      id: users.id,
      email: users.email,
      full_name: users.full_name,
      role: users.role,
      school_id: users.school_id,
      is_supervisor: users.is_supervisor
    };

    // Log the login
    await supabase.from('logs').insert({
      user_id: users.id,
      action: 'User login',
      action_date: new Date().toISOString()
    });

    return NextResponse.json({
      success: true,
      user: userData
    });
  } catch (error) {
    console.error("Login error:", error);
    return NextResponse.json(
      { success: false, message: "Une erreur est survenue lors de la connexion" },
      { status: 500 }
    );
  }
}