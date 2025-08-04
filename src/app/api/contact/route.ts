import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    console.log("📌 Connecting to MongoDB...");
    const client = await clientPromise;

    console.log("📌 Getting database...");
    const db = client.db("social"); // ✅ Your database name

    console.log("📌 Fetching contact document...");
    const contact = await db.collection("Contact").findOne( // ✅ Capital C
      { key: "contactInfo" },
      { projection: { _id: 0 } }
    );

    if (!contact) {
      console.log("❌ Contact not found");
      return NextResponse.json({ message: "Contact not found" }, { status: 404 });
    }

    console.log("✅ Contact found:", contact);
    return NextResponse.json(contact);
  } catch (error) {
    console.error("💥 Error in API:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}
