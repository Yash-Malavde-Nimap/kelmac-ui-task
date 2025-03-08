import "./1_TrainingFormPage.css";
import vector from "../images/Vector_Line.png";
import circles from "../images/Group 458.png";
import {
  countries,
  coursesOptions,
  form_Object,
  trainingOptions,
} from "../Variables.js";
import { useState } from "react";
import Quote_Button from "./Buttons/Quote_Button.jsx";
import Whatsapp_Button from "./Buttons/Whatsapp_Button.jsx";

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
            <img src="../src/images/Chat_Icon.png" width={25} alt="" />
          </a>
        </div>
        <div className="main-container">
          <div className="circle-div">
            <img className="circle-image" src={circles} alt="" />
          </div>

          {/* Left Div */}
          <div className="left-div">
            <h2 className="heading_page1">
              Excellence Redefined : Kelmac's Training <br /> Solutions -{" "}
              <span className="highlight">
                Tailored
                <img className="highlight-vector" src={vector} alt="" />
              </span>
            </h2>
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
            <form onSubmit={handleSubmit} className="form">
              {/* Full Name */}
              <div className="form-group">
                <label className="form-label" htmlFor="full_name">
                  Full Name
                </label>
                <input
                  className="form-input"
                  type="text"
                  name="full_name"
                  value={formState.full_name}
                  placeholder="Enter Full Name"
                  onChange={handleForm}
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email ID
                </label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  value={formState.email}
                  placeholder="Enter Email ID"
                  onChange={handleForm}
                />
              </div>

              {/* Training */}
              <div className="form-group">
                <label className="form-label" htmlFor="training">
                  Training you are Looking For
                </label>
                <select
                  className="form-select"
                  name="training"
                  value={formState.training}
                  onChange={handleForm}
                >
                  <option value="" disabled>
                    Select Training
                  </option>
                  {trainingOptions.map((train, id) => (
                    <option key={id} value={train.value}>
                      {train.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Course */}
              <div className="form-group">
                <label className="form-label" htmlFor="course">
                  Course Nature
                </label>
                <select
                  className="form-select"
                  name="course"
                  value={formState.course}
                  onChange={handleForm}
                >
                  <option value="" disabled>
                    Select Course Nature
                  </option>
                  {coursesOptions.map((course, id) => (
                    <option key={id} value={course.value}>
                      {course.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Country */}
              <div className="form-group">
                <label className="form-label" htmlFor="country">
                  Country (Optional)
                </label>
                <select
                  className="form-select"
                  name="country"
                  value={formState.country}
                  onChange={handleForm}
                >
                  <option value="" disabled>
                    Select Country
                  </option>
                  {countries.map((cntry, id) => (
                    <option key={id} value={cntry.value}>
                      {cntry.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Message (Optional)
                </label>
                <textarea
                  className="form-textarea"
                  name="message"
                  value={formState.message}
                  placeholder="Write a Message"
                  onChange={handleForm}
                />
              </div>

              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* 2nd Container / Lower Container */}
        <div className="lower-container">
          <h2 className="lower-heading">
            Excellence Redefined : <br /> Kelmac's Training Solutions -{" "}
            <span className="highlight">
              Tailored
              <img className="highlight-vector" src={vector} alt="" />
            </span>
          </h2>
          <p className="lower-paragraph">
            We address the frustration of generic training by offering
            customized ISO solutions that focus only on your critical compliance
            and performance needs. Our flexible scheduling ensures training
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
