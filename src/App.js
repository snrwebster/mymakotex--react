import MainNav from "./components/MainNav/MainNav";
import { I18nextProvider, useTranslation } from "react-i18next";
import UserNav from "./../src/components/UserNav/UserNav";
import Login from "./components/login/Login";
import { useState, useEffect } from "react";


function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedValue = localStorage.getItem("UserSession");
    const storedUserData = localStorage.getItem("UserData");
    return storedUserData && storedValue === "true";
  });

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };
  useEffect(() => {
    localStorage.setItem("UserSession", isLoggedIn);
  }, [isLoggedIn]);

  return (
    <>
      <I18nextProvider i18n={i18n}>
        <MainNav changeLanguage={changeLanguage} t={t} />
        {!isLoggedIn && (
          <Login
            t={t}
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            setIsLoggedIn={setIsLoggedIn}
          />
        )}
        <UserNav t={t} />
      </I18nextProvider>
    </>
  );
}

export default App;
