import { BiKey } from "react-icons/bi";
import Bell from "./../../assets/images/bell.png";
import { Icon } from "@iconify/react";
import UserIcon from "../../assets/images/user.png";
import SignOut from "../../assets/images/sign-out.svg";
import { useNavigate } from "react-router-dom";
import DialogBox from "./DialogBox";
import { useState } from "react";
import "./UserNav.scss";

const UserNav = ({ t, isLoggedIn, setIsLoggedIn }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent,setDialogContent] = useState(null);

  const navigate = useNavigate();

  const handleOnHoverUser = () => {
    setIsDialogOpen(true);
    const content = !isLoggedIn ? (
      <p>Sign in</p>
    ) : (
      <div>
        <p>{localStorage.getItem("UserData")}</p>
        <img onClick={() => navigate("/login")} src={SignOut} alt="Signout" />
      </div>
    );
    setDialogContent(content);
  };
  const handleOffHoverUser = () => {
    setTimeout(() => {
      setIsDialogOpen(false);
    }, 2000);
  };

  return (
    <nav className="userNav">
      <button className="user-nav-icons" type="button" id="test">
        <img className="user-nav-img" src={Bell} alt="notification bell" />
      </button>
      {isLoggedIn ? (
        <button
          className="user-nav-icons"
          style={{ display: "flex" }}
          type="button"
        >
          <BiKey style={{ width: "42px", height: "42px" }} />
          <p>Intrastat</p>
        </button>
      ) : (
        ""
      )}

      <button className="user-nav-icons" type="button">
        <Icon
          className="user-icons"
          icon="ri:shopping-cart-2-line"
          width="42"
          height="42"
        />
      </button>
      <button
        className="user-nav-icons"
        type="button"
        onClick={(e) => {
          e.preventDefault();
        }}
        onMouseOver={()=>handleOnHoverUser()}
        onMouseLeave={()=>handleOffHoverUser()}
      >
        <img className="user-nav-img" id="" src={UserIcon} alt="user-profile" />
        {isDialogOpen && dialogContent && <DialogBox content={dialogContent} />}
      </button>
      
    </nav>
  );
};

export default UserNav;
