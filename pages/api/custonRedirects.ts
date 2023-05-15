import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const customRedirects: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return res.status(200).json([
    {
      source: "http://localhost:8060/co/empleos/algo",
      destination: "/empresas/grupo-exito",
    },
    {
      source: "http://localhost:8060/co/empleos/redirect",
      destination: "/trabajos/empleos-por-ciudades",
    },
    {
      source: "http://localhost:8060/co/empleos/otro",
      destination: "/empresas/comfama",
    },
  ]);
};

export default customRedirects;
