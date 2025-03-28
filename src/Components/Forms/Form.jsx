/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";
import {
  countries,
  coursesOptions,
  form_Object,
  trainingOptions,
} from "../../Variables";
import Input from "../Inputs/Input";
import Select from "../Select/Select";
import Button from "../Buttons/Button";
import Textarea from "../Textarea/Textarea";

const Form = ({ type }) => {
  if (type == "Hero") {
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
      <form onSubmit={handleSubmit} className="form">
        {/* Full Name */}
        <Input
          parentClass="form-group"
          className="form-input"
          type="text"
          label="Full Name"
          name="full_name"
          placeholder="Enter Full Name"
          value={formState.full_name}
          onChange={handleForm}
        />

        {/* Email */}
        <Input
          parentClass="form-group"
          className="form-input"
          type="text"
          label="Email ID"
          name="email"
          placeholder="Enter Email"
          value={formState.email}
          onChange={handleForm}
        />

        {/* Training */}
        <Select
          parentClass="form-group"
          className="form-select"
          label="Training you are Looking For"
          name="training"
          value={formState.training}
          onChange={handleForm}
          options={trainingOptions}
          optionLabel="Select Training"
        />

        {/* Course */}
        <Select
          parentClass="form-group"
          className="form-select"
          label="Course Nature"
          name="course"
          value={formState.course}
          onChange={handleForm}
          options={coursesOptions}
          optionLabel="Select Course Nature"
        />

        {/* Country */}
        <Select
          parentClass="form-group"
          className="form-select"
          label="Country (Optional)"
          name="country"
          value={formState.country}
          onChange={handleForm}
          options={countries}
          optionLabel="Select Country"
        />

        {/* Message */}
        <Textarea
          label="Message (Optional)"
          parentClass="form-group"
          labelClassname="form-label"
          className="form-textarea"
          name="message"
          value={formState.message}
          placeholder="Write a Message"
          onChange={handleForm}
        />

        <Button type="Submit" className="submit-button" />
      </form>
    );
  } else if (type == "Quote") {
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
      <form onSubmit={handleSubmit} className="page-8-form">
        <Input
          parentClass="page-8-form-input-group-full"
          type="text"
          label="Full Name"
          name="full_name"
          className="page-8-form-input"
          placeholder="Enter Full Name"
          value={formState.full_name}
          onChange={handleForm}
        />

        <div className="page-8-2-group ">
          <Select
            parentClass="page-8-form-select-group"
            className="page-8-form-select"
            label="Country (Optional)"
            name="country"
            value={formState.country}
            onChange={handleForm}
            options={countries}
            optionLabel="Select Country"
          />

          <Input
            parentClass="page-8-form-input-group"
            type="text"
            label="Email ID"
            name="email"
            className="page-8-form-input"
            placeholder="Enter Email ID"
            value={formState.email}
            onChange={handleForm}
          />
        </div>

        <div className="page-8-2-group">
          <Select
            parentClass="page-8-form-select-group"
            className="page-8-form-select"
            label="Training you are looking for"
            name="training"
            value={formState.training}
            onChange={handleForm}
            options={trainingOptions}
            optionLabel="Select Training"
          />

          <Select
            parentClass="page-8-form-select-group"
            className="page-8-form-select"
            label="Course Nature"
            name="course"
            value={formState.course}
            onChange={handleForm}
            options={coursesOptions}
            optionLabel="Select Course"
          />
        </div>

        <Textarea
          label="Message (Optional)"
          parentClass="page-8-form-input-group-full"
          labelClassname="page-8-form-label"
          className="page-8-form-textarea"
          name="message"
          value={formState.message}
          placeholder="Write a Message"
          onChange={handleForm}
        />

        <Button type="Submit" className="page-8-form-submit-button" />
      </form>
    );
  }
};

export default Form;
