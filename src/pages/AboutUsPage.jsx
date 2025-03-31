import React from "react";
import PageAnimation from "../animations/PageAnimation";

const AboutUsPage = () => {
  return (
    <PageAnimation>
      <div
        style={{
          height: "100vh",
          background: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
        }}
      >
        About us
      </div>
    </PageAnimation>
  );
};

export default AboutUsPage;
