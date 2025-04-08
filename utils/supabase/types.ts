export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      attendance_records: {
        Row: {
          course_session_id: number
          created_at: string | null
          id: number
          recorded_by: number
          status: string
          student_id: number
        }
        Insert: {
          course_session_id: number
          created_at?: string | null
          id?: number
          recorded_by: number
          status: string
          student_id: number
        }
        Update: {
          course_session_id?: number
          created_at?: string | null
          id?: number
          recorded_by?: number
          status?: string
          student_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "attendance_records_course_session_id_fkey"
            columns: ["course_session_id"]
            isOneToOne: false
            referencedRelation: "course_sessions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_records_recorded_by_fkey"
            columns: ["recorded_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "attendance_records_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      classroom_supervisors: {
        Row: {
          classroom_id: number
          id: number
          school_id: number
          supervisor_id: number
        }
        Insert: {
          classroom_id: number
          id?: number
          school_id: number
          supervisor_id: number
        }
        Update: {
          classroom_id?: number
          id?: number
          school_id?: number
          supervisor_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "classroom_supervisors_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classroom_supervisors_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "classroom_supervisors_supervisor_id_fkey"
            columns: ["supervisor_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      classrooms: {
        Row: {
          id: number
          level: string
          name: string
          school_id: number
        }
        Insert: {
          id?: number
          level: string
          name: string
          school_id: number
        }
        Update: {
          id?: number
          level?: string
          name?: string
          school_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "classrooms_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      course_sessions: {
        Row: {
          created_at: string | null
          end_time: string
          id: number
          initialized_by: number
          schedule_id: number
          school_year_id: number
          session_date: string
          start_time: string
          teacher_id: number
        }
        Insert: {
          created_at?: string | null
          end_time: string
          id?: number
          initialized_by: number
          schedule_id: number
          school_year_id: number
          session_date: string
          start_time: string
          teacher_id: number
        }
        Update: {
          created_at?: string | null
          end_time?: string
          id?: number
          initialized_by?: number
          schedule_id?: number
          school_year_id?: number
          session_date?: string
          start_time?: string
          teacher_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "course_sessions_initialized_by_fkey"
            columns: ["initialized_by"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_sessions_schedule_id_fkey"
            columns: ["schedule_id"]
            isOneToOne: false
            referencedRelation: "schedules"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_sessions_school_year_id_fkey"
            columns: ["school_year_id"]
            isOneToOne: false
            referencedRelation: "school_years"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "course_sessions_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      logs: {
        Row: {
          action: string
          action_date: string | null
          id: number
          user_id: number
        }
        Insert: {
          action: string
          action_date?: string | null
          id?: number
          user_id: number
        }
        Update: {
          action?: string
          action_date?: string | null
          id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      modifications: {
        Row: {
          change_date: string | null
          change_description: string
          id: number
          record_id: number
          table_name: string
          user_id: number
        }
        Insert: {
          change_date?: string | null
          change_description: string
          id?: number
          record_id: number
          table_name: string
          user_id: number
        }
        Update: {
          change_date?: string | null
          change_description?: string
          id?: number
          record_id?: number
          table_name?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "modifications_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      parents_students: {
        Row: {
          id: number
          parent_id: number
          student_id: number
        }
        Insert: {
          id?: number
          parent_id: number
          student_id: number
        }
        Update: {
          id?: number
          parent_id?: number
          student_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "parents_students_parent_id_fkey"
            columns: ["parent_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "parents_students_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          id: number
          payment_date: string
          payment_method: string
          school_id: number
          status: string
          student_id: number
        }
        Insert: {
          amount: number
          id?: number
          payment_date: string
          payment_method: string
          school_id: number
          status: string
          student_id: number
        }
        Update: {
          amount?: number
          id?: number
          payment_date?: string
          payment_method?: string
          school_id?: number
          status?: string
          student_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "payments_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "payments_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      schedules: {
        Row: {
          classroom_id: number
          day: string
          end_time: string
          id: number
          school_id: number
          school_year_id: number
          start_time: string
          subject_id: number
          teacher_id: number
        }
        Insert: {
          classroom_id: number
          day: string
          end_time: string
          id?: number
          school_id: number
          school_year_id: number
          start_time: string
          subject_id: number
          teacher_id: number
        }
        Update: {
          classroom_id?: number
          day?: string
          end_time?: string
          id?: number
          school_id?: number
          school_year_id?: number
          start_time?: string
          subject_id?: number
          teacher_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "schedules_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedules_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedules_school_year_id_fkey"
            columns: ["school_year_id"]
            isOneToOne: false
            referencedRelation: "school_years"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedules_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "schedules_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      school_years: {
        Row: {
          id: number
          name: string
        }
        Insert: {
          id?: number
          name: string
        }
        Update: {
          id?: number
          name?: string
        }
        Relationships: []
      }
      schools: {
        Row: {
          address: string
          city: string | null
          id: number
          isactive: boolean | null
          name: string
        }
        Insert: {
          address: string
          city?: string | null
          id?: number
          isactive?: boolean | null
          name: string
        }
        Update: {
          address?: string
          city?: string | null
          id?: number
          isactive?: boolean | null
          name?: string
        }
        Relationships: []
      }
      student_classrooms: {
        Row: {
          classroom_id: number
          id: number
          school_year_id: number
          student_id: number
        }
        Insert: {
          classroom_id: number
          id?: number
          school_year_id: number
          student_id: number
        }
        Update: {
          classroom_id?: number
          id?: number
          school_year_id?: number
          student_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "student_classrooms_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_classrooms_school_year_id_fkey"
            columns: ["school_year_id"]
            isOneToOne: false
            referencedRelation: "school_years"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "student_classrooms_student_id_fkey"
            columns: ["student_id"]
            isOneToOne: false
            referencedRelation: "students"
            referencedColumns: ["id"]
          },
        ]
      }
      students: {
        Row: {
          full_name: string
          id: number
          matricule: string | null
          school_id: number
          sex: string | null
        }
        Insert: {
          full_name: string
          id?: number
          matricule?: string | null
          school_id: number
          sex?: string | null
        }
        Update: {
          full_name?: string
          id?: number
          matricule?: string | null
          school_id?: number
          sex?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "students_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
      subjects: {
        Row: {
          coefficient: number
          id: number
          name: string
        }
        Insert: {
          coefficient: number
          id?: number
          name: string
        }
        Update: {
          coefficient?: number
          id?: number
          name?: string
        }
        Relationships: []
      }
      teachers_subjects: {
        Row: {
          classroom_id: number
          id: number
          school_id: number
          subject_id: number
          teacher_id: number
        }
        Insert: {
          classroom_id: number
          id?: number
          school_id: number
          subject_id: number
          teacher_id: number
        }
        Update: {
          classroom_id?: number
          id?: number
          school_id?: number
          subject_id?: number
          teacher_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "teachers_subjects_classroom_id_fkey"
            columns: ["classroom_id"]
            isOneToOne: false
            referencedRelation: "classrooms"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teachers_subjects_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teachers_subjects_subject_id_fkey"
            columns: ["subject_id"]
            isOneToOne: false
            referencedRelation: "subjects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "teachers_subjects_teacher_id_fkey"
            columns: ["teacher_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          email: string
          full_name: string
          id: number
          is_supervisor: boolean | null
          password_hash: string
          role: string
          school_id: number | null
          sex: string | null
        }
        Insert: {
          email: string
          full_name: string
          id?: number
          is_supervisor?: boolean | null
          password_hash: string
          role: string
          school_id?: number | null
          sex?: string | null
        }
        Update: {
          email?: string
          full_name?: string
          id?: number
          is_supervisor?: boolean | null
          password_hash?: string
          role?: string
          school_id?: number | null
          sex?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_school_id_fkey"
            columns: ["school_id"]
            isOneToOne: false
            referencedRelation: "schools"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const
