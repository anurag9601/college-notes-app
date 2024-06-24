import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import LoadingBar from "react-top-loading-bar";

const Login = () => {

  const loginEmailRef = useRef();
  const LoginPassRef = useRef();

  const navigate = useNavigate();

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(30);
    setTimeout(() => {
      setProgress(100);
    }, 1000);
  }, []);

  const handleLoginFormSubmit = (event) => {
    if(loginEmailRef.current.value.length === 0 || LoginPassRef.current.value.length===0){
      return null
    }
    event.preventDefault();
  };

  const handleLoginBtn = () => {
    if(loginEmailRef.current.value.length === 0 || LoginPassRef.current.value.length ===0){
      return null
    }
    return navigate("/");
  };

  return (
    <div className="login-container">
      <LoadingBar
        color="#4361ee"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <form onSubmit={(event) => handleLoginFormSubmit(event)}>
        <h2>log-in</h2>
        <div className="login-input-box">
          <p>Email</p>
          <input type="email" placeholder="Enter your Email" ref={loginEmailRef} required />
        </div>
        <div className="login-input-box">
          <p>Password</p>
          <input type="text" placeholder="Password" ref={LoginPassRef} required />
        </div>
        <button type="submit" onClick={() => handleLoginBtn()}>
          log in
        </button>
      </form>
    </div>
  );
};

export default Login;
