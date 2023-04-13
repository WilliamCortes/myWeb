import React from "react";
import { NextPage } from "next";
import { GetStaticProps } from "next";
import { Footer, WhatsApp } from "@/components/ui";
import { getData } from "@/database";
import AreaCalculator from "@/components/sena/AreaCalculator";
import CustomHead from "@/components/customHead";
type Props = {
  contact: any;
  footer: any;
};
const TrianglePage: NextPage<Props> = ({ contact, footer }) => {
  return (
    <div>
      <CustomHead
        title="William Cortés aprendiz SENA"
        description="GA2-240201528-AA4-EV01 - Algoritmo para el cálculo de áreas y volúmenes"
      />
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
