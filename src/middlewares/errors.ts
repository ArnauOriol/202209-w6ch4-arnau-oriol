import type { Request, Response } from "express";

const notFound = (req: Request, res: Response) => {
  res.status(200).json({ message: "Darkest place on earth" });
};

export default notFound;
