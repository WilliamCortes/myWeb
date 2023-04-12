import React from "react";
import style from "@/styles/burger.module.css";

type Props = {
  isOpen: boolean;
  handleShow: () => void;
  size?: string;
  color?: string;
  top?: string;
  left?: string;
  thick?: string;
};

const Burger: React.FC<Props> = ({
  isOpen,
  handleShow,
  size,
  color,
  top,
  left,
  thick,
}) => {
  const styleBtn = {
    width: size,
    height: size,
    top,
    left,
  };

  const propsStyle = {
    width: size,
    height: thick,
    background: color,
  };
  const style1 = {
    transform: isOpen ? "rotate(45deg)" : "rotate(0)",
  };

  const style2 = {
    opacity: isOpen ? "0" : "1",
    transform: isOpen ? "translateX(20px)" : "translateX(0)",
  };

  const style3 = {
    transform: isOpen ? "rotate(-45deg)" : "rotate(0)",
  };

  return (
    <button className={style.btn} style={styleBtn} onClick={handleShow}>
      <div className={style.line} style={{ ...style1, ...propsStyle }} />
      <div className={style.line} style={{ ...style2, ...propsStyle }} />
      <div className={style.line} style={{ ...style3, ...propsStyle }} />
    </button>
  );
};

export default Burger;
