import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const deletionSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  requestType: z.string().min(2),
  details: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = deletionSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid deletion request payload', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    return NextResponse.json({ status: 'received' });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }
}
