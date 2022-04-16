import React from "react";
import Services from "../Services/Services";
import "./Home.css";

const Home = () => {
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
                <button className="btn btn-outline-warning btn-lg d-md-inline  ">
                  SIGN UP
                </button>
                <button className="btn btn-outline-warning btn-lg ms-md-4 d-md-inline ">
                  ABOUT ME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5" id="services">
        <Services></Services>
      </div>
    </>
  );
};

export default Home;
