const TrainingCards = ({ card }) => {
  return (
    <div className="programme-card" key={card.id}>
      <div className="card-body">
        <div className="card-header">
          <p className="card-price">{card.price}</p>
          <img
            src="src/images/logos/Quality_Assured_Logo.png"
            alt="Quality Assured"
            className="card-image"
          />
        </div>

        <div className="card-title-container">
          <p className="card-title">{card.name}</p>
          <p className="card-category">{card.category}</p>
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
              {card.mode}
            </li>
            <li className="card-detail-item">
              <img
                src="../src/images/card_page_logos/Card_Logo_2.png"
                width={28}
                alt=""
              />
              {card.date}
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
              {card.language}
            </li>
          </ul>
        </div>
        <button className="card-button">
          View Details
          <img
            className="card-button-icon"
            src="../src/images/card_page_logos/right_icon.png"
            width={20}
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

export default TrainingCards;
