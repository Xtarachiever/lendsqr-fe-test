import { object, string } from "yup";

export const loginValidator = object().shape({
  password: string()
    .min(3, "Password must be at least 3 characters")
    .max(8, "Password cannot exceed 8 characters")
    .required("Fill in your password"),
  email: string()
    .trim()
    .email("Please enter a valid email")
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Please enter a valid email"
    )
    .required("Email is required"),
});
