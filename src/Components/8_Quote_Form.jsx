import "./8_Quote_Form.css";
import vector from "../images/Vector_Line.png";
import page_bg from "../images/Quote_Form_BG_8.png";
import { useState } from "react";
import { form_Object } from "../Variables";
import Form from "../Components/Forms/Form.jsx";

const Quote_Form_8 = () => {
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
          <p className="page-8-heading-title">
            Get A Quote
            <img className="page-8-highlight-vector" src={vector} alt="" />
          </p>
          <p className="page-8-heading-description">
            Please take the time to complete the following form and provide us
            with as much information as you are able to ensure we can deal with
            your request as promptly.
          </p>
        </div>

        {/* FORM */}
        <Form
          type="Quote"
          handleSubmit={handleSubmit}
          handleForm={handleForm}
          formState={formState}
        />
      </div>
    </div>
  );
};

export default Quote_Form_8;
