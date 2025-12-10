import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fepnthblpeaszbusexcw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlcG50aGJscGVhc3pidXNleGN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUzNTc3ODYsImV4cCI6MjA4MDkzMzc4Nn0.uD45Azpxk7NMi2uJxKzhko0cUaFjTzswFJaEoKwZFik";

export const supabase = createClient(supabaseUrl, supabaseKey);
