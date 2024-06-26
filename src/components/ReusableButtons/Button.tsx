import { MouseEventHandler, CSSProperties } from "react";

interface ButtonProps{
    name:string;
    type:'submit'| 'button';
    onClick?:MouseEventHandler<HTMLButtonElement>;
    style?:CSSProperties;
    transparent?:boolean
}

const Button = ({ name,type, onClick,style,transparent }:ButtonProps) => {
  return (
    <div>
        <button type={type} className={`button ${transparent && 'transparent_bg'}`} style={style} onClick={onClick ? onClick : ()=>{}}>{name}</button>
    </div>
  )
}

export default Button