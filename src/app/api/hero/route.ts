import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('social'); // use your db name
    const heroData = await db.collection('Contact').findOne(
      { key: 'heroSection' },
      { projection: { _id: 0 } }
    );

    if (!heroData) {
      return NextResponse.json({ message: 'Hero section data not found' }, { status: 404 });
    }

    return NextResponse.json(heroData);
  } catch (err) {
    console.error('Error fetching hero data:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
