import { NextResponse } from "next/server";

/**
 * Health-check endpoint for deployment infrastructure (Replit autoscale,
 * uptime monitors). Kept dynamic so every probe gets a live 200 rather
 * than a cached response.
 */
export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({ status: "ok", timestamp: new Date().toISOString() });
}
