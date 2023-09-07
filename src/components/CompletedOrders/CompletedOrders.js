import { UserSessionChecker } from "../UserSessionChecker";
import SearchFieldCustomer from "./CompletedOrderComponents/SearchFieldCustomer";
import {  useState } from "react";

import CompletedOrdersGrid from "./CompletedOrderComponents/CompletedOrdersGrid";

const CompletedOrders = ({ t ,userCustomers}) => {
  UserSessionChecker();
 
  const [orders, setOrders] = useState({});

  
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
