import type { Request, Response } from "express";
import thingsThatiKnow from "../data/thingsThatIKnow.js";

const getThingById = (req: Request, res: Response) => {
  const { idThing } = req.params;
  const thingToFindById = thingsThatiKnow.things.find(
    // eslint-disable-next-line no-implicit-coercion
    (thing) => thing.id === +idThing
  );

  if (!thingToFindById) {
    res.status(404).json({ message: `thing with id: ${idThing} not found` });
    return;
  }

  res.status(200).json({ thingToFindById });
};

export default getThingById;
