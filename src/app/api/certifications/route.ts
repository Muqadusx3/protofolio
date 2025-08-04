import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('social');
    const certData = await db.collection('Certifications').findOne({}, { projection: { _id: 0 } });

    if (!certData) {
      return NextResponse.json({ message: 'Certifications not found' }, { status: 404 });
    }

    return NextResponse.json(certData);
  } catch (err) {
    console.error('Error fetching certifications:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
