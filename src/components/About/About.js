import React from 'react';
import myPhoto from '../../images/personal_Image.jpg';

const About = () => {
    return (
      <div className="container mt-5">
        <div className="card p-5">
          <div className="row">
            <div className="col-6">
              <img className="img-fluid rounded-3" src={myPhoto} alt="" />
            </div>
            <div className="col-6">
                <h4>Al Amin Sheikh</h4>
              <p
                style={{ fontWeight: "500", fontSize: "18px" }}
                className="text-muted"
              >
                Hi there! I passed 4 month under learning web development. It has increased my confident and interests. Now i want to work 8/10 hours a day to achieve my goal. <br /> <br /> 
                
                I tell myself if a normal employee can work 9 to 5 Job why can't i wok just 8 hours a day for my goal? I get motivated myself. I want to work harder, every single day i will be trying for my goal. I will give as long as it takes every day but I want my dream comes true.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default About;