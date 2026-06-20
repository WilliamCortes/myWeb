import React, { FC } from "react";

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
        <h2 id="heading-aboutme" className="title--sm layout-section-title">
          {title}
        </h2>
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
