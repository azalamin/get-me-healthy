import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setConfirmPasswordError("Confirm password not match!");
      return;
    }
  };

  return (
    <>
      <div className="form-body">
        <div className="row">
          <div className="form-holder">
            <div className="form-content">
              <div className="form-items">
                <h3>Register Today</h3>
                <p>Fill in the data below.</p>
                <form className="requires-validation" onSubmit={handleRegister}>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      placeholder="E-mail Address"
                      onBlur={handleEmailBlur}
                      required
                    />
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
                  </div>
                  <div className="col-md-12">
                    <input
                      className="form-control"
                      type="password"
                      name="ConfirmPassword"
                      placeholder="Confirm Password"
                      onBlur={handleConfirmPasswordBlur}
                      required
                    />
                    <p className="text-danger mt-2">{confirmPasswordError}</p>
                  </div>

                  <div className="form-button mt-3">
                    <button
                      id="submit"
                      type="submit"
                      className="btn btn-primary"
                    >
                      Register
                    </button>
                    <p className="mt-2">
                      Already have an account?
                      <Link
                        className="text-decoration-none text-warning ms-2"
                        to="/login"
                      >
                        Login
                      </Link>
                    </p>
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

export default Register;
