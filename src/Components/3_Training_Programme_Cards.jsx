import { program_Cards } from "../Variables";
import "./3_Training_Programme_Cards.css";
import TrainingCards from "./Cards/TrainingCards";

const Training_Programme_Cards_3 = () => {
  return (
    <div className="programme-cards-container">
      {program_Cards.map((card, i) => (
        <TrainingCards key={i} card={card} />
      ))}

      {/* PAGINATION */}
      <div className="pagination">
        <div className="pagination-buttons">
          <button className="prev-button">{"<"}</button>

          <div className="page-numbers">
            <p className="page-number">.</p>
            <p className="page-number">.</p>
            <p className="page-number active">.</p>
            <p className="page-number">.</p>
          </div>

          <button className="next-button">{">"}</button>
        </div>
      </div>
    </div>
  );
};

export default Training_Programme_Cards_3;
