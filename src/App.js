import MainNav from "./components/MainNav/MainNav";
import { I18nextProvider, useTranslation } from "react-i18next";
import UserNav from "./../src/components/UserNav/UserNav";
import Login from "./components/login/Login";
import { useState, useEffect } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  useHistrory,
  Link,
} from "react-router-dom";
import CompletedOrders from "./components/CompletedOrders/CompletedOrders";
import ListOfRequest from "./components/ListOfRequests/ListOfRequest";
import PriceRequest from "./components/PriceRequest/PriceRequest";
import PendingOrder from "./components/PendingOrders/PendingOrder";
import CustomersCard from "./components/CustomersCard/CustomersCard";
import MyLabels from "./components/MyLabels/MyLabels";


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
      <Router>
        <I18nextProvider i18n={i18n}>
          <MainNav changeLanguage={changeLanguage} t={t} />
          <UserNav t={t} setIsLoggedIn={setIsLoggedIn} />

          <Routes>
            <Route
              exact
              path="/login"
              element={
                !isLoggedIn ? (
                  <Login
                    t={t}
                    username={username}
                    setUsername={setUsername}
                    password={password}
                    setPassword={setPassword}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                ):<Link to="/PriceRequestOrder" />
              }
            />
            <Route
              exact
              path="/PriceRequestOrder"
              element={<ListOfRequest />}
            />
            <Route exact path="/PriceRequest" element={<PriceRequest />} />
            <Route exact path="/PendingOrders" element={<PendingOrder />} />
            <Route exact path="/CustomersCard" element={<CustomersCard />} />
            <Route exact path="/MyLabels" element={<MyLabels />} />
            <Route
              exact
              path="/CompletedOrders"
              element={<CompletedOrders />}
            />
          </Routes>
        </I18nextProvider>
      </Router>
    </>
  );
}

export default App;
