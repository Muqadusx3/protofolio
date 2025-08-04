import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

const client = new MongoClient(uri, options);  // ⬅️ Changed from let → const
const clientPromise = client.connect();        // ⬅️ Changed from let → const

export default clientPromise;
