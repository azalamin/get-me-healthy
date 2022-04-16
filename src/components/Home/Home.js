import React from 'react';
import './Home.css';

const Home = () => {
    return (
      <div className="home-container">
        <div className="text-white container pt-5">
          <div className="mt-md-5 w-75 mx-auto">
            <h1 className="home-title">Get Me Healthy</h1>
            <h1 className="home-title">Your New Personal Trainer</h1>
            <p className='py-4'>
              Personal trainers are responsible for educating clients and
              enforcing policies regarding safe and proper use of equipment.
            </p>
            <div>
              <button className="btn btn-outline-warning btn-lg">
                SIGN UP
              </button>
              <button className="btn btn-outline-warning btn-lg ms-4">
                ABOUT ME
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;