import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/en.json";
type Data = {
  data: any;
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ data });
};

export default handler;
