
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yadypnwckdemhffrleya.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlhZHlwbndja2RlbWhmZnJsZXlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjEwNDUyMjIsImV4cCI6MjAzNjYyMTIyMn0.eUJJI5k0bwSiOncKu17n3MtBwj3ejL-pZTCWpJ_y91c'
export const supabase = createClient(supabaseUrl, supabaseKey)