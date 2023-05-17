import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

const customRedirects: NextApiHandler = (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  return res.status(200).json([
    {
      source: "/empleos/algo",
      destination: "https://www-stg.magneto365.com/co/empleos",
    },
    {
      source: "/empleos/redirect",
      destination: "https://www-stg.magneto365.com/co/trabajos",
    },
    {
      source: "/empleos/otro",
      destination: "https://www-stg.magneto365.com/co/empleos?q=fotografo",
    },
  ]);
};

export default customRedirects;
// },
// redirects: async () => {
//   return axios.get(`https://www.williamcortes.co/api/custonRedirects`).then((response) => response.data);
// }
