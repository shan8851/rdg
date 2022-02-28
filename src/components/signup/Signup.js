import React, { useState } from "react";
import s from "./Signup.module.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [errorText, setErrorText] = useState("");
  const headers = {
    Authorization: "Token 452bb5c7-4ef2-4ba7-a576-004aa891e061",
  };

  const data = {
    email: email,
    notes: "landing page",
  };

  const onSignUp = async () => {
    if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      await axios.post("https://api.buttondown.email/v1/subscribers", data, {
        headers: headers,
      });
      navigate("/thanks");
    } else {
      setErrorText("Hmmm, that doesn't look like a valid email address");
    }
  };
  return (
    <>
      <div className={s.container}>
        <div className={s.inputWrapper}>
          <input
            placeholder="Email"
            className={s.input}
            type="text"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={() => onSignUp()} className={s.button}>
            SUBSCRIBE
          </button>
        </div>
      </div>
      {errorText !== "" && <p className={s.errorText}>{errorText}</p>}
    </>
  );
};
