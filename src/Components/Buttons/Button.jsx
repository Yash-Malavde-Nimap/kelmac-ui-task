import './Quote_Button.css'
import './Whatsapp_Button.css'

const Button = ({ type }) => {
  if (type == "Quote") {
    return <button className="quote-button">Get a Quote</button>;
  } else if (type == "Whatsapp") {
    return (
      <button className="whatsapp-button">
        <img src="src\images\logos\whatsapp_icon.png" width="25" height="25" />
        Whatsapp Us
      </button>
    );
  }
};

export default Button;
