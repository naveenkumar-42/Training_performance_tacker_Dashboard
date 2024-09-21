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
        title = "";
        metaDescription = "";
        break;
      case "/admin":
        title = "";
        metaDescription = "";
        break;
      case "/details":
        title = "";
        metaDescription = "";
        break;
      case "/typeoflogin":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
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
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/details" element={<Details />} />
        <Route path="/typeoflogin" element={<TypeofLogin />} />
        <Route path="/login" element={<Login />} />
      </Routes>
  );
}
export default App;
