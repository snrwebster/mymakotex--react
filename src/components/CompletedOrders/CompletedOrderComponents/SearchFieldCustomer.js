import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";


const SearchFieldCustomer = ({ t,userCustomers }) => {
 
  const [initialValueSearchField,setInitialValueSearchField] = useState('');
 
  const handleOnChange = (e) =>{
    setInitialValueSearchField(e.target.value);
    console.log(e.target.value);
  }
  
  
  
  

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
            value= {initialValueSearchField}
            onChange={handleOnChange}
          >
            {userCustomers.length > 1 ?
            <MenuItem value='All'>{t("ALL CUSTOMERS")}</MenuItem>
            :null}
            {userCustomers.map((userCustomer, index) => (
              <MenuItem key={index} value={userCustomer.NAME}>
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
