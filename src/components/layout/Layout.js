import React from "react";
import s from "./Layout.module.scss";
export const Layout = ({ children }) => {
  return (
    <div className={s.container}>
      <div className={s.content}>{children}</div>
    </div>
  );
};
