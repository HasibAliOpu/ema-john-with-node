import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import google from "../../images/google.png";
import "./SignUp.css";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [error, setError] = useState("");
  const [createUserWithEmailAndPassword, user, loading, hookError] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPassBlur = (event) => {
    setConfirmPass(event.target.value);
  };
  if (user) {
    navigate(from, { replace: true });
  }
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPass) {
      setError("Your Password didn't match !");
      return;
    }
    if (password.length < 6) {
      setError("Your Password Must Need 6 characters !");
    }
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Sign Up</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm-Password</label>
            <input
              onBlur={handleConfirmPassBlur}
              type="password"
              name="confirm-password"
              id=""
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <input type="submit" value="Sign Up" className="submit-btn" />
        </form>
        <p style={{ textAlign: "center" }}>
          Already Have an Account?{" "}
          <Link className="form-link" to="/login">
            Go Login
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

export default SignUp;
