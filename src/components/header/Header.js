import React from "react";
import s from "./Header.module.scss";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={s.container}>
      <div className={s.logo}>
        <div className={s.red}>{"{ready}"}</div>
        <div className={s.orange}>{"{dev}"}</div>
        <div className={s.green}>{"{go}"}</div>
      </div>
      <div className={s.links}>
        <Link to="/" className={s.link}>
          Home
        </Link>
        <Link to="/about" className={s.link}>
          About
        </Link>
      </div>
    </header>
  );
};
