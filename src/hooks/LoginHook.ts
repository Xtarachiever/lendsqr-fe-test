import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidator } from './AuthValidator';


type useForm = {
    email:string,
    password:string,
}
const useLoginHook = () =>{
    const { watch, handleSubmit, formState, register }
    = useForm<useForm>({
        resolver: yupResolver(loginValidator),
        mode: "all",
        defaultValues: {
            password:"",
            email:""
        },
    });

    const {email, password} = watch()
    return{
        email,
        password,
        handleSubmit,
        errors: formState?.errors,
        register
    }
}

export default useLoginHook;