import "./Login.scss";
import { useState, useEffect } from "react";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";
import { apiRequest } from "../../apiRequest";
import { useNavigate } from "react-router";

const Login = ({
  t,
  username,
  setUsername,
  password,
  setPassword,
  setIsLoggedIn,
  isLoggedIn,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleEnter = (e) => e.key === "Enter" && handlePassSubmit(e);

  const handlePassSubmit = (e) => {
    e.preventDefault();
    if (username === "" || password === "") {
      alert("Insert username  and password");
    } else {
      const method = "POST";
      const endpoint = "User";
      const data = { username: username, password: password };
      apiRequest(endpoint, data, method)
        .then((response) => {
          if (response.id === null) {
            alert(t("Wrong input"));
          } else {
            try {
              const dataMob = { table: "cus", boid: response.traID };
              apiRequest("GetMobileID", dataMob, "POST").then(
                (mobileResponse) => {
                  const userData = {
                    bmpPath: response.bmpPath,
                    brandID: response.brandID,
                    id: response.id,
                    isAdmin: response.isAdmin,
                    isComposition: response.isComposition,
                    isSticker: response.isSticker,
                    itemCodeID: response.itemCodeID,
                    madeInID: response.madeInID,
                    message: response.message,
                    messageAccepted: response.messageAccepted,
                    name: response.name,
                    traID: response.traID,
                    userDescription: response.userDescription,
                    username: response.username,
                    MobId: mobileResponse.id,
                  };
                  setIsLoggedIn(true);
                  localStorage.setItem("UserData", JSON.stringify(userData));
                  navigate("/PriceRequestOrder");
                }
              );
            } catch {}
          }
        })
        .catch((error) => {
          console.log(error);
          // Handle the error as needed
        });
    }
  };
  useEffect(() => {
    // Check the isLoggedIn status in localStorage
    const storedValue = localStorage.getItem("UserSession");
    if (storedValue === "true") {
      // If user is logged in, redirect to the desired component
      navigate("/PriceRequestOrder");
    }
  });
  return (
    <div className="formWrap">
      <form className="loginForm">
        <label htmlFor="username">{t("Username")}</label>
        <div className="userWrapper">
          <input
            className="userInput"
            type="text"
            placeholder={t("Insert username")}
            id="username"
            name="username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <label htmlFor="password">{t("Password")}</label>
        <div className="passWrapper">
          <input
            className="PassInput"
            type={showPassword ? "text" : "password"}
            placeholder={t("Insert password")}
            id="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={handleEnter}
          />
          <button
            className="password-toggle-button"
            onClick={handleTogglePassword}
          >
            {showPassword ? <RiEyeFill /> : <RiEyeCloseFill />}
          </button>
        </div>
        <button className="loginSubBtn" onClick={handlePassSubmit}>
          {t("Sign in")}
        </button>
      </form>
    </div>
  );
};

export default Login;
