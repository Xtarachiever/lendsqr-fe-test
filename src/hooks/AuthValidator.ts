import { object, string } from 'yup';

export const loginValidator = object().shape({
    password: string()
        .min(3, 'Password must be at least 3 characters')
        .max(8, 'Password cannot exceed 8 characters')
        .required('Fill in your password'),
    email: string().trim().email().required('Email is required'),
});