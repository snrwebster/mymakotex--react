import React from "react";
import "./Login.scss";
import { useState } from "react";
import { RiEyeFill, RiEyeCloseFill } from "react-icons/ri";

const Login = ({
  t,
  username,
  setUsername,
  password,
  setPassword,
  setIsLoggedIn,
  
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleEnter = (e) => e.key === "Enter" && handlePassSubmit(e);

  const handlePassSubmit = (e) => {
    e.preventDefault();
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    if (username === storedUsername && password === storedPassword) {
      setIsLoggedIn(true);
      console.log(e);
    } else {
      // Handle incorrect username or password
      alert("Invalid username or password");
    }
  };
  return (
    <div className="formWrap">
      <form className="loginForm">
        <label htmlFor="username">{t("Username")}</label>
        <input
          type="text"
          placeholder={t("Insert username")}
          id="username"
          name="username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
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
