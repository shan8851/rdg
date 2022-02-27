import React from "react";
import { Layout } from "../layout/Layout";
import s from "./main.module.scss";
import { Link } from "react-router-dom";
import { Signup } from "../signup/Signup";

export const Main = () => {
  return (
    <Layout>
      <div className={s.container}>
        <div className={s.hero}>
          <h1 className={s.heroText}>
            Cutting through the <span className={s.yellow}>noise </span> for new
            developers
          </h1>
          <p className={s.leadText}>
            Subscribe to ready dev go and get proven tips and advice on starting
            your career as a software developer.
          </p>
          <Signup />
          <Link to="testimonials" className={s.linkText}>
            Find out what others are saying
          </Link>
        </div>
      </div>
    </Layout>
  );
};
