import type { Request, Response } from "express";
import thingsThatiKnow from "../data/thingsThatIKnow.js";

const deleteThingById = (req: Request, res: Response) => {
  const { idThing } = req.params;
  // eslint-disable-next-line no-implicit-coercion
  thingsThatiKnow.things.filter((thing) => thing.id !== +idThing);
  res
    .status(200)
    .json({
      message: `the thing with id: ${idThing} has been deleted succesfully`,
    });
};

export default deleteThingById;
