const ColorCards = ({ options, active, method }) => {
  return (
    <div className="page-5-cards-container">
      {options.map((item) => (
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
      ))}
    </div>
  );
};

export default ColorCards;
