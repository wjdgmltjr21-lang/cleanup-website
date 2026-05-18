// Supabase Edge Function: send-generation-complete-email
// TODO: connect real secrets and production logic.
import { serve } from "https://deno.land/std@0.224.0/http/server.ts";

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok');
  return new Response(JSON.stringify({ ok: true, function: 'send-generation-complete-email', message: '기본 함수가 준비되었습니다.' }), {
    headers: { 'content-type': 'application/json' }
  });
});
