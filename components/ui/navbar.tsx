"use client";
import React, { useEffect, FC } from "react";
import Image from "next/image";
import Burger from "./burger";

type Option = {
  title: string;
  href: string;
  className: string;
};

type Props = {
  img: string;
  options: Option[];
  handleShow: () => void;
  showMenu: boolean;
};

export const Navbar: FC<Props> = ({ img, options, handleShow, showMenu }) => {
  useEffect(() => {
    const prefersLight = window.matchMedia(
      "(prefers-color-scheme: light)"
    )?.matches;
    if (prefersLight) {
      document.documentElement.classList.toggle("light-theme");
    }
  }, []);

  const handleClick = () => {
    document.documentElement.classList.toggle("light-theme");
  };

  return (
    <nav>
      <div className="container">
        <div className="nav">
          <div className="nav-logo">
            <Image
              layout="responsive"
              src={img}
              alt="Web Portfolio logo"
              width="45"
              height="43"
            />
          </div>
          <Burger
            isOpen={showMenu}
            handleShow={handleShow}
            size="35px"
            color="var(--gray-dark)"
            thick="3px"
          />
          <ul className="nav-links">
            {options?.map(({ title, href, className }) => (
              <li key={href}>
                <a href={href} className={`btn ${className}`}>
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <button
        id="toggle-theme"
        aria-label="Toggle dark theme"
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          enableBackground="new 0 0 24 24"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="var(--light-icon)"
        >
          <rect fill="none" height="24" width="24" />
          <path d="M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36c-0.98,1.37-2.58,2.26-4.4,2.26 c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z" />
        </svg>
      </button>
    </nav>
  );
};
