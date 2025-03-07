import "../Components/2_Descriptive_Page.css";
import Quote_Button from "./Buttons/Quote_Button";
import Whatsapp_Button from "./Buttons/Whatsapp_Button";

const Descriptive_Page_2 = () => {
  return (
    <>
      <div className="main-body-page-2">
        <div className="separator" />
        {/* TEXT SECTION */}
        <div className="content-container">
          <div className="flex-column">
            <div className="flex-column">
              <h2 className="heading_page2">
                Why Choose Private & In-House Training?
              </h2>
              <p className="subheading">
                Tailored Learning That Works for Your Business
              </p>
            </div>

            <div className="text-container">
              <p className="text-body">
                Training isn't just about ticking a box—it's about equipping
                your team with the right skills and knowledge to drive real
                business impact. But public training courses often come with
                challenges that can make them less effective for organizations
                like yours:
              </p>

              <div className="list-container">
                <ul className="list">
                  <li className="list-item">
                    <img
                      className="list-vector"
                      src="src\images\List_vectors\List_1.png"
                      alt=""
                    />
                    Generic content that doesn't fully align with your business
                    goals
                  </li>
                  <li className="list-item">
                    <img
                      className="list-vector"
                      src="src\images\List_vectors\List_2.png"
                      alt=""
                    />
                    Inconvenient schedules that don't fit your team's
                    availability
                  </li>
                  <li className="list-item">
                    <img
                      className="list-vector"
                      src="src\images\List_vectors\List_3.png"
                      alt=""
                    />
                    Additional travel costs & time away from work
                  </li>
                  <li className="list-item">
                    <img
                      className="list-vector"
                      src="src\images\List_vectors\List_4.png"
                      alt=""
                    />
                    Disruptions to daily business operations
                  </li>
                  <li className="list-item">
                    <img
                      className="list-vector"
                      src="src\images\List_vectors\List_5.png"
                      alt=""
                    />
                    Lack of confidentiality when discussing company-specific
                    challenges
                  </li>
                </ul>
              </div>

              <p className="text-body">
                Private, in-house training eliminates these barriers by bringing
                the learning experience directly to your organization—on your
                schedule, with your priorities in mind.
              </p>

              <div className="button-container">
                <Quote_Button />
                <Whatsapp_Button />
              </div>
            </div>
          </div>
          <div className="top-prog-div">
            <h2 className="top-prog-heading">
              Our Top Training Programs{" "}
              <img
                src="src\images\Vector 5.png"
                className=" top-prog-image"
                alt=""
              />
            </h2>
          </div>
        </div>

        <div className="separator" />
      </div>
    </>
  );
};

export default Descriptive_Page_2;
