import { ChangeEventHandler } from "react";
import styles from "./styles.module.css";
import { forwardRef } from "react";

type InputProps = {
  placeholder: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  type?: string;
  name?: string;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, value, onChange, type, name, ...rest }, ref) => {
    return (
      <div className={`${styles.inputField} input`}>
        <input
          {...rest}
          ref={ref}
          type={type ? type : "text"}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
        />
      </div>
    );
  }
);

export default Input;
