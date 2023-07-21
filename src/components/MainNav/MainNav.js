import List from "../../assets/images/list.png";
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
import { Link } from "react-router-dom";

function MainNav({ changeLanguage, t }) {
  const menuItems = [
    {
      label: t("List of request"),
      icon: List,
      route: "/PriceRequestOrder",
    },
    {
      label: t("Price Request"),
      icon: EuroIcon,
      route: "/PriceRequest",
    },
    {
      label: t("Pending Orders"),
      icon: HourglassTopIcon,
      route: "/PendingOrders",
    },
    {
      label: t("Customer card"),
      icon: CustomerCard,
      route: "/CustomersCard",
    },
    {
      label: t("My labels"),
      icon: LabelIcon,
      route: "/MyLabels",
    },
    {
      label: t("Completed orders"),
      icon: CompletedIcon,
      route: "/PriceRequestOrder",
    },
  ];
  const Year = new Date().getFullYear();

  return (
    <>
      <div className="sidebarContainer">
        <img className="mainLogo" src={myMakoLogo} alt="logo" />
        <div className="LangChange">
          <Button onClick={() => changeLanguage("en")}>
            <img src={EngLang} alt="English" />
          </Button>
          <Button onClick={() => changeLanguage("gr")}>
            <img src={GrLang} alt="Greek" />
          </Button>
        </div>
        <nav className="mainNav">
          <ul className="MainMenuContainer">
            {menuItems.map((item, index) => (
              <li key={index} className="MainMenuItem">
                <Link to={item.route} >
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
                    <img
                      className="CustomIcon"
                      src={item.icon}
                      alt="menu-icon"
                    />
                    <span className="MenuText"> {item.label}</span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="Copyright">
            Copyright © {Year} by{" "}
            <a href="https://www.northnet.gr/">Northnet</a>
          </p>
        </div>
      </div>
    </>
  );
}
export default MainNav;
