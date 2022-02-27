import React from "react";
import s from "./Signup.module.scss";
export const Signup = () => {
  return (
    <div className={s.container}>
      <div className={s.inputWrapper}>
        <input placeholder="Email" className={s.input} type="text" />
        <button className={s.button}>SUBSCRIBE</button>
      </div>
    </div>
  );
};
