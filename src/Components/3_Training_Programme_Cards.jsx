import { program_Cards } from "../Variables";
import "./3_Training_Programme_Cards.css";

const Training_Programme_Cards_3 = () => {
  
  return (
    <div className="programme-cards-container">
      {program_Cards.map((item) => (
        <div className="programme-card" key={item.id}>
          <div className="card-body">
            <div className="card-header">
              <p className="card-price">{item.price}</p>
              <img
                src="src/images/logos/Quality_Assured_Logo.png"
                alt="Quality Assured"
                className="card-image"
              />
            </div>

            <div className="card-title-container">
              <h2 className="card-title">{item.name}</h2>
              <p className="card-category">{item.category}</p>
            </div>

            <div className="card-divider" />

            <div className="card-details">
              <ul className="card-details-list">
                <li className="card-detail-item">
                  <img
                    src="../src/images/card_page_logos/Card_Logo_1.png"
                    width={28}
                    alt=""
                  />
                  {item.mode}
                </li>
                <li className="card-detail-item">
                  <img
                    src="../src/images/card_page_logos/Card_Logo_2.png"
                    width={28}
                    alt=""
                  />
                  {item.date}
                </li>
                <li className="card-detail-item">
                  <img
                    src="../src/images/card_page_logos/Card_Logo_3.png"
                    width={28}
                    alt=""
                  />
                  4 days
                </li>
                <li className="card-detail-item">
                  <img
                    src="../src/images/card_page_logos/Card_Logo_4.png"
                    width={25}
                    alt=""
                  />
                  {item.language}
                </li>
              </ul>
            </div>
            <button className="card-button">
              View Details
              <img className="card-button-icon" src="../src/images/card_page_logos/right_icon.png" width={20} alt="" />
            </button>
          </div>
        </div>
      ))}

      <div class="pagination">
        <div class="pagination-buttons">
          <button class="prev-button">{"<"}</button>

          <div class="page-numbers">
            <h2 class="page-number">.</h2>
            <h2 class="page-number">.</h2>
            <h2 class="page-number active">.</h2>
            <h2 class="page-number">.</h2>
          </div>

          <button class="next-button">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Training_Programme_Cards_3;
