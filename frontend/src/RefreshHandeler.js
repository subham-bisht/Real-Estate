import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const RefreshHandeler = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      setIsAuthenticated(true);
      if (location.pathname === "/") {
        navigate("/properties", { replace: false });
      }
    }
  }, [location, navigate, setIsAuthenticated]);
  return null;
};

export default RefreshHandeler;
