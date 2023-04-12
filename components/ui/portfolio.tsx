import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
type Portfolio = {
  img: string;
  title: string;
  description: string;
  href: string;
  link: string;
};
type Props = {
  title: string;
  portfolio: Portfolio[];
};

export const Portfolio: FC<Props> = ({ title, portfolio }) => {
  return (
    <section
      id="portfolio"
      className="layout-section"
      aria-labelledby="heading-portfolio"
    >
      <div className="container">
        <h2 id="heading-portfolio" className="title--sm layout-section-title">
          {title}
        </h2>

        {portfolio?.map(({ img, title, description, href, link }, i) => (
          <div className="portfolio" key={`${i}-${title}`}>
            <Image
              src={img}
              width="300"
              height="300"
              alt="Stocks web app"
              className="portfolio-screenshot"
            />
            <div>
              <h3 className="title">{title}</h3>
              <p className="text">{description}</p>
              <Link href={href} className="btn btn--link" target="_blank">
                Visit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
