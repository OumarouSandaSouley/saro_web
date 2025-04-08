import { createClient } from "@supabase/supabase-js";
import { Database } from "./types";

export async function createSupabaseClient() {
  return createClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        persistSession: true,
        detectSessionInUrl: true,
        storageKey: "supabase-auth",
        // Add cookie options if needed
      },
    }
  );
}
