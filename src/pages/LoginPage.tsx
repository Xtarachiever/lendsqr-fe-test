import Input from "../components/ReusableInputs/Input";
import PasswordInput from "../components/ReusableInputs/PasswordInput";
import Button from "../components/ReusableButtons/Button";
import useLoginHook from "../hooks/LoginHook";
import welcomeImg from "/welcome.png";
import { useNavigate } from "react-router-dom";
import Logo from "/logo.svg";

type LoginProps = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const { email, password, handleSubmit, errors, register } =
    useLoginHook();
  const navigate = useNavigate();

  const onSubmit = (values: LoginProps) => {
    try {
      if (errors?.email || errors?.password) {
        console.log("Email and password must be filled as required");
      }
      if (values) {
        navigate("/users");
      }
    } catch (err) {}
  };
  return (
    <div>
      <div className="welcome-page">
        <div className="absolute logo">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="img">
          <img src={welcomeImg} alt="Welcome" />
        </div>
        <div className="form-div">
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <div className="welcome-title">
              <p className="welcome-text">Welcome!</p>
              <p className="light-text">Enter details to Login.</p>
            </div>
            <Input
              {...register("email")}
              placeholder="Email"
              value={email}
              type="email"
              name="email"
            />
            {errors?.email && (
              <p className="error_messages">{errors?.email?.message}</p>
            )}{" "}
            <br />
            <PasswordInput
              {...register("password")}
              placeholder="Password"
              value={password}
            />
            {errors?.password && (
              <p className="error_messages">{errors?.password?.message}</p>
            )}
            <p className="blue-text forgot-password">FORGET PASSWORD?</p>
            <Button name="LOG IN" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
