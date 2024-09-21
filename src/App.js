import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import StudentDashboard from "./pages/StudentDashboard";
import Admin from "./pages/Admin";
import Details from "./pages/Details";
import TypeofLogin from "./pages/TypeofLogin";
import Login from "./pages/Login";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Type of Login";
        metaDescription = "";
        break;
      case "/admin":
        title = "Admin Dashboard";
        metaDescription = "";
        break;
      case "/details":
        title = "Rescourse Details";
        metaDescription = "";
        break;
      case "/login":
        title = "Login Page";
        metaDescription = "";
        break;
      case "/profile":
        title = "Student Dashboard";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<TypeofLogin/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/details" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<StudentDashboard />} />
      </Routes>
  );
}
export default App;
