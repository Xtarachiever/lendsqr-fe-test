import { object, string } from 'yup';


export const loginValidator = object().shape({
    password: string()
        .length(8)
        .required('Fill in your password'),
    email: string().trim().email().required(),
});