// ####################### CSS #############################

import "../styles/1_TrainingFormPage.css";
import "../styles/2_Descriptive_Page.css";
import "../styles/3_Training_Programme_Cards.css";
import "../styles/4_Descriptive_Page.css";
import "../styles/5_Benefits_Page.css";
import "../styles/6_Grid_Page.css";
import "../styles/7_Descriptive_Page.css";
import "../styles/8_Quote_Form.css";

// ######################## IMAGES ############################

// LOGOS
import vector from "../images/Vector_Line.png";
import circles from "../images/Group 458.png";
import bg_image from "../images/Page_4_BG.png";
import page_bg from "../images/Quote_Form_BG_8.png";

// ICONS
import logo1 from "../images/page_7_icons/Page_7_1.png";
import logo2 from "../images/page_7_icons/Page_7_2.png";
import logo3 from "../images/page_7_icons/Page_7_3.png";
import logo4 from "../images/page_7_icons/Page_7_4.png";
import logo5 from "../images/page_7_icons/Page_7_5.png";

// ###################### COMPONENTS ##############################

import Form from "../Components/Forms/Form.jsx";
import Button from "../Components/Buttons/Button.jsx";
import Cards from "../Components/Cards/Cards.jsx";
import Benefits_Page_5 from "../Components/5_Benefits_Page.jsx";

// ###################### VARIABLES ##############################

import {
  descData_2,
  descData_4,
  gridDetails,
  program_Cards,
} from "../Variables.js";

// ################################################################

