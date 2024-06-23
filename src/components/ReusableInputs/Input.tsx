import { ChangeEventHandler } from "react";
import styles from './styles.module.css';

type InputProps = {
    placeholder:string,
    value:string,
    onChange:ChangeEventHandler<HTMLInputElement>
}

const Input = ({ placeholder,value, onChange }:InputProps) => {
  return (
    <div className={`${styles.inputField} input`}>
        <input type={'text'} placeholder={placeholder} value={value} name={placeholder} onChange={onChange}/>
    </div>
  )
}

export default Input