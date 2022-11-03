/* eslint-disable no-implicit-coercion */
import type { Request, Response } from "express";
import thingsThatiKnow from "../data/thingsThatIKnow.js";

const getThingsById = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const thingToFindById = thingsThatiKnow.things.find(
    (thing) => thing.id === +idThing
  );
  res.status(200).json({ thingToFindById });
};

export default getThingsById;
