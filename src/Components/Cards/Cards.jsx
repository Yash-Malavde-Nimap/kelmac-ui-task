const Cards = ({ type, options, active, method, card }) => {
  if (type == "Benefits") {
    return (
      <div className="page-5-cards-container">
        {options.length > 0 ? (
          options.map((item) => (
            <>
              <div
                key={item.id}
                className={`page-5-card ${
                  active === item.id ? "active" : "inactive"
                }`}
                style={{ background: item.color }}
                onClick={() => method(item.id)}
              >
                <div className="page-5-card-content">
                  <img src={item.logo} alt="" className="page-5-logo" />
                  <div className="page-5-card-text">
                    <h2 className="page-5-title">{item.first}</h2>
                    <p className="page-5-subtitle">{item.second}</p>
                  </div>
                </div>
              </div>
              {/* <div
                style={{
                  // width: "25px",
                  height: "20px",
                  background: "white",
                  padding: "20px",
                  display: `${
                    item.id === 5
                      ? "none"
                      : item.id < 5 && item.id > 1
                      ? "flex"
                      : "none"
                  }`,
                  justifyContent: "center",
                  alignItems: "end",
                  borderBottomLeftRadius: "40px ",
                  borderBottomRightRadius: "40px ",
                  overflow: "hidden",
                  marginTop: "180px",
                  marginRight: "20px",
                }}
              >
                {" "}
              </div> */}
            </>
          ))
        ) : (
          <></>
        )}
      </div>
    );
  } else if (type == "Training") {
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
  }
};

export default Cards;
