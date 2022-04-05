import db from "./createConnection.js";
import bcrypt from "bcrypt";


const saltRounds = 12;
const plaintextPassword = "jacob123";


const hash = await bcrypt.hash(plaintextPassword, saltRounds);;
  


db.users.insertOne({username: "Admin", password: hash});

console.log(await db.users.find({username:"Admin"}).toArray());


