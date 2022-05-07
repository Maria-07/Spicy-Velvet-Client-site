import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import PageTitle from "../PageTitle/PageTitle";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  let errorElement;

  const handleEmailBlur = (e) => setEmail(e.target.value);
  const handlePasswordBlur = (e) => setPassword(e.target.value);
  const handleConfirmBlur = (e) => {
    const value = e.target.value;
    if (value === "") {
      setError("");
    }
    setConfirmPassword(value);
  };

  //create account with email And password :
  const [createUserWithEmailAndPassword, user, errorAuth] =
    // useCreateUserWithEmailAndPassword(auth);
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  if (errorAuth) {
    errorElement = <p className="error">Error: {errorAuth.message}</p>;
  }

  //sign Up with google
  const [signInWithGoogle, user1] = useSignInWithGoogle(auth);

  // navigate router
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user || user1) {
    navigate(from, { replace: true });
  }

  const handleCreateUser = (event) => {
    event.preventDefault();

    // console.log(email, password, confirmPassword);
    if (password !== confirmPassword) {
      setError("your two passwords are not matched");
      return;
    }
    if (password.length < 6) {
      setError("password must be 6 characters");
    }
    createUserWithEmailAndPassword(email, password);
    // setError("");
  };

  return (
    <div>
      <Container>
        <PageTitle title="SignUp"></PageTitle>
        <div className="login-form mx-auto">
          <form onSubmit={handleCreateUser}>
            <h1>Sign Up</h1>
            <div className="login-details">
              <p className="filed-name">Email</p>
              <input
                onBlur={handleEmailBlur}
                className="input-field w-100"
                type="email"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="login-details">
              <p className="filed-name">Password</p>
              <input
                onBlur={handlePasswordBlur}
                className="input-field w-100"
                type="password"
                placeholder="Your Password"
                required
              />
            </div>

            <div className="login-details">
              <p className="filed-name">Confirm Password</p>
              <input
                onBlur={handleConfirmBlur}
                className="input-field w-100"
                type="password"
                placeholder="Confirm Password"
                required
              />
            </div>
            <br />
            {errorElement}
            <p className="error">{error}</p>
            <input
              type="submit"
              className="submit-btn w-100"
              value="Create Account"
            />

            <p>
              Already have an account ?{" "}
              <Link className="text-decoration-none link-text" to={"/login"}>
                Log In
              </Link>
            </p>

            <div className="my-4 or">Or</div>

            <button
              onClick={() => {
                signInWithGoogle();
              }}
              // onClick={() => signInWithGoogle()}
              className="social w-100"
            >
              <img src="google.png" className="google-img mx-3" alt="" />
              Continue with Google
            </button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
