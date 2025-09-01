// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://wibigvgsqouhznummrez.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndpYmlndmdzcW91aHpudW1tcmV6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY2NTU2MzgsImV4cCI6MjA3MjIzMTYzOH0.Mf28L3TlwiOd4GNoqq-G8-ya19gG4N_WLSRA5LwA9lA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
