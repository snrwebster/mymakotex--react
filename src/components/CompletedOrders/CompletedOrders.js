import { apiRequest } from "../../apiRequest";
import { UserSessionChecker } from "../UserSessionChecker";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
//import './../CompletedOrders/CompletedOrder.scss'

const CompletedOrders = ({t}) => {
  const [userCustomers, setUserCustomers] = useState([]);
  const [initialCustomer,setInitialCustomer] = useState([]);
  
  useEffect(() => {
    let method = "GET";
    let endpoint = "UserCustomers";
    let data = {
      ID: JSON.parse(localStorage.getItem("UserData")).id,
      isAdmin: JSON.parse(localStorage.getItem("UserData")).isAdmin,
    };
    apiRequest(endpoint, data, method)
      .then((response) => {
        if (response) {
          setUserCustomers(JSON.parse(response.result).Table1);
         console.log(userCustomers);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
      
  }, []);

  return (
    <UserSessionChecker>
      { 
      <FormControl style={{width:'400px'}} /*className="SelectCustomerInput"*/>
      <InputLabel id="demo-simple-select-helper-label">Select Customer</InputLabel>
        <Select
         labelId="demo-simple-select-helper-label"
         label="select customer"
         >
          {JSON.parse(localStorage.getItem("UserData")).isAdmin===1?(<MenuItem >{t('ALL CUSTOMERS')}</MenuItem >):null}
          {userCustomers.map((userCustomer, index) => (
            <MenuItem  key={index} value={userCustomer.NAME}>
              {userCustomer.NAME}
            </MenuItem >
          ))}
        </Select>
      </FormControl>}
    </UserSessionChecker>
  );
};

export default CompletedOrders;
