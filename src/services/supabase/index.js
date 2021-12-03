import { createClient } from '@supabase/supabase-js';

export const supabase = createClient(
  'https://ihpqyzxcxfvmpfeffpxv.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzODAyMzkyMywiZXhwIjoxOTUzNTk5OTIzfQ.59FuZ2OIHG95Nrn7hoYEZAVz5Dh9ZsNA3jqFR8RYlus',
);
