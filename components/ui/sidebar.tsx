import React, { FC, Fragment } from "react";
import style from "@/styles/sidebar.module.css";

type Option = {
  title: string;
  href: string;
  className: string;
  target?: string;
};

type Props = {
  isOpen: boolean;
  options: Option[];
};

export const Sidebar: FC<Props> = ({ isOpen, options }) => {
  if (!isOpen) return <Fragment />;
  return (
    <aside className={style.container}>
      <ul className={style.links}>
        {options?.map(({ title, href, target }) => {
          if (href === "#hire-me") return <Fragment />;
          return (
            <li key={href}>
              <a href={href} className={`btn ${style.btn}`} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
                {title}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};
