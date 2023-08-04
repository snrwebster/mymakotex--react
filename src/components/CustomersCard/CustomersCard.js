import { UserSessionChecker } from "../UserSessionChecker";

const CustomersCard = () => {
  return (
    <UserSessionChecker>
      <div>CustomersCard</div>
    </UserSessionChecker>
  );
};

export default CustomersCard;
