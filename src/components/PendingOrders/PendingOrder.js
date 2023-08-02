import { UserSessionChecker } from "../UserSessionChecker";


const PendingOrder = () => {
  return (
    <UserSessionChecker>
      <div>PendingOrder</div>
    </UserSessionChecker>
  );
};

export default PendingOrder;
