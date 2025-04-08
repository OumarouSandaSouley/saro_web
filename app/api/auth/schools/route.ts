import { NextResponse } from "next/server";
import { createSupabaseClient } from "@/utils/supabase/server";

export async function GET() {
  try {
    const supabase = await createSupabaseClient();

    console.log("Begin fetching schools...");
    const { data: schools, error } = await supabase.from("schools").select("*");

    if (error) {
      console.error("Error fetching schools:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("Schools fetched successfully:", schools);
    return NextResponse.json({ schools });
  } catch (error) {
    console.error("Unexpected error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred" },
      { status: 500 }
    );
  }
}
