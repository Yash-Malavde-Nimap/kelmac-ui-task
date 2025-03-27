import { countries, coursesOptions, trainingOptions } from "../../Variables";
import Input from "../Inputs/Input";
import Select from "../Select/Select";

const LongForm = ({ handleSubmit, formState, handleForm }) => {
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
};

export default LongForm;
