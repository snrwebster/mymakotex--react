import { BiKey } from "react-icons/bi";
import Bell from "./../../assets/images/bell.png";
import { Icon } from "@iconify/react";
import UserIcon from "../../assets/images/user.png";
import SignOut from "../../assets/images/sign-out.svg";
import DialogBox from "./DialogBox";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UserNav.scss";

const UserNav = ({ t, isLoggedIn, setIsLoggedIn }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState(null);
  const navigate = useNavigate();

  const handleSignout = () => {
    setIsLoggedIn(null);
    localStorage.clear("UserData","UserCustomers");
    navigate("/");
  };
  const handleOnHoverUser = () => {
    const userName = JSON.parse(localStorage.getItem("UserData"));
    setIsDialogOpen(true);
    const content = !isLoggedIn ? (
      <div className="user">
        <p className="signin">{t("Sign in")}</p>
      </div>
    ) : (
      <div className="user">
        <div className="SignOut" onClick={handleSignout}>
          <img className="SignoutIcon" src={SignOut} alt="Signout" />
          <p>{t("Sign out")}</p>
        </div>
        <p className="username">{userName.name}</p>
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
          <BiKey style={{ width: "21px", height: "21px",display:'flex',justifyContent:'center',alignContent:'center' }} />
          <p >Intrastat</p>
        </button>
      ) : (
        ""
      )}

      <button className="user-nav-icons" type="button">
        <Icon
          className="user-icons"
          icon="ri:shopping-cart-2-line"
          width="30"
          height="30"
        />
      </button>
      <button
        className="user-nav-icons"
        type="button"
        onClick={(e) => {
          e.preventDefault();
        }}
        onMouseOver={() => handleOnHoverUser()}
        onMouseLeave={() => handleOffHoverUser()}
      >
        <img className="user-nav-img" id="" src={UserIcon} alt="user-profile" style={{width:'30px' ,height:'30px'}} />
        {isDialogOpen && dialogContent && <DialogBox content={dialogContent} />}
      </button>
    </nav>
  );
};

export default UserNav;
