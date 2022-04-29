import { signOut } from "firebase/auth";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import "./LoginBox.css";

const LoginBox = () => {
  const [user] = useAuthState(auth);

  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <Container>
      <div className="login-box">
        <div className="d-flex flex-wrap bd-highlight example-parent">
          <div className="p-2 mt-2 flex-grow-1 bd-highlight col-example">
            <h4>Sign in to see what's available in our Spicy Inventory .</h4>
          </div>

          <div className="mx-5 p-3 bd-highlight col-example">
            {user ? (
              <Link to={"login"} onClick={handleSignOut}>
                <button className="login ">Sign out</button>
              </Link>
            ) : (
              <Link to={"login"}>
                <button className="login ">Sign in</button>
              </Link>
            )}

            <Link to={"signup"}>
              <button className="signup">Create Account</button>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default LoginBox;
