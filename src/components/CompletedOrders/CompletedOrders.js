import { UserSessionChecker } from "../UserSessionChecker";
import SearchFieldCustomer from "./CompletedOrderComponents/SearchFieldCustomer";
import { useEffect, useState } from "react";
import { apiRequest } from "../../apiRequest";
import CompletedOrdersGrid from "./CompletedOrderComponents/CompletedOrdersGrid";

const CompletedOrders = ({ t }) => {
  UserSessionChecker();
  const [userCustomers, setUserCustomers] = useState([]);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    if (localStorage.getItem("UserData")) {
      let method = "GET";
      let endpoint = "UserCustomers";
      let data = {
        ID: JSON.parse(localStorage.getItem("UserData")).id,
        isAdmin: JSON.parse(localStorage.getItem("UserData")).isAdmin,
      };
      apiRequest(endpoint, data, method)
        .then((response) => {
          if (response) {
            const customers = JSON.parse(response.result).Table1;
            setUserCustomers(customers);
            localStorage.setItem("UserCustomers", JSON.stringify(customers));
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, []);
  return (
    <div style={{display:'flex', flexDirection:'column'}}>
      <SearchFieldCustomer
        t={t}
        userCustomers={userCustomers}
        setOrders={setOrders}
      />
      <CompletedOrdersGrid t={t} orders={orders}/>
    </div>
  );
};

export default CompletedOrders;
