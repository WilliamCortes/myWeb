import React, { FC } from "react";
type Description = {
  title: string;
  first: string;
  second: string;
  third: string;
};

type Props = {
  fullName: string;
  profession: string;
  description: Description;
};

export const Intro: FC<Props> = ({ fullName, profession, description }) => {
  const handleClick = () => {
    const myElement = document.querySelector("#about-me") as HTMLElement;
    window.scrollTo({
      top: (myElement.offsetTop as number) - 20,
    });
  };

  return (
    <section
      id="intro"
      className="layout-section"
      aria-describedby="intro-h1 intro-h2"
    >
      <div className="container">
        <h1 id="intro-h1" className="title--lg intro-name">
          {fullName}
        </h1>
        <h2 id="intro-h2" className="title--lg intro-tagline">
          {profession}
        </h2>
        <p className="text--xl">{description?.first}</p>
        <p className="text--xl">
          {description?.second} <strong>{description?.third}</strong>
        </p>
      </div>
      <div className="scroll-down" id="scroll-down" onClick={handleClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48px"
          viewBox="0 0 24 24"
          width="48px"
          fill="var(--scroll-fill)"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"
            stroke="var(--light-icon)"
          />
        </svg>
      </div>
    </section>
  );
};
