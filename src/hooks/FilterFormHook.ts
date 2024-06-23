
import { useForm } from 'react-hook-form';

type useForm = {
    organization:string,
    username:string,
    email:string,
    date:string,
    phoneNumber:string,
    status:string
}
const useFilterHook = () =>{
    const { watch, handleSubmit, formState, setValue, reset }
    = useForm<useForm>({
        mode: "all",
        defaultValues: {
            organization:"",
            username:"",
            email:"",
            date:"",
            phoneNumber:"",
            status:""
        },
    });

    const handleValueChange = (field:keyof useForm, value:string) =>{
        setValue(field, value)
    }

    const {email, organization, username, date, phoneNumber, status} = watch()
    return{
        handleValueChange,
        email,
        organization,
        username,
        date,
        phoneNumber,
        status,
        handleSubmit,
        errors: formState?.errors,
        reset
    }
}

export default useFilterHook;