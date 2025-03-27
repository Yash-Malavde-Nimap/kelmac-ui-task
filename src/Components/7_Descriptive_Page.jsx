import logo1 from "../images/page_7_icons/Page_7_1.png";
import logo2 from "../images/page_7_icons/Page_7_2.png";
import logo3 from "../images/page_7_icons/Page_7_3.png";
import logo4 from "../images/page_7_icons/Page_7_4.png";
import logo5 from "../images/page_7_icons/Page_7_5.png";
import '../Components/7_Descriptive_Page.css'

const Descriptive_Page_7 = () => {
  return (
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
              Our training is internationally recognised, ensuring compliance
              with ISO standards and other industry <br /> regulations.
            </p>
          </div>

          <div className="page-7-item">
            <p className="page-7-item-title">
              <img src={logo2} alt="" width={50} height={50} />
              Tailored Content <br /> That Delivers Results
            </p>
            <p className="page-7-item-description">
              We customise every course to address your company's unique needs,
              ensuring relevant and <br /> immediately applicable training.
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
              Our trainers aren't just educators—they're industry professionals
              who understand your challenges and provide practical, actionable
              insights.
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
  );
};

export default Descriptive_Page_7;