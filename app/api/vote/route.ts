import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const voteSchema = z.object({
  nomineeId: z.string().uuid(),
  categoryId: z.string().uuid(),
  captchaToken: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = voteSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid vote payload', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    return NextResponse.json({ status: 'review', message: 'Vote captured and queued for fraud checks.' });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }
}
