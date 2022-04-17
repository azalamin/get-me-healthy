import React from "react";
import "./keyFeatures.css";

const features = [
  {
    name: "STREET WORKOUT",
    id: 1,
    img: "https://i.ibb.co/3CwnXsL/feature-1.png",
    description:
      "He was justified by the event; for the footpath soon after appeared a little wider and more mitage.",
  },
  {
    name: "YOGA AND PILATES",
    id: 2,
    img: "https://i.ibb.co/KFJSqxk/feature-2.png",
    description:
      "At length one of them called out in a clear, polite, smooth dialect, not unlike in sound.",
  },
  {
    name: "CARDIO TRAININGS",
    id: 3,
    img: "https://i.ibb.co/gThV9kF/feature-3.png",
    description:
      "He made his passenger captain of one, with four of the men and himself, his mate.",
  },
  {
    name: "INTERVAL TRAININGS",
    id: 4,
    img: "https://i.ibb.co/3r0W7nC/feature-4.png",
    description:
      "This sounded a very good reason, and Alice was quite pleased to know it and Alice was quite.",
  },
];

const KeyFeatures = () => {
  return (
    <div className="keyFeatures-container py-5">
      <div className="container">
        <h1 className="text-center fw-bold">KeyFeatures</h1>
        <p style={{ fontWeight: "500" }} className="text-center text-muted">
          Portland meggings meditation, craft beer single-origin coffee
          knausgaard echo park
        </p>
        <div className="row">
          {features.map((feature) => (
            <div key={feature.id} className="col-md-3 text-center g-5">
              <div className="">
                <div>
                  <img width={100} src={feature.img} alt="" />
                </div>
                <h6 className="fw-bold">{feature.name}</h6>
                <p style={{ fontWeight: "500" }} className="text-muted">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
