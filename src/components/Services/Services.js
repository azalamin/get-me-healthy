import React, { useEffect, useState } from "react";
import ServiceDetail from "../ServiceDetail/ServiceDetail";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="container">
        <h1 className="text-center pb-md-5 fw-bold">Services</h1>
      <div className="row" id="services">
        {services.map((service) => (
          <ServiceDetail key={service.id} service={service}></ServiceDetail>
        ))}
      </div>
    </div>
  );
};

export default Services;
