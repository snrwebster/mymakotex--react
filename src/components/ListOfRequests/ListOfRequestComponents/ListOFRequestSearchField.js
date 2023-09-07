import { FormControl, Select } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { apiRequest } from "../../../apiRequest";


const ListOFRequestSearchField = () => {
   

 
  return (
    <>
      <FormControl>
        <InputLabel></InputLabel>
        <Select>
          <MenuItem></MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default ListOFRequestSearchField;
