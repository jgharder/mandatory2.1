import bcrypt from "bcrypt";
import { Router } from "express";
import db  from "../database/createConnection.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/login", async (req, res) => {
    const user = await db.users.find({username: req.body.username}).toArray();
    const isSamePassword = await bcrypt.compare(req.body.password, user[0].password);
   
    if(isSamePassword){
        // send user 
    res.send("Login Successful");
    return
      }
      
      res.send("Login Unsuccessful")
    }
);

export default router;