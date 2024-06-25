import { ChangeEventHandler, useState, forwardRef } from "react";
import styles from './styles.module.css';

type InputProps = {
    placeholder: string,
    value: string,
    onChange?: ChangeEventHandler<HTMLInputElement>
}

const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ placeholder, value, onChange, ...rest }, ref) => {
    const [type, setType] = useState<string>('password');

    return (
        <div className={styles.inputField}>
            <input
                {...rest}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                ref={ref}
                name="password"
                id="password"
            />
            <div className={styles.toggle_password}>
                {type === 'text' ? (
                    <span onClick={() => setType('password')}>Hide</span>
                ) : (
                    <span onClick={() => setType('text')}>Show</span>
                )}
            </div>
        </div>
    );
});

export default PasswordInput;
