import MainNav from "./MainNav";
import Logo from "./Logo";
import "./SideBar.scss";
import { Button } from "@mui/material";

function SideBar() {
  return (
    <div className="sidebarContainer">
      <Logo />
      <MainNav />
    </div>
  );
}
export default SideBar;
