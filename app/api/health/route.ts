import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    ok: true,
    app: 'ethiopia-changemaker-awards',
    time: new Date().toISOString(),
  });
}
