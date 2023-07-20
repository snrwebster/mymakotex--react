import { BiKey } from "react-icons/bi";
import Bell from "./../../assets/images/bell.png";
import { Icon } from "@iconify/react";
import UserIcon from "../../assets/images/user.png";
import "./UserNav.scss";
import { useEffect, useState } from "react";
import DialogBox from "./DialogBox";


const UserNav = ({ t ,isLoggedIn}) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPosition, setDialogPosition] = useState({ x: 0, y: 0 });
  const [dialogContent, setDialogContent] = useState(null);
  const [userName,setUserName]= useState("");

  

  
  


  const handleMouseEnter = (e, content) => {
    setIsDialogOpen(true);
    const { clientX, clientY } = e;
    setDialogPosition({ x: clientX - 40 , y: clientY });
    setDialogContent(content);
  };
  const handleMouseLeave = (e) => {
    e.target.style.backgroundColor = 'transparent';
    setTimeout(() => {
      setIsDialogOpen(false);
      
    }, 100);
  };

  return (
    <nav className="userNav">
      {isDialogOpen && (
        <DialogBox position={dialogPosition} dialogContent={dialogContent} />
      )}
      <button
        className="user-nav-icons"
        type="button"
        id="test"
        onMouseEnter={(e) => handleMouseEnter(e, "Notifications")}
        onMouseLeave={handleMouseLeave}
      >
        <img className="user-nav-img" src={Bell} alt="notification bell" />
      </button>
        {isLoggedIn ? <button
        className="user-nav-icons"
        style={{display:'flex'}}
        type="button"
        onMouseEnter={(e) => handleMouseEnter(e, "Notifications")}
        onMouseLeave={handleMouseLeave}
      >
        <BiKey style={{ width: "42px", height: "42px" }} />
        <p>Intrastat</p>
      </button> : "" }
      
      <button
        className="user-nav-icons"
        type="button"
        onMouseEnter={(e) => handleMouseEnter(e, "Notifications")}
        onMouseLeave={handleMouseLeave}
      >
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
        onMouseEnter={(e) => handleMouseEnter(e, "Sign In")}
        onMouseLeave={(e)=>handleMouseLeave(e)}
      >
        <img className="user-nav-img" id="" src={UserIcon} alt="user-profile" />
      </button>
    </nav>
  );
};

export default UserNav;
