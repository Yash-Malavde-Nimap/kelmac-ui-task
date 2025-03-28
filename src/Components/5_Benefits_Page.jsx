// ################## IMPORTS #############################

import { useEffect, useState } from "react";

// ################### IMAGES #############################

import vector from "../images/Vector_Line.png";

// ################## CSS #################################

import "../styles/5_Benefits_Page.css";

// ################### VARIABLES ##########################

import { benefits_Card } from "../Variables";

// ################### COMPONENTS #########################

import Cards from "./Cards/Cards";

// ########################################################



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

      <Cards
        type="Benefits"
        options={benefits_Card}
        active={activeCardId}
        method={handleDesc}
      />
      <div
        className={`page-5-description`}
        style={{
          background: descriptionColor,
          display: `${activeCardId ? "" : "none"}`,
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
