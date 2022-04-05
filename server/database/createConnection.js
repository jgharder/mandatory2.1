import { MongoClient } from "mongodb";

const url = "mongodb://localhost:27017";

const dbName = "store";

const client = await MongoClient.connect(url);

const db = client.db(dbName);

console.log("Connected to MongoDB");

export default{
    users: db.collection("users")
}

