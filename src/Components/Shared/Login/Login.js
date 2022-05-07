import axios from "axios";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import Loading from "../Loading/Loading";
import PageTitle from "../PageTitle/PageTitle";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let errorElement;

  const handleEmailBlur = (e) => setEmail(e.target.value);
  const handlePasswordBlur = (e) => setPassword(e.target.value);

  // sign in with email
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  if (error) {
    errorElement = <p className="error">Error: {error.message}</p>;
  }

  // sign in with google
  const [signInWithGoogle, user1, loading1, error1] = useSignInWithGoogle(auth);
  if (error1) {
    errorElement = <p className="error">Error: {error1.message}</p>;
  }

  // route navigate
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  if (user || user1) {
    navigate(from, { replace: true });
  }

  if (loading || loading1) {
    return <Loading></Loading>;
  }

  if (user || user1) {
    // navigate(from, { replace: true });
  }

  const handleUserSignIn = async (event) => {
    event.preventDefault();
    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      "https://dry-sea-63438.herokuapp.com/login",
      { email }
    );
    localStorage.setItem("accessToken", data);
    navigate(from, { replace: true });
  };

  return (
    <Container>
      <PageTitle title="Login"></PageTitle>
      <div className="login-form mx-auto">
        <form onSubmit={handleUserSignIn}>
          <h1>Log In</h1>
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

          <br />
          {errorElement}
          {/* <p>{error?.message}</p> */}
          {<Loading></Loading> && loading}

          <input type="submit" className="submit-btn w-100" value="Login" />

          <p>
            Don't have an account ?{" "}
            <Link className="text-decoration-none link-text" to={"/signup"}>
              Create New Account
            </Link>
          </p>

          <div className="my-4 or">Or</div>

          <button onClick={() => signInWithGoogle()} className="social w-100">
            <img src="google.png" className="google-img mx-3" alt="" />
            Continue with Google
          </button>
        </form>
        {/* <ToastContainer /> */}
      </div>
    </Container>
  );
};

export default Login;
