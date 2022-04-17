import React, { useEffect, useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user]);

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(email, password);
  };

  return (
    <>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Please Login</h3>
                <p>Enter your email and password</p>
                <form className="requires-validation" onSubmit={handleLogin}>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      onBlur={handleEmailBlur}
                      required
                    />
                    <div className="valid-feedback">Email field is valid!</div>
                    <div className="invalid-feedback">
                      Email field cannot be blank!
                    </div>
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="password"
                      name="password"
                      placeholder="Password"
                      onBlur={handlePasswordBlur}
                      required
                    />
                    <div className="valid-feedback">
                      Password field is valid!
                    </div>
                    <div className="invalid-feedback">
                      Password field cannot be blank!
                    </div>
                  </div>

                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Login
                    </button>
                    <p className="mt-2">
                      New to Get me Healthy?{" "}
                      <Link
                        className="text-decoration-none text-warning ms-2"
                        to="/register"
                      >
                        Register
                      </Link>
                    </p>
                    <p className="mt-2 text-danger">{error?.message}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
