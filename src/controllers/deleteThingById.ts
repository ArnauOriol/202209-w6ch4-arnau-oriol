import type { Request, Response } from "express";
import thingsThatiKnow from "../data/thingsThatIKnow.js";

const deleteThingById = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const thingToDelete = thingsThatiKnow.things.find(
    // eslint-disable-next-line no-implicit-coercion
    (thing) => thing.id === +idThing
  );

  const indexOfThingToDelete = thingsThatiKnow.things.indexOf(thingToDelete);

  if (indexOfThingToDelete === -1) {
    res.status(404).json({ message: `thing with id: ${idThing} not found` });
  }

  thingsThatiKnow.things.splice(indexOfThingToDelete, 1);

  res.status(200).json({
    message: `the thing with id: ${idThing} has been deleted succesfully`,
  });
};

export default deleteThingById;
