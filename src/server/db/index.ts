import { MongoClient, ServerApiVersion } from "mongodb";

const uri = process.env.MONGODB_URI!;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function db() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");
    return client.db();
  } catch (error) {
    console.log("❌ Could not connect to MongoDB", error);
    process.exit(1);
  }
}

const dbInstance = db();

export default dbInstance;
