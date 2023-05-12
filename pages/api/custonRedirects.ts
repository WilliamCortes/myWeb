import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const customRedirects: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json([
    {
      source: "/empleos/algo",
      destination: "/empresas/grupo-exito",
      permanent: true
    }
  ]);
};

export default customRedirects;
