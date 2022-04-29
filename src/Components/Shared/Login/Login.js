import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <Container>
      <div className="login-form mx-auto">
        <form>
          <h1>Log In</h1>
          <div className="login-details">
            <p className="filed-name">Email</p>
            <input
              className="input-field w-100"
              type="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="login-details">
            <p className="filed-name">Password</p>
            <input
              className="input-field w-100"
              type="password"
              placeholder="Your Password"
              required
            />
          </div>

          <input type="submit" className="submit-btn w-100" value="Login" />

          <p>
            Don't have an account ?{" "}
            <Link className="text-decoration-none link-text" to={"/signup"}>
              Create New Account
            </Link>
          </p>

          <div className="my-4 or">Or</div>

          <button
            // onClick={() => signInWithGoogle()}
            className="social w-100"
          >
            <img src="google.png" className="google-img mx-3" alt="" />
            Continue with Google
          </button>
        </form>
      </div>
    </Container>
  );
};

export default Login;
