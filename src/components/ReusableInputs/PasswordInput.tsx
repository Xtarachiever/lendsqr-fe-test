import { ChangeEventHandler, useState } from "react";
import styles from './styles.module.css';

type InputProps = {
    placeholder:string,
    value:string,
    onChange:ChangeEventHandler<HTMLInputElement>
}

const PasswordInput = ({ placeholder,value, onChange }:InputProps) => {
    const [type, setType] = useState<string>('password')
  return (
    <div className={styles.inputField}>
        <input type={type} placeholder={placeholder} name={placeholder} value={value} onChange={onChange}/>
        <div className={styles.toggle_password}>
            {
                type === 'text' ?
                <span onClick={()=>setType('password')}>Hide</span>
                :
                <span onClick={()=>setType('text')}>Show</span>
            }
        </div>
    </div>
  )
}

export default PasswordInput