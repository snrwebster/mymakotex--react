import ListIcon from '@mui/icons-material/List';
import SellIcon from '@mui/icons-material/Sell';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import TaskIcon from '@mui/icons-material/Task';
import InfoIcon from '@mui/icons-material/Info';
import LabelIcon from '@mui/icons-material/Label';
import { Button } from '@mui/material';
function Btn (){
  const clickHandler= 
      ()=> console.log('clicked');
  const mouseOverHandler = 
      ()=>console.log('hovered');
  return(
  <button onClick={clickHandler} onMouseOver={mouseOverHandler}>click or hover</button>
  )
}
function MainNav(){
    const menuItems = [
        {
            label: "List of request",
            icon: <ListIcon />,
        },
        {
            label: "Price Request",
            icon: <SellIcon />,
        },
        {
          label: "Pending Orders",
          icon: <HourglassTopIcon />,
        },
        {
          label:"Customer card",
          icon: <InfoIcon />,
        },
        {
          label:"My labels",
          icon: <LabelIcon />,
        },
        {
          label:"Completed orders",
          icon: <TaskIcon />,
        }
    ];
      
    return (
    <>
        <ul className="MainMenuContainer">
            {menuItems.map((item,index)=>(
                <li key={index} className='MainMenuItem'>
                    <Button className="MainMenuButton" variant="contained" startIcon={item.icon} size="large" onClick={Btn.clickHandler} onMouseOver={Btn.mouseOverHandler}>{item.label}</Button>
                </li>
            ))}
        </ul>
    </>
    )
}
export default MainNav;