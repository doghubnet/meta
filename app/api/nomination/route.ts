import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const nominationSchema = z.object({
  categoryId: z.string().uuid(),
  nomineeName: z.string().min(2),
  nomineeBio: z.string().min(20),
  impactReason: z.string().min(20),
  submittedByName: z.string().min(2),
  submittedByEmail: z.string().email(),
  consentConfirmed: z.boolean().refine((value) => value, 'Consent is required'),
  captchaToken: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    const parsed = nominationSchema.safeParse(payload);

    if (!parsed.success) {
      return NextResponse.json(
        { error: 'Invalid nomination payload', details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    return NextResponse.json({ status: 'pending', message: 'Nomination submitted for admin review.' });
  } catch {
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }
}
