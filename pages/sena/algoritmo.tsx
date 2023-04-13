import React, { Fragment, useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { GetStaticProps } from "next";
import { Footer, WhatsApp } from "@/components/ui";
import { getData } from "@/database";
import { useRouter } from "next/router";
import AreaCalculator from "@/components/sena/AreaCalculator";
type Props = {
  contact: any;
  footer: any;
};
const TrianglePage: React.FC<Props> = ({ contact, footer }) => {
  return (
    <div>
      <AreaCalculator />
      <Footer {...footer} />
      <WhatsApp {...contact} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = (ctx) => {
  const data = getData("/api/data");

  return {
    revalidate: 600,
    props: { ...data },
  };
};

export default TrianglePage;
