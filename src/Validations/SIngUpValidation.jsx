import * as yup from "yup";

export const sIngUpValidation = yup.object({
  name: yup
    .string()
    .min(3, "Name should have at least 3 characters.")
    .max(25, "Name should not be greater then 25 character.")
    .required("Name is required."),
  email: yup.string().email("Invalid email.").required("Email is required."),
  password: yup
    .string()
    .min(6, "Password should have at least 6 characters.")
    .max(12, "Password should not be greater then 12 character.")
    .required("Password is required."),
  confirm_password: yup
    .string()
    .oneOf(
      [yup.ref("password"), null],
      "Password and confirm password does not match."
    )
    .required("Confirm password is required."),
  agree_terms: yup
    .bool()
    .oneOf([true], "Please agree the terms and conditions.")
    .required("Please agree the terms and conditions."),
});

