/* Add your Supabase project URL and anon/public key here.
   Never put a service_role key in browser code. */
window.NEXORA_CONFIG = {
  SUPABASE_URL: 'YOUR_SUPABASE_PROJECT_URL',
  SUPABASE_ANON_KEY: 'YOUR_SUPABASE_ANON_OR_PUBLISHABLE_KEY',
  WHATSAPP_NUMBER: '94770000000' // Sri Lankan number, digits only
};
window.nexoraSupabase = null;
if (window.supabase && window.NEXORA_CONFIG.SUPABASE_URL.startsWith('https://') && !window.NEXORA_CONFIG.SUPABASE_URL.includes('YOUR_') && !window.NEXORA_CONFIG.SUPABASE_ANON_KEY.includes('YOUR_')) {
  window.nexoraSupabase = window.supabase.createClient(window.NEXORA_CONFIG.SUPABASE_URL, window.NEXORA_CONFIG.SUPABASE_ANON_KEY);
}
