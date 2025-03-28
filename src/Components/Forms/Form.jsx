import { countries, coursesOptions, trainingOptions } from "../../Variables";
import Input from "../Inputs/Input";
import Select from "../Select/Select";

const Form = ({ handleSubmit, formState, handleForm, type }) => {
  if (type == "Hero") {
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
    );
  } else if (type == "Quote") {
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
          />
        </div>

        <button className="page-8-form-submit-button">Submit</button>
      </form>
    );
  }
};

export default Form;
