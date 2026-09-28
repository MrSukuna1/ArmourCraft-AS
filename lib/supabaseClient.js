import { createClient } from '@supabase/supabase-js';

const rawUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const rawKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

const isValidHttpUrl = (string) => {
  try {
    const url = new URL(string);
    return url.protocol === 'http:' || url.protocol === 'https:';
  } catch {
    return false;
  }
};

let client = null;
let clientError = null;

if (!rawUrl) {
  clientError = 'NEXT_PUBLIC_SUPABASE_URL is missing in .env.local';
} else if (!isValidHttpUrl(rawUrl)) {
  if (rawUrl.startsWith('sb_publishable_') || rawUrl.startsWith('sb_secret_')) {
    clientError = `NEXT_PUBLIC_SUPABASE_URL is set to an API key ("${rawUrl.slice(0, 16)}..."), NOT a project URL. A valid Supabase Project URL must start with https:// (e.g., https://your-project-id.supabase.co).`;
  } else {
    clientError = `Invalid Supabase URL: "${rawUrl}". Must be a valid HTTP or HTTPS URL (e.g. https://your-project-id.supabase.co).`;
  }
} else if (!rawKey) {
  clientError = 'NEXT_PUBLIC_SUPABASE_ANON_KEY is missing in .env.local';
} else {
  try {
    client = createClient(rawUrl, rawKey);
  } catch (err) {
    clientError = err.message;
  }
}

// Provide a safe fallback instance to avoid runtime bundle evaluation errors
export const supabase = client || createClient('https://placeholder.supabase.co', 'placeholder-anon-key');
export const supabaseConfigError = clientError;
export const isSupabaseConfigured = !clientError && rawUrl !== 'https://your-project-id.supabase.co';
export const configuredUrl = rawUrl;
export const configuredKey = rawKey;
