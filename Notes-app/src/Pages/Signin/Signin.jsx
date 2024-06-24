import React, { useEffect, useRef, useState } from "react";
import "./Signin.css";
import { useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const Signin = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);

  const handleFormSubmit = (event) => {
    event.preventDefault();
  };

  const handleSigninBtn = () => {
    if (
      nameRef.current.value.length === 0 ||
      emailRef.current.value.length === 0 ||
      passwordRef.current.value.length === 0
    ) {
      return null;
    }
    return navigate("/log-in");
  };

  const navigate = useNavigate();

  return (
    <div className="signin-container">
      <LoadingBar
        color="#4361ee"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <form onSubmit={(event) => handleFormSubmit(event)}>
        <h2>Sign-in</h2>
        <div className="input-box">
          <p>Your name</p>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter your Name"
            required
          />
        </div>
        <div className="input-box">
          <p>Email</p>
          <input
            type="text"
            ref={emailRef}
            placeholder="Enter your Email"
            required
          />
        </div>
        <div className="input-box">
          <p>Password</p>
          <input
            type="text"
            ref={passwordRef}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" onClick={() => handleSigninBtn()}>
          Sign in
        </button>
        <p className="signin-login">
          have an account?{" "}
          <span onClick={() => navigate("/log-in")}>log in</span>
        </p>
      </form>
    </div>
  );
};

export default Signin;
