import './UserNav.scss'

const DialogBox = ({dialogContent,position,t}) => {
  return (
    <div id="dialogBox" className="dialog-box" style ={{position: 'absolute', top: position.y, left: position.x}}>
      <p>{dialogContent}</p>
    </div>
  );
};

export default DialogBox;
