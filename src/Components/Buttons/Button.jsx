import "./Quote_Button.css";
import "./Whatsapp_Button.css";

const Button = ({ type, className }) => {
  if (type == "Quote") {
    return <button className="quote-button">Get a Quote</button>;
  } else if (type == "Whatsapp") {
    return (
      <button className="whatsapp-button">
        <img src="src\images\logos\whatsapp_icon.png" width="25" height="25" />
        Whatsapp Us
      </button>
    );
  } else if (type == "Submit") {
    return <button className={className}>Submit</button>;
  }
};

export default Button;
