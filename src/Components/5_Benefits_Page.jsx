import { useEffect, useState } from "react";

import vector from "../images/Vector_Line.png";
import "./5_Benefits_Page.css";
import { benefits_Card } from "../Variables";

const Benefits_Page_5 = () => {
  const [showDesc, setShowDesc] = useState(false);
  const [description, setDescription] = useState("");
  const [descriptionColor, setDescriptionColor] = useState("");
  const [activeCardId, setActiveCardId] = useState(null);

  const handleDesc = (id) => {
    const selectedBenefit = benefits_Card.find((item) => item.id === id);

    setShowDesc(true);
    setDescription(selectedBenefit.description);
    setDescriptionColor(selectedBenefit.color);
    setActiveCardId(id);
  };

  useEffect(() => {
    handleDesc(1);
  }, []);

  return (
    <div className="page-5-container">
      <div className="page-5-header">
        <h2>
          <img src={vector} className="page-5-vector" alt="Vector Line" />
          Benefits of Private In-House Training
        </h2>
      </div>

      {/* COLOR CARD SECTION */}
      <div className="page-5-cards-container">
        {benefits_Card.map((benefit) => (
          <div
            key={benefit.id}
            className={`page-5-card ${
              activeCardId === benefit.id ? "active" : "inactive"
            }`}
            style={{ background: benefit.color }}
            onClick={() => handleDesc(benefit.id)}
          >
            <div className="page-5-card-content">
              <img src={benefit.logo} alt="" className="page-5-logo" />
              <div className="page-5-card-text">
                <h2 className="page-5-title">{benefit.first}</h2>
                <p className="page-5-subtitle">{benefit.second}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* DESCRIPTION SECTION */}

      {/* ${
          activeCardId === 1
            ? "page-5-rounded-right"
            : activeCardId === 5
            ? "page-5-rounded-left"
            : "default"
        } */}
      <div
        className={`page-5-description`}
        style={{
          background: descriptionColor,

          borderRadius:
            activeCardId === 1
              ? "0px 12px 12px 12px"
              : activeCardId === 5
              ? "12px 0 12px 12px"
              : "",
        }}
      >
        {showDesc ? description : ""}
      </div>
    </div>
  );
};

export default Benefits_Page_5;
