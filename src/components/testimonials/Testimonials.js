import React from "react";
import { Link } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { Signup } from "../signup/Signup";
import s from "./Testimonials.module.scss";

export const Testimonials = () => {
  return (
    <Layout>
      <div className={s.container}>
        {td.map((t) => (
          <Testimonial author={t.author} quote={t.quote} title={t.title} />
        ))}
        <Signup />
        <Link className={s.linkText} to="/">
          Go back
        </Link>
      </div>
    </Layout>
  );
};

const Testimonial = ({ quote, author, title }) => {
  return (
    <div key={author} className={s.testimonial}>
      <h1 className={s.quote}>{`"${quote}"`}</h1>
      <p className={s.author}>
        - {author},<span> {title}</span>
      </p>
    </div>
  );
};

const td = [
  {
    author: "Mike",
    title: "Software Engineer",
    quote:
      "As someone learning web development from scratch I would not have been able to get to the position ready for a job in the industry without RDG's help. He has been patient and on-hand to help me through every stage of the process including HTML, CSS, Javascript, React, Github and more. He is incredibly knowledgeable in these areas and I cannot thank him enough for his support over the past 6 months.",
  },
  {
    author: "Stephon",
    title: "computer science grad",
    quote:
      "RDG has been super helpful, we focused more on the non-technical side of things but I think that is what I need moreso right now so I'm glad that was prioritized.",
  },
  {
    author: "Memas",
    title: "Indie Hacker",
    quote:
      "The session was really helpful and valuable. I got to ask RDG questions that he had knowledge and experience about. He gave me valuable feedback and good ideas to think about! We are going to have frequent calls to exchange ideas and compare the feedback we are doing in our projects.",
  },
  {
    author: "Dom",
    title: "Aspiring Engineer",
    quote:
      "The world of programming can be so overwhelming with all the possible paths, courses, articles, blogs and more. RDG has helped me focus on my own path and I am now making solid progress and ready to apply for jobs",
  },
];
