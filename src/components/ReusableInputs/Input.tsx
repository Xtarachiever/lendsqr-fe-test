import { ChangeEventHandler } from "react";
import styles from './styles.module.css';

type InputProps = {
    placeholder:string,
    value:string,
    onChange:ChangeEventHandler<HTMLInputElement>,
    type?:string
}

const Input = ({ placeholder,value, onChange,type }:InputProps) => {
  return (
    <div className={`${styles.inputField} input`}>
        <input type={type? type : 'text'} placeholder={placeholder} value={value} name={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input