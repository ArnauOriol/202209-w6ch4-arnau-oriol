import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import getThings from "./controllers/getThings.js";
import notFound from "./middlewares/errors.js";
import getThingsById from "./controllers/getThingsById.js";

dotenv.config();

const { log } = console;

const port = process.env.PORT;

const app = express();

app.use(morgan("dev"));

app.use(express.json());

app.get("/things", getThings);
app.get("/things/:idThing", getThingsById);

app.use(notFound);

app.listen(port, () => {
  log("Server is listening");
});
