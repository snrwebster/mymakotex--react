import React from "react";
import './UserNav.scss'

const DialogBox = ({dialogContent,position,t}) => {
  return (
    <div id="dialogBox" className="dialog-box" style ={{position: 'fixed', top: position.y, left: position.x}}>
      {dialogContent}
    </div>
  );
};

export default DialogBox;
