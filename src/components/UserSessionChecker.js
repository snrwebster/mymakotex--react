import { useEffect } from "react";
import { useNavigate } from "react-router";

export const UserSessionChecker = ({ children }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const user = localStorage.getItem("UserSession");
    if (user === "null") {
      navigate("/");
    }
    console.log(user);
  }, []);
  return children;
  
};
