import { NextResponse } from 'next/server';
export async function POST(){return NextResponse.json({status:'review',message:'Vote captured and queued for fraud checks.'});}
