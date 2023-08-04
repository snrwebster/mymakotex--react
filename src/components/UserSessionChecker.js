import {  useNavigate } from "react-router";
import { useEffect } from "react";

export const UserSessionChecker = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserSession = () => {
      const user = localStorage.getItem("UserSession");
      console.log(user);
      if (user === "false" || user === "null" || user == null) {
        try {
          localStorage.clear();
        } catch {}
        navigate("/"); // Redirect to the main page if the user is not logged in
      }
    };

    checkUserSession();
  }, [navigate]);
};