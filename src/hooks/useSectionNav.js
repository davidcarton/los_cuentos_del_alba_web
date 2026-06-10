import { useNavigate, useLocation } from "react-router-dom";

export function useSectionNav() {
  const navigate = useNavigate();
  const location = useLocation();

  return function scrollToSection(id) {
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };
}
