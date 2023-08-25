import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useEffect, useState } from "react";
import { apiRequest } from "../../../apiRequest";
import { useTranslation } from "react-i18next";

const SearchFieldCustomer = ({ t, userCustomers, setOrders }) => {
  const { i18n } = useTranslation();

  const [initialValueSearchField, setInitialValueSearchField] = useState("");

  const handleOnChange = (e) => {
    setInitialValueSearchField(e.target.value);
    // console.log(localStorage.getItem("UserCustomers"));
  };

  useEffect(() => {
    const currentLanguage = i18n.language;
    let table = "";

    if (currentLanguage === "en") {
      if (initialValueSearchField === "ALL CUSTOMERS") {
        table = "parfindoc";
      } else {
        table = `parfindoc where tracodeid=(select code from cus where id= ${initialValueSearchField})`;
      }
    } else if (currentLanguage === "gr") {
      if (initialValueSearchField === "ALL CUSTOMERS") {
        table = "parfindoc_gr";
      } else {
        table = `parfindoc_gr where tracodeid=(select code from cus where id=${initialValueSearchField})`;
      }
    }
    const method = "GET";
    const data = { columns: "*", table: table };
    const endpoint = "SelectFromMobile";
    apiRequest(endpoint, data, method).then((response) => {
      if (response.status !== null) {
        setOrders(response.result);
        console.log(response.result);
      }
    });
  }, [initialValueSearchField]);

  return (
    <>
      {userCustomers.length > 0 ? (
        <FormControl
          style={{ width: "400px" }} /*className="SelectCustomerInput"*/
        >
          <InputLabel id="demo-simple-select-helper-label">
            Select Customer
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            label="select customer"
            value={initialValueSearchField}
            onChange={handleOnChange}
          >
            {userCustomers.length > 1 ? (
              <MenuItem value="ALL CUSTOMERS">{t("ALL CUSTOMERS")}</MenuItem>
            ) : null}
            {userCustomers.map((userCustomer) => (
              <MenuItem key={userCustomer.CUSID} value={userCustomer.CUSID}>
                {userCustomer.NAME}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      ) : null}
    </>
  );
};

export default SearchFieldCustomer;
