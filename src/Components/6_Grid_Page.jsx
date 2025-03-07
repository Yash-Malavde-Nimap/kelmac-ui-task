import logo1 from "../images/page_6_icons/Page_6_1.png";
import logo2 from "../images/page_6_icons/Page_6_2.png";
import logo3 from "../images/page_6_icons/Page_6_3.png";
import logo4 from "../images/page_6_icons/Page_6_4.png";
import logo5 from "../images/page_6_icons/Page_6_5.png";
import "../Components/6_Grid_Page.css";
import Quote_Button from "./Buttons/Quote_Button";
import Whatsapp_Button from "./Buttons/Whatsapp_Button";

const gridDetails = [
  {
    id: 1,
    title: "Greater Knowledge Transfer & Practical Application",
    description:
      "Employees learn best when they can connect training to their daily tasks. Our in-house programs align course content with your company's systems, policies, and workflows, ensuring that training is immediately applicable.",
    logo: logo1,
  },
  {
    id: 2,
    title: "Stronger Teamwork & Company-Wide Alignment",
    description:
      "When employees train together, they develop a shared understanding of business goals, processes, and compliance requirements. This enhances collaboration, efficiency, and overall team performance.",
    logo: logo2,
  },
  {
    id: 3,
    title: "Higher Retention & ROI on Training Investment",
    description:
      "Teams trained in-house retain more knowledge and engage better than those in external courses. This fosters active participation, knowledge-sharing, and higher ROI.",
    logo: logo3,
  },
  {
    id: 4,
    title: "Industry-Specific & Custom-Designed Courses",
    description:
      "Your business is unique—your training should be too. We tailor courses to your industry's regulations, ISO standards, and operational needs, ensuring that training adds real your organization.",
    logo: logo4,
  },
  {
    id: 5,
    title: "Convenience & Maximum Flexibility",
    description:
      "Whether your team prefers onsite, online, or hybrid training, we work around your schedule to provide a seamless learning experience. You decide when and how training happens—we make it easy.",
    logo: logo5,
  },
];

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
