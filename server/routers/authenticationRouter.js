import bcrypt from "bcrypt";
import { Router } from "express";
import db from "../database/createConnection.js";
const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/login", async (req, res) => {
  const user = await db.users.find({ username: req.body.username }).toArray();
  if(user.length === 0) {
    res.send({ message: "Username did not match", isLoggedIn: false });
    return
}
  const isSamePassword = await bcrypt.compare(
    req.body.password,
    user[0].password
  );

  req.session.isLoggedIn = true;

  if (!req.session.isLoggedIn) {
    res.send({ message: "Password did not match", isLoggedIn: false });
    return;
  }
  res.send({ isLoggedIn: true, message: "You're now logged in" });
});

export default router;
