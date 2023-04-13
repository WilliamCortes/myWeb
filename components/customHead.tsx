import React, { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

type Props = {
  title: string;
  description: string;
};

const CustomHead: FC<Props> = ({ title, description }) => {
  const router = useRouter();

  return (
    <Head>
      <title>William Cortés</title>
      <meta name="robots" content="index,follow" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      <meta name="description" content={description} />

      <link rel="canonical" href="https://www.williamcortes.co/" />

      <meta property="og:title" content={title} />

      <meta property="og:description" content={description} />
      <meta property="og:url" content="https://www.williamcortes.co/"></meta>

      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={router.locale} />
      <meta property="og:site_name" content="Magneto Empleos" />
      <meta property="og:type" content="website" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dkwdjfwfc/image/upload/v1636128680/tk0x4a3eob23iecaybzb.jpg"
      />
      <meta property="og:image:width" content="500" />
      <meta property="og:image:height" content="500" />
    </Head>
  );
};

export default CustomHead;
