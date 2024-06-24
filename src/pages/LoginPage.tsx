import Input from '../components/ReusableInputs/Input';
import PasswordInput from '../components/ReusableInputs/PasswordInput';
import Button from '../components/ReusableButtons/Button';
import useLoginHook from '../hooks/LoginHook';
import welcomeImg from '/welcome.svg';
import {useNavigate} from 'react-router-dom';

type LoginProps = {
    email:string,
    password:string
  }

const LoginPage = () => {
    const { email, password, handleValueChange, handleSubmit, errors } = useLoginHook();
    const navigate = useNavigate();

    const onSubmit = (values:LoginProps) =>{
      try{
        if(errors?.email || errors?.password){
            console.log('Email and password must be filled as required')
        }
        if(values){
            navigate('/')
        }
      }catch(err){

      }
    }
  return (
    <div>
        <div className='welcome-page'>
            <div className='img'>
            <img src={welcomeImg} alt='Welcome'/>
            </div>
            <div className='form-div'>
            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <div className='welcome-title'>
                  <p className='welcome-text'>Welcome!</p>
                  <p className='light-text'>Enter details to Login.</p>
                </div>
                <Input placeholder='Email' value={email} onChange={(e)=>{handleValueChange('email',e.target.value)}}/>
                {errors?.email && <p className='error_messages'>{errors?.email?.message}</p>} <br />
                <PasswordInput placeholder='Password' value={password} onChange={(e)=>{handleValueChange('password',e.target.value)}}/>
                {errors?.password && <p className='error_messages'>{errors?.password?.message}</p>} 
                <p className='blue-text forgot-password'>FORGET PASSWORD?</p>
                <Button name='LOG IN' type='submit'/>
            </form>
            </div>
        </div>
    </div>
  )
}

export default LoginPage