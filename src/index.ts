import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import thingsThatiKnow from "./data/thingsThatIKnow.js";

dotenv.config();

const { log } = console;

const port = process.env.PORT;

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", (req, res) => {
  res.status(200).json(thingsThatiKnow);
});

app.listen(port, () => {
  log("Server is listening");
});
