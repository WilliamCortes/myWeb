import React, { FC } from "react";
import Image from "next/image";

type Description = {
  first: string;
  second: string;
  third: string;
  title: string;
};

type Props = {
  title: string;
  description: Description;
};

export const About: FC<Props> = ({ title, description }) => {
  return (
    <section
      id="about-me"
      className="layout-section"
      aria-labelledby="heading-aboutme"
    >
      <div className="container">
        <div className="about-header">
          <h2 id="heading-aboutme" className="title--sm about-header__title">
            {title}
          </h2>
          <div className="about-photo">
            <span className="about-photo__ring" aria-hidden="true" />
            <span className="about-photo__ring about-photo__ring--alt" aria-hidden="true" />
            <Image
              src="/assets/mi_foto.jpg"
              alt={title}
              width={240}
              height={240}
              className="about-photo__img"
            />
          </div>
        </div>
        <div className="layout-grid-half">
          <div>
            <p className="text--lg">{description?.first}</p>
            <p className="text--lg">{description?.second}</p>
          </div>
          <div>
            <p className="text--lg">{description?.third}</p>

            <p className="text--lg">
              Curious to know more? Check-out my{" "}
              <a href="#portfolio">portfolio</a> or{" "}
              <a href="#hire-me">hire me</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
