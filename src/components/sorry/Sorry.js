import React from "react";
import { Layout } from "../layout/Layout";
import { Link } from "react-router-dom";
import s from "./Sorry.module.scss";

export const Sorry = () => {
  return (
    <Layout>
      <div className={s.container}>
        <h1>We're sorry to see you go.</h1>
        <p>
          Your email has been removed from the list and you will no longer
          receive any emails from us. If you would like to resubscribe, just
          click the button below.
        </p>
        <Link to="/" className={s.linkText}>
          Sign up
        </Link>
      </div>
    </Layout>
  );
};
