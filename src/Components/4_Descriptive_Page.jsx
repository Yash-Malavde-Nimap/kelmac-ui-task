import bg_image from "../images/Page_4_BG.png";
import '../Components/4_Descriptive_Page.css'

const Descriptive_Page_4 = () => {
  return (
    <div className="page-4-container">
      <img src={bg_image} alt="" className="page-4-background-image" />
      <div className="page-4-content-box">
        <div className="page-4-content">
          <div className="page-4-title-section">
            <h2 className="page-4-main-title">
              Customized programs <br /> Tailored to client requirements!
            </h2>
            <p className="page-4-subtitle">
              Fully Tailored to Your Business Needs
            </p>
          </div>

          <div className="page-4-details-section">
            <div className="page-4-detail-item">
              <h2 className="page-4-detail-title">
                No two businesses are the same
              </h2>
              <p className="page-4-detail-description">
                So why settle for a one-size-fits-all training program? Kelmac
                Group's private training is designed specifically for you.
              </p>
            </div>

            <div className="page-4-detail-item">
              <h2 className="page-4-detail-title">
                Customized to Your Industry & Company Process
              </h2>
              <p className="page-4-detail-description">
                We take the time to understand your organization, your industry,
                and your unique challenges. Our courses are then tailored to
                focus on the specific skills and knowledge your team needs.
              </p>
            </div>

            <div className="page-4-detail-item">
              <h2 className="page-4-detail-title">
                Relevant, Real-World Training
              </h2>
              <p className="page-4-detail-description">
                Instead of covering theoretical concepts that may not apply to
                your team, our training integrates real-world scenarios, case
                studies, and practical exercises related to your company's
                operations.
              </p>
            </div>

            <div className="page-4-detail-item">
              <h2 className="page-4-detail-title">
                Targeted Learning for Different Teams
              </h2>
              <p className="page-4-detail-description">
                Whether you need to train senior management, internal auditors,
                or frontline employees, we adjust the content to ensure each
                group gets the most value from the session.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Descriptive_Page_4;