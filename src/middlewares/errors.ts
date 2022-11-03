import type { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(404).json({ message: "Darkest place on earth" });
};

export default notFound;
