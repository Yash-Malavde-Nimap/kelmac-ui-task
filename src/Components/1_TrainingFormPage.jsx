import "./1_TrainingFormPage.css";
import vector from "../images/Vector_Line.png";
import circles from "../images/Group 458.png";
import { form_Object } from "../Variables.js";
import { useState } from "react";
import Quote_Button from "./Buttons/Quote_Button.jsx";
import Whatsapp_Button from "./Buttons/Whatsapp_Button.jsx";
import LongForm from "./Forms/LongForm.jsx";

const TrainingFormPage1 = () => {
  const [formState, setFormState] = useState(form_Object);

  const handleForm = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted from Top of the Page", formState);
    setFormState(form_Object);
  };

  return (
    <>
      <div className="main-body">
        <div className="main-chat">
          <a href="/chat">
            <img src="../src/images/Chat_Icon.png" alt="" />
          </a>
        </div>
        <div className="main-container">
          <div className="circle-div">
            <img className="circle-image" src={circles} alt="" />
          </div>

          {/* Left Div */}
          <div className="left-div">
            <p className="heading_page1">
              Excellence Redefined : Kelmac's Training <br /> Solutions -{" "}
              <span className="highlight">
                Tailored
                <img className="highlight-vector" src={vector} alt="" />
              </span>
            </p>
            <p className="description">
              ISO training designed around your business needs—delivered when
              you need it, focused on what matters, and built to deliver
              measurable results
            </p>

            <div className="button-container">
              <Quote_Button />
              <Whatsapp_Button />
            </div>
          </div>

          {/* Right Div with Form */}
          <div className="form-container">
            <LongForm
              handleSubmit={handleSubmit}
              handleForm={handleForm}
              formState={formState}
            />
          </div>
        </div>

        {/* 2nd Container / Lower Container */}
        <div className="lower-container">
          <p className="lower-heading">
            Excellence Redefined : <br /> Kelmac's Training Solutions -{" "}
            <span className="highlight">
              Tailored
              <img className="highlight-vector" src={vector} alt="" />
            </span>
          </p>
          <p className="lower-paragraph">
            We address the frustration of generic training by offering
            customized ISO solutions that focus only on your critical compliance
            br and performance needs. Our flexible scheduling ensures training
            happens on your timeline, minimizing disruption while delivering
            immediate, actionable value. With expert-led sessions, we empower
            your team to achieve lasting improvements and certification success
            faster.
          </p>
        </div>

        <div className="circle-div">
          <img className="circle-image" src={circles} alt="" />
        </div>
      </div>
    </>
  );
};

export default TrainingFormPage1;
