import React from "react";
import { useNavigate } from "react-router-dom";
import './ServiceDetails.css';

const ServiceDetail = ({ service }) => {
  const { img, name, diet, duration, price, supportTime, facility, des } =
    service;
  const navigate = useNavigate();

  return (
    <div className="col-md-4 text-center g-5">
      <div className="card p-3 rounded-3 h-100 service-card">
        <div>
          <img className="img-fluid rounded-3" src={img} alt="" />
        </div>
        <div className="mt-3">
          <h4>{name}</h4>
          <h4>Price: ${price}</h4>
          <p className="text-success fw-bold">{duration}</p>
          <p>
            <small>{des}</small>
          </p>
          <p>
            <small>{supportTime}</small>
          </p>
          <p>
            <small>{diet}</small>
          </p>
          <p>
            <small>{facility}</small>
          </p>
          <div className="">
            <button
              style={{ fontSize: "20px" }}
              className="btn btn-success d-block w-100"
              onClick={()=> navigate('/checkout')}
            >
              Book now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