const LandingPage = () => {
  return (
    <>
      {/* HERO */}
      <section>
        <div className="main-body">
          <div className="main-chat">
            <a href="/chat">
              <img src="../src/images/Chat_Icon.png" alt="" />
            </a>
          </div>
          <div className="main-container">
            <div className="circle-div">
              <img className="circle-image" src={circles} alt="" />
            </div>

            {/* Left Div */}
            <div className="left-div">
              <p className="heading_page1">
                Excellence Redefined : Kelmac's Training <br /> Solutions -{" "}
                <span className="highlight">
                  Tailored
                  <img className="highlight-vector" src={vector} alt="" />
                </span>
              </p>
              <p className="description">
                ISO training designed around your business needs—delivered when
                you need it, focused on what matters, and built to deliver
                measurable results
              </p>

              <div className="button-container">
                <Button type="Quote" />
                <Button type="Whatsapp" />
              </div>
            </div>

            {/* Right Div with Form */}
            <div className="form-container">
              <Form
                type="Hero"
                // handleSubmit={handleSubmit}
                // handleForm={handleForm}
                // formState={formState}
              />
            </div>
          </div>

          {/* 2nd Container / Lower Container */}
          <div className="lower-container">
            <p className="lower-heading">
              Excellence Redefined : <br /> Kelmac's Training Solutions -{" "}
              <span className="highlight">
                Tailored
                <img className="highlight-vector" src={vector} alt="" />
              </span>
            </p>
            <p className="lower-paragraph">
              We address the frustration of generic training by offering
              customized ISO solutions that focus only on your critical
              compliance br and performance needs. Our flexible scheduling
              ensures training happens on your timeline, minimizing disruption
              while delivering immediate, actionable value. With expert-led
              sessions, we empower your team to achieve lasting improvements and
              certification success faster.
            </p>
          </div>

          <div className="circle-div">
            <img className="circle-image" src={circles} alt="" />
          </div>
        </div>
      </section>
      {/* DESCRIPTIVE 2 */}
      <section>
        <div className="main-body-page-2">
          <div className="separator" />
          {/* TEXT SECTION */}
          <div className="content-container">
            <div className="flex-column">
              <div className="flex-column">
                <p className="heading_page2">
                  Why Choose Private & In-House Training?
                </p>
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
                    {descData_2.length > 0
                      ? descData_2.map((data, i) => (
                          <li key={i} className="list-item">
                            <img
                              className="list-vector"
                              src={data.src}
                              alt=""
                            />
                            {data.title}
                          </li>
                        ))
                      : ""}
                  </ul>
                </div>

                <p className="text-body">
                  Private, in-house training eliminates these barriers by
                  bringing the learning experience directly to your
                  organization—on your schedule, with your priorities in mind.
                </p>

                <div className="button-container">
                  <Button type="Quote" />
                  <Button type="Whatsapp" />
                </div>
              </div>
            </div>
            <div className="top-prog-div">
              <p className="top-prog-heading">
                Our Top Training Programs{" "}
                <img
                  src="src\images\Vector 5.png"
                  className=" top-prog-image"
                  alt=""
                />
              </p>
            </div>
          </div>

          <div className="separator" />
        </div>
      </section>

      {/* TRAINING CARDS */}
      <section>
        <div className="programme-cards-container">
          {program_Cards.map((card, i) => (
            <Cards type="Training" key={i} card={card} />
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
      </section>

      {/* DESCRIPTIVE 4 */}
      <section>
        <div className="page-4-container">
          <img src={bg_image} alt="" className="page-4-background-image" />
          <div className="page-4-content-box">
            <div className="page-4-content">
              <div className="page-4-title-section">
                <p className="page-4-main-title">
                  Customized programs <br /> Tailored to client requirements!
                </p>
                <p className="page-4-subtitle">
                  Fully Tailored to Your Business Needs
                </p>
              </div>

              <div className="page-4-details-section">
                {descData_4.length > 0 ? (
                  descData_4.map((data, index) => (
                    <div className="page-4-detail-item" key={index}>
                      <p className="page-4-detail-title">{data.title}</p>
                      <p className="page-4-detail-description">
                        {data.description}
                      </p>
                    </div>
                  ))
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS CARD */}
      <section>
        <Benefits_Page_5 />
      </section>

      {/* GRID PAGE */}
      <section>
        <div className="page-6-container">
          <div className="page-6-flex-column">
            <div className="page-6-grid">
              {/* 1st */}
              <div className="page-6-div-1 py-10">
                <p className="page-6-number">5</p>
                <p className="page-6-title">
                  Key <br /> Reasons <br /> to Choose <br />
                  Private Training
                </p>
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
                  <p className="page-6-subtitle">{item.title}</p>
                  <p className="page-6-description">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="page-6-flex-row">
              <Button type="Quote" />
              <Button type="Whatsapp" />
            </div>
          </div>
        </div>
      </section>

      {/* DESCRIPTIVE 7 */}
      <section>
        <div className="page-7-container">
          <div className="page-7-content">
            <div className="page-7-text-section">
              <p className="page-7-title">
                Why Kelmac Group is the <br /> Right Training Partner for <br />
                Your Business?
              </p>

              <div className="page-7-item">
                <p className="page-7-item-title">
                  <img src={logo1} alt="" width={50} height={50} />
                  Certified &<br /> Accredited Courses
                </p>
                <p className="page-7-item-description">
                  Our training is internationally recognised, ensuring
                  compliance with ISO standards and other industry <br />{" "}
                  regulations.
                </p>
              </div>

              <div className="page-7-item">
                <p className="page-7-item-title">
                  <img src={logo2} alt="" width={50} height={50} />
                  Tailored Content <br /> That Delivers Results
                </p>
                <p className="page-7-item-description">
                  We customise every course to address your company's unique
                  needs, ensuring relevant and <br /> immediately applicable
                  training.
                </p>
              </div>
            </div>

            <div className="page-7-text-section">
              <div className="page-7-item">
                <p className="page-7-item-title">
                  <img src={logo3} alt="" width={50} height={50} />
                  30+ Years <br /> of Expertise
                </p>
                <p className="page-7-item-description">
                  We have trained thousands of professionals worldwide, helping
                  businesses improve compliance,
                  <br /> quality, and efficiency.
                </p>
              </div>

              <div className="page-7-item">
                <p className="page-7-item-title">
                  <img src={logo4} alt="" width={50} height={50} />
                  Expert Instructors with <br /> Real-World Experience
                </p>
                <p className="page-7-item-description">
                  Our trainers aren't just educators—they're industry
                  professionals who understand your challenges and provide
                  practical, actionable insights.
                </p>
              </div>

              <div className="page-7-item">
                <p className="page-7-item-title">
                  <img src={logo5} alt="" width={50} height={50} />
                  Proven Track <br /> Record of Success
                </p>
                <p className="page-7-item-description">
                  Companies that train with Kelmac Group see increased employee
                  performance, compliance improvement, and better operational
                  efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET A QUOTE FORM  */}
      <section>
        <div className="page-8-container">
          <img src={page_bg} alt="" className="page-8-bg" />

          {/* HEADING LEFT */}
          <div className="page-8-heading-container">
            <div className="page-8-heading-text">
              <p className="page-8-heading-title">
                Get A Quote
                <img className="page-8-highlight-vector" src={vector} alt="" />
              </p>
              <p className="page-8-heading-description">
                Please take the time to complete the following form and provide
                us with as much information as you are able to ensure we can
                deal with your request as promptly.
              </p>
            </div>

            {/* FORM */}
            <Form type="Quote" />
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;