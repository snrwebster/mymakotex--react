function Btn (){
    const clickHandler= 
        ()=> console.log('clicked');
    const mouseOverHandler = 
        ()=>console.log('hovered');
    return(
    <button onClick={clickHandler} onMouseOver={mouseOverHandler}>click or hover</button>
    )
}
export default Btn;