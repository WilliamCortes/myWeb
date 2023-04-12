import React, { FC } from "react";

type List = {
  description: string;
  name: string;
};

type Props = {
  title: string;
  list: List[];
};
export const Testimonials: FC<Props> = ({ title, list }) => {
  return (
    <section
      id="testimonials"
      className="layout-section"
      aria-labelledby="heading-testimonials"
    >
      <div className="container">
        <h2
          id="heading-testimonials"
          className="title--sm layout-section-title"
        >
          {title}
        </h2>
        <div className="testimonials layout-grid-half">
          {list?.map(({ description, name }, i) => (
            <figure key={`${i}-${name}`}>
              <figcaption>
                <blockquote>
                  <p className="text--lg">{description}</p>
                  <strong className="text--lg"> {name}</strong>
                </blockquote>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
