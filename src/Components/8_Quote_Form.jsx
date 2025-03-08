import "./8_Quote_Form.css";
import vector from "../images/Vector_Line.png";

import { useState } from "react";
import page_bg from "../images/Quote_Form_BG_8.png";
import { countries, coursesOptions, trainingOptions } from "../Variables";

const Quote_Form_8 = () => {
  const form_Object = {
    full_name: "",
    email: "",
    training: "",
    course: "",
    country: "",
    message: "",
  };

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
    console.log("Form Submitted from Bottom of the Page", formState);
    setFormState(form_Object);
  };

  return (
    <div className="page-8-container">
      <img src={page_bg} alt="" className="page-8-bg" />

      {/* HEADING LEFT */}
      <div className="page-8-heading-container">
        <div className="page-8-heading-text">
          <h2 className="page-8-heading-title">
            Get A Quote
            <img className="page-8-highlight-vector" src={vector} alt="" />
          </h2>
          <p className="page-8-heading-description">
            Please take the time to complete the following form and provide us
            with as much information as you are able to ensure we can deal with
            your request as promptly.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="page-8-form">
          <div className="page-8-form-input-group-full">
            <label htmlFor="" className="page-8-form-label">
              Enter Full Name
            </label>
            <input
              type="text"
              name="full_name"
              value={formState.full_name}
              onChange={handleForm}
              placeholder="Enter Full Name"
              className="page-8-form-input"
            />
          </div>

          <div className="page-8-2-group ">
            <div className="page-8-form-select-group">
              <label htmlFor="" className="page-8-form-label">
                Country (Optional)
              </label>
              <select
                className="page-8-form-select"
                name="country"
                value={formState.country}
                onChange={handleForm}
                id=""
              >
                <option
                  value=""
                  disabled
                  selected
                  className="page-8-form-option"
                >
                  Select Country
                </option>

                {countries.map((cntry, id) => (
                  <option
                    className="page-8-form-option"
                    key={id}
                    value={cntry.value}
                  >
                    {cntry.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="page-8-form-input-group">
              <label htmlFor="" className="page-8-form-label">
                Email ID
              </label>
              <input
                type="text"
                name="email"
                value={formState.email}
                onChange={handleForm}
                className="page-8-form-input"
                placeholder="Enter Email ID"
              />
            </div>
          </div>

          <div className="page-8-2-group">
            <div className="page-8-form-select-group">
              <label htmlFor="" className="page-8-form-label">
                Training you are looking for
              </label>
              <select
                className="page-8-form-select"
                name="training"
                value={formState.training}
                onChange={handleForm}
                id=""
              >
                <option value="" disabled selected>
                  Select Training
                </option>
                {trainingOptions.map((train, id) => (
                  <option
                    className="page-8-form-option"
                    key={id}
                    value={train.value}
                  >
                    {train.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="page-8-form-input-group">
              <label htmlFor="" className="page-8-form-label">
                Course Nature
              </label>
              <select
                className="page-8-form-select"
                name="course"
                value={formState.course}
                onChange={handleForm}
                id=""
              >
                <option value="" disabled selected>
                  Select Course
                </option>
                {coursesOptions.map((course, id) => (
                  <option
                    className="page-8-form-option"
                    key={id}
                    value={course.value}
                  >
                    {course.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="page-8-form-input-group-full">
            <label htmlFor="" className="page-8-form-label">
              Message (Optional)
            </label>
            <textarea
              name="message"
              id=""
              value={formState.message}
              onChange={handleForm}
              className="page-8-form-textarea"
              placeholder="Write a Message"
            ></textarea>
          </div>

          <button className="page-8-form-submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Quote_Form_8;
