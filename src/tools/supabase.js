import { createClient } from "@supabase/supabase-js";
const supabase = createClient(import.meta.env.VITE_SB_URL, import.meta.env.VITE_SB_KEY);
export default supabase;