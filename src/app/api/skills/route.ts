import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('social');
    const skillsData = await db.collection('Skill').findOne({}, { projection: { _id: 0 } });

    if (!skillsData) {
      return NextResponse.json({ message: 'Skills data not found' }, { status: 404 });
    }

    return NextResponse.json(skillsData);
  } catch (err) {
    console.error('Error fetching skills:', err);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
