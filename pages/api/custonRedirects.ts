import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const customRedirects: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return res.status(200).json([
    {
      source: "http://localhost:8060/co/empleos/algo",
      destination: "http://localhost:8060/co/empleos",
    },
    {
      source: "http://localhost:8060/co/empleos/redirect",
      destination: "http://localhost:8060/co/trabajos",
    },
    {
      source: "http://localhost:8060/co/empleos/otro",
      destination: "http://localhost:8060/co/empleos?q=fotografo",
    },
  ]);
};

export default customRedirects;
// },
// redirects: async () => {
//   return axios.get(`https://www.williamcortes.co/api/custonRedirects`).then((response) => response.data);
// }
