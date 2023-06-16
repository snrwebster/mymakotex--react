
import List from "../../assets/images/list.png" 
import EuroIcon from "../../assets/images/euro.png";
import HourglassTopIcon from "../../assets/images/pending_orders_icon.png";
import CustomerCard from "../../assets/images/customer_card.png";
import CompletedIcon from "../../assets/images/CompletedOrders.png";
import LabelIcon from "../../assets/images/ItemMenu.png";
import { Button } from "@mui/material";
import myMakoLogo from "../../myMakoLogo.png";
import "./MainNav.scss";
import GrLang from "../../assets/images/greece.png";
import EngLang from "../../assets/images/united_kingdom.png";
import { useTranslation } from 'react-i18next';


function MainNav({ changeLanguage }) {
  const { t, i18n } = useTranslation();

  const menuItems = [
    {
      label:  t("List of request"),
      icon:List,
    },
    {
      label: t("Price Request"),
      icon: EuroIcon,
    },
    {
      label: t("Pending Orders"),
      icon:  HourglassTopIcon,
    },
    {
      label: t("Customer card"),
      icon: CustomerCard,
    },
    {
      label: t("My labels"),
      icon: LabelIcon,
    },
    {
      label: t("Completed orders"),
      icon: CompletedIcon,
    },
  ];
  const Year = new Date().getFullYear();
  
  return (
    <>
      <div className="sidebarContainer">
        <img className="mainLogo" src={myMakoLogo}></img>
        <div className="LangChange">
          <Button onClick={() => changeLanguage("en")}>
            <img src={EngLang} alt="English" />
          </Button>
          <Button onClick={() => changeLanguage("gr")}>
            <img src={GrLang} alt="Greek" />
          </Button>
        </div>
        <ul className="MainMenuContainer">
          {menuItems.map((item, index) => (
            <li key={index} className="MainMenuItem">
              <Button
                className="MainMenuButton"
                variant="contained"
                sx={{
                  backgroundColor: "#DD2B1C",
                  "&:hover": {
                    backgroundColor: "#AF2216",
                  },
                }}
              >
                <img className="CustomIcon" src={item.icon}/>
               <span className="MenuText"> {item.label}</span>
              </Button>
            </li>
          ))}
        </ul>
        <div>
          <p className="Copyright">
            Copyright © {Year} by
            {" "}
            <a href="https://www.northnet.gr/">Northnet</a>
          </p>
        </div>
      </div>
    </>
  );
}
export default MainNav;
