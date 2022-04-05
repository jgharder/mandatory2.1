import db from "../createConnection.js";
import bcrypt from "bcrypt";


const saltRounds = 12;
const plaintextPassword = "jacob123";

async function handlePasswords() {
    const hash = await bcrypt.hash(plaintextPassword, saltRounds);;
  }

handlePasswords();

db.users.insertOne({username: "Admin", Password: hash});

