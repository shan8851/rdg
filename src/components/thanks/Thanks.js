import React from "react";
import { Layout } from "../layout/Layout";
import s from "./Thanks.module.scss";

export const Thanks = () => {
  return (
    <Layout>
      <div className={s.container}>
        <h1>Thanks for subscribing.</h1>
        <p>
          Your email has been added to the list and you will receive a fresh
          edition of Ready Dev Go every Monday.
        </p>
      </div>
    </Layout>
  );
};
