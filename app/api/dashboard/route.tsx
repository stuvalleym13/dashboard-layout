import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/mongodb';


export const runtime = 'nodejs';


export async function GET() {
  await connectDB();
  return NextResponse.json({
    success: true,
    users: [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ],


  });
}


// POST /api/users
export async function POST(request: { json: () => any; }) {


  const body = await request.json();

  console.log("request data",body);



  return NextResponse.json(
    {
      success: true,
      message: 'User created',
      data: body,
    },
    { status: 201 }
  );
}

