import { supabase } from '../supabase';

const TABLE = 'documents';

export const createSnippet = (data) => {
  return supabase.from(TABLE).insert(data);
};

export const fetchSnippet = (slug) => {
  return supabase.from(TABLE).select().eq('slug', slug);
};

export const fetchSnippets = () => {
  return supabase.from(TABLE).select();
}
