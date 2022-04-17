import React from "react";
import { useNavigate } from "react-router-dom";
import ContactMe from "../ContactMe/ContactMe";
import KeyFeatures from "../KeyFeatures/KeyFeatures";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="home-container">
        <div className="mb-5 home-banner">
          <div className="text-white container pt-5">
            <div className="mt-md-5 mx-auto info-container">
              <h1 className="home-title">Hi! I'm Alamin</h1>
              <h1 className="home-title">Your New Personal Trainer</h1>
              <p className="py-4">
                Personal trainers are responsible for educating clients and
                enforcing policies regarding safe and proper use of equipment.
              </p>
              <div className="md-text-align-start text-align-center button-area">
                <button
                  className="btn btn-outline-warning btn-lg d-md-inline"
                  onClick={() => navigate("/register")}
                >
                  SIGN UP
                </button>
                <button
                  className="btn btn-outline-warning btn-lg ms-md-4 d-md-inline"
                  onClick={() => navigate("/about")}
                >
                  ABOUT ME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="my-5 pb-5" id="services">
        <Services></Services>
      </section>
      <section className="mt-5 py-5">
        <KeyFeatures></KeyFeatures>
      </section>
      <ContactMe></ContactMe>
    </>
  );
};

export default Home;
