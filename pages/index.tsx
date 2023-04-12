import React, { Fragment, useEffect, useState } from "react";
import { NextPage } from "next";
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

  useEffect(() => {
    if (showMenu) {
      window.addEventListener("scroll", () => setShowMenu(false));
    }
  }, [showMenu]);

  return (
    <Fragment>
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
