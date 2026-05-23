import { NextResponse } from 'next/server';
export async function POST(){return NextResponse.json({status:'pending',message:'Nomination submitted for admin review.'});}
