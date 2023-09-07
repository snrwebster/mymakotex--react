import userEvent from "@testing-library/user-event";
import SearchFieldCustomer from "../CompletedOrders/CompletedOrderComponents/SearchFieldCustomer";
import { UserSessionChecker } from "../UserSessionChecker";

const ListOfRequest = ({ t , userCustomers}) => {
  UserSessionChecker();
  return (
      <>
        <SearchFieldCustomer t={t} userCustomers={userCustomers}/>
        {/* <ListOfRequestDatagrid/> */}
      </>
  );
};

export default ListOfRequest;
