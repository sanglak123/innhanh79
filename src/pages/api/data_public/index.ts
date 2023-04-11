import { Request, Response } from "express";
import nextConnect from "next-connect";

const apiRoute = nextConnect({
  onError(error: any, req: Request, res: Response) {
    res
      .status(501)
      .json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req: Request, res: Response) {
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  },
});

apiRoute.get((req: Request, res: Response) => {
  return res.status(200).json({ mess: "Get data public" });
});
export default apiRoute;
