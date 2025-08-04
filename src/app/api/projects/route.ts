// app/api/projects/route.ts
import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('social');
    const projectsData = await db.collection('Project').find({}).toArray();

    if (!projectsData || projectsData.length === 0) {
      return NextResponse.json({ message: 'Projects data not found' }, { status: 404 });
    }

    return NextResponse.json(projectsData, { status: 200 });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ message: 'Server error' }, { status: 500 });
  }
}
