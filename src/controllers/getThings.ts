import type { Request, Response } from "express";
import thingsThatiKnow from "../data/thingsThatIKnow.js";

const getThings = (req: Request, res: Response) => {
  res.status(200).json(thingsThatiKnow);
};

export default getThings;
