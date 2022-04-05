import express from "express";
import cors from "cors";
import helmet from "helmet";
import authenticationRouter from "./routers/authenticationRouter.js";

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(authenticationRouter);








app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}
);


