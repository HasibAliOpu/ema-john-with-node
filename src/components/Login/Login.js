import React, { useState } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/google.png";
import "./Login.css";
const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  if (user || googleUser) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return (
      <>
        <img
          src="https://c.tenor.com/YAs3DgW0dbMAAAAC/loading-loader.gif"
          alt=""
        />
      </>
    );
  }
  const handleUserSignIn = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Login</h1>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
            />
          </div>
          <p>{error?.message}</p>

          <input type="submit" value="Login" className="submit-btn" />
        </form>
        <p style={{ textAlign: "center" }}>
          New to Ema-John?{" "}
          <Link className="form-link" to="/signup">
            Create New Account
          </Link>
        </p>
        <div className="horizontal-divider">
          <div className="left-line"></div>
          <p>Or</p>
          <div className="right-line"></div>
        </div>
        <button onClick={() => signInWithGoogle()} className="google-signin">
          <img src={google} alt="" />
          <p>Continue with Google</p>
        </button>
      </div>
    </div>
  );
};

export default Login;
