import MainNav from "./components/MainNav/MainNav";
import { I18nextProvider } from "react-i18next";
import UserNav from "./../src/components/UserNav/UserNav";
import { useTranslation } from "react-i18next";
import Login from "./components/login/Login";
import { useState } from "react";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn , setIsLoggedIn] = useState(false);

  const { t, i18n } = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  localStorage.setItem("username", "testUser");
  localStorage.setItem("password", "testPassword");
  console.log(localStorage.getItem("password"));
  console.log(localStorage.getItem("username"))

  return (
    <I18nextProvider i18n={i18n}>
      <MainNav changeLanguage={changeLanguage} t={t} />
      <Login
        t={t}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        setIsLoggedIn ={setIsLoggedIn}
        isLoggedIn = {isLoggedIn}
      />
      <UserNav t={t} />
    </I18nextProvider>
  );
}

export default App;
