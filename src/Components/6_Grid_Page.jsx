import "../Components/6_Grid_Page.css";
import { gridDetails } from "../Variables";
import Quote_Button from "./Buttons/Quote_Button";
import Whatsapp_Button from "./Buttons/Whatsapp_Button";

const Grid_Page_6 = () => {
  return (
    <div className="page-6-container">
      <div className="page-6-flex-column">
        <div className="page-6-grid">
          {/* 1st */}
          <div className="page-6-div-1 py-10">
            <h2 className="page-6-number">5</h2>
            <h2 className="page-6-title">
              Key <br /> Reasons <br /> to Choose <br />
              Private Training
            </h2>
          </div>

          {/* 2 - 6 */}
          {gridDetails.map((item) => (
            <div
              className={`page-6-card ${
                item.id === 1
                  ? "page-6-card-bg-1"
                  : item.id === 4
                  ? "page-6-card-bg-2"
                  : "page-6-card-bg-3"
              }`}
              key={item.id}
            >
              <img
                src={item.logo}
                alt={item.title}
                className="page-6-card-logo"
              />
              <h2 className="page-6-subtitle">{item.title}</h2>
              <p className="page-6-description">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="page-6-flex-row">
          <Quote_Button />
          <Whatsapp_Button />
        </div>
      </div>
    </div>
  );
};

export default Grid_Page_6;
