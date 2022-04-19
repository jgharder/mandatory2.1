import express from "express";
import cors from "cors";
import helmet from "helmet";
import authenticationRouter from "./routers/authenticationRouter.js";
import dotenv from "dotenv";
import session from "express-session";
import rateLimit from "express-rate-limit";
import nodeMailerRouter from "./routers/nodeMailerRouter.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

app.use("/login", authLimiter);


app.use(authenticationRouter);
app.use(nodeMailerRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);


