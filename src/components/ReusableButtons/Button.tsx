import { MouseEventHandler, CSSProperties } from "react";

interface ButtonProps{
    name:string;
    type:'submit'| 'button';
    onClick?:MouseEventHandler<HTMLButtonElement>;
    style?:CSSProperties;
}

const Button = ({ name,type, onClick, style }:ButtonProps) => {
  return (
    <div>
        <button type={type} className="button" style={style} onClick={onClick ? onClick : ()=>{}}>{name}</button>
    </div>
  )
}

export default Button