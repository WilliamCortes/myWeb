import React, { Fragment, useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";
import {
  About,
  Intro,
  Navbar,
  Portfolio,
  Experience,
  Testimonials,
  Contact,
  Footer,
  WhatsApp,
  Sidebar,
} from "@/components/ui";
import { getData } from "@/database";
import { useRouter } from "next/router";

type Props = {
  navbar: any;
  intro: any;
  about: any;
  portfolio: any;
  experience: any;
  testimonials: any;
  contact: any;
  footer: any;
};

const Home: NextPage<Props> = ({
  navbar,
  intro,
  about,
  portfolio,
  experience,
  testimonials,
  contact,
  footer,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const handleShow = () => setShowMenu((value) => !value);
  const router = useRouter();
  useEffect(() => {
    if (showMenu) {
      window.addEventListener("scroll", () => setShowMenu(false));
    }
  }, [showMenu]);

  return (
    <Fragment>
      <Head>
        <title>William Cortés</title>
        <meta name="robots" content="index,follow" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

        <meta
          name="description"
          content="William Cortés portfolio web developer, front end developer"
        />

        <link rel="canonical" href="https://www.williamcortes.co/" />

        <meta
          property="og:title"
          content="William Cortés portfolio web developer, front end developer"
        />

        <meta
          property="og:description"
          content="William Cortés portfolio web developer, front end developer"
        />
        <meta property="og:url" content="https://www.williamcortes.co/"></meta>

        <meta
          property="og:image:alt"
          content="William Cortés portfolio web developer, front end developer"
        />
        <meta property="og:locale" content={router.locale} />
        <meta property="og:site_name" content="Magneto Empleos" />
        <meta property="og:type" content="website" />

        <meta
          name="twitter:title"
          content="William Cortés portfolio web developer, front end developer"
        />
        <meta
          name="twitter:description"
          content="William Cortés portfolio web developer, front end developer"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dkwdjfwfc/image/upload/v1636128680/tk0x4a3eob23iecaybzb.jpg"
        />
        <meta property="og:image:width" content="500" />
        <meta property="og:image:height" content="500" />
      </Head>
      <Navbar {...navbar} showMenu={showMenu} handleShow={handleShow} />
      <Sidebar isOpen={showMenu} {...navbar} />

      <main>
        <Intro {...intro} />
        <About {...about} />
        <Portfolio {...portfolio} />
        <Experience {...experience} />
        <Testimonials {...testimonials} />
        <Contact {...contact} />
      </main>

      <Footer {...footer} />
      <WhatsApp {...contact} />
    </Fragment>
  );
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const data = getData("/api/data");

  return {
    revalidate: 600,
    props: { ...data },
  };
};

export default Home;
