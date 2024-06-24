import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { loginValidator } from './AuthValidator';


type useForm = {
    email:string,
    password:string,
}
const useLoginHook = () =>{
    const { watch, handleSubmit, formState, setValue }
    = useForm<useForm>({
        resolver: yupResolver(loginValidator),
        mode: "all",
        defaultValues: {
            password:"",
            email:""
        },
    });

    const handleValueChange = (field:'email' | 'password', value:string) =>{
        setValue(field, value)
    }

    const {email, password} = watch()
    return{
        handleValueChange,
        email,
        password,
        handleSubmit,
        errors: formState?.errors
    }
}

export default useLoginHook;