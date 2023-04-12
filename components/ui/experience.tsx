import React, { FC } from "react";
type List = {
  tag: string;
};
type Props = {
  title: string;
  list: List[];
};

export const Experience: FC<Props> = ({ title, list }) => {
  return (
    <section
      id="experience"
      className="layout-section"
      aria-labelledby="heading-experience"
    >
      <div className="container">
        <h2 id="heading-experience" className="title--sm layout-section-title">
          {title}
        </h2>
        <ul className="tags">
          {list?.map(({ tag }, i) => (
            <li key={`${i}-${tag}`} className="tag">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
