import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('social');
    const experienceData = await db
      .collection('Experience') // Capital E matches your actual collection name
      .find({}, { projection: { _id: 0 } })
      .toArray();

    if (!experienceData.length) {
      return NextResponse.json({ message: 'No experience data found' }, { status: 404 });
    }

    return NextResponse.json(experienceData, { status: 200 });
  } catch (error) {
    console.error('Error fetching experience:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
