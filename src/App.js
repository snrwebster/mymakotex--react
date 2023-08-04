import MainNav from "./components/MainNav/MainNav";
import { I18nextProvider, useTranslation } from "react-i18next";
import UserNav from "./../src/components/UserNav/UserNav";
import Login from "./components/login/Login";
import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import CompletedOrders from "./components/CompletedOrders/CompletedOrders";
import ListOfRequest from "./components/ListOfRequests/ListOfRequest";
import PriceRequest from "./components/PriceRequest/PriceRequest";
import PendingOrder from "./components/PendingOrders/PendingOrder";
import CustomersCard from "./components/CustomersCard/CustomersCard";
import MyLabels from "./components/MyLabels/MyLabels";

function App() {
 

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
        <UserNav t={t} isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Login
                t={t}
                setIsLoggedIn={setIsLoggedIn}
                isLoggedIn={isLoggedIn}
              />
            }
          />
          <Route
            exact
            path="/PriceRequestOrder"
            element={<ListOfRequest isLoggedIn={isLoggedIn} />}
          />
          <Route exact path="/PriceRequest" element={<PriceRequest />} />
          <Route exact path="/PendingOrders" element={<PendingOrder />} />
          <Route exact path="/CustomersCard" element={<CustomersCard />} />
          <Route exact path="/MyLabels" element={<MyLabels />} />
          <Route
            exact
            path="/CompletedOrders"
            element={<CompletedOrders t={t} isLoggedIn={isLoggedIn} />}
          />
        </Routes>
      </I18nextProvider>
    </>
  );
}

export default App;
