import { NextRequest, NextResponse } from "next/server";

// Proxies to the real ShaBytes waitlist backend (AWS API Gateway + Lambda).
// Proxied server-side rather than called directly from the browser so the
// upstream URL isn't exposed to the client and CORS isn't a concern.
const WAITLIST_API_URL = "https://1758sh4o8f.execute-api.us-east-1.amazonaws.com/default/shabytes-wishlist";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  const { email } = (body ?? {}) as { email?: unknown };
  if (typeof email !== "string" || !EMAIL_RE.test(email.trim())) {
    return NextResponse.json({ error: "valid_email_required" }, { status: 400 });
  }

  let upstreamRes: Response;
  try {
    upstreamRes = await fetch(WAITLIST_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: email.trim() }),
    });
  } catch {
    return NextResponse.json({ error: "upstream_unreachable" }, { status: 502 });
  }

  if (!upstreamRes.ok) {
    return NextResponse.json({ error: "upstream_error" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
