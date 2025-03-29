import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "../src/pages/LandingPage.jsx";
import CoursesPage from "../src/pages/CoursesPage.jsx";
import AboutUsPage from "../src/pages/AboutUsPage.jsx";
import TrainingPage from "../src/pages/TrainingPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const App = () => {
  const routes = [
    {
      id: 1,
      href: "/",
      title: "Home",
      component: <LandingPage />,
    },
    {
      id: 2,
      href: "/courses",
      title: "Courses",
      component: <CoursesPage />,
    },
    {
      id: 3,
      href: "/about-us",
      title: "About Us",
      component: <AboutUsPage />,
    },
    {
      id: 4,
      href: "/training",
      title: "Training",
      component: <TrainingPage />,
    },
    {
      id: 5,
      href: "/contact",
      title: "Contact",
      component: <ContactPage />,
    },
  ];

  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          {routes.map((route) => (
            <Route key={route.id} path={route.href} element={route.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
};

export default App;
