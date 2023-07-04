import React from "react";
import { BiKey } from "react-icons/bi";
import Bell from "./../../assets/images/bell.png";
import { Icon } from "@iconify/react";
import UserIcon from "../../assets/images/user.png";
import "./UserNav.scss";
import { useState } from "react";
import DialogBox from "./DialogBox";

const UserNav = ({ t }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });
  const [dialogContent, setDialogContent] = useState(null);

  const handleMouseEnter = (event, content) => {
    setIsDialogOpen(true);
    const { clientX, clientY } = event;
    setDialogPosition({ x: clientX, y: clientY });
    setDialogContent(content);
  };
  const handleMouseLeave = () => {
    setTimeout(() => {
      setIsDialogOpen(false);
    }, 500);
  };

  return (
    <nav className="userNav">
      <button
        className="user-nav-icons"
        type="button"
        id="test"
        onMouseEnter={(e) => handleMouseEnter(e,"Notifications")}
        onMouseLeave={handleMouseLeave}
      >
        <img className="user-nav-img" src={Bell} alt="notification bell" />
      </button>

      <button className="user-nav-icons" type="button">
        <BiKey style={{ width: "30px", height: "30px" }} />
        Intrastat
      </button>
      <button className="user-nav-icons" type="button">
        <Icon
          className="user-icons"
          icon="ri:shopping-cart-2-line"
          width="42"
          height="42"
        />
      </button>
      <button className="user-nav-icons" type="button">
        <img className="user-nav-img" id="" src={UserIcon} alt="user-profile" />
      </button>
      {isDialogOpen && (
        <DialogBox position={dialogPosition} content={dialogContent} />
      )}
    </nav>
  );
};

export default UserNav;
