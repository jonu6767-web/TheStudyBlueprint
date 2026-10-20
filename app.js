// Shared Supabase connection (public anon key – safe to publish; security is enforced by database rules)
const SB_URL = 'https://bllsqlwxtopxfivqqgfi.supabase.co';
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJsbHNxbHd4dG9weGZpdnFxZ2ZpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTI0MTIwODMsImV4cCI6MjEwNzk4ODA4M30.pIAUr05Z578X7uIZGJSLbZ5vfRdYD79rQNNlbvCPeuc';
const _sb = supabase.createClient(SB_URL, SB_KEY);
function getSupabaseClient() { return _sb; }
function escapeHtml(s) { return String(s ?? '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;'); }
function safeUrl(u) { return /^https?:\/\//i.test(u || '') ? u : '#'; }
function ytEmbed(u) { const m = (u || '').match(/(?:v=|youtu\.be\/|embed\/|shorts\/|live\/)([\w-]{11})/); return m ? 'https://www.youtube-nocookie.com/embed/' + m[1] : ''; }
if (!window.lucide) window.lucide = { createIcons() {} };
