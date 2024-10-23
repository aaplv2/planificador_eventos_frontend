import * as yup from "yup";

export const signupSchma = yup.object({
  name: yup.string().required("Campo requerido"),
  email: yup.string().email("Formato incorrecto").required("Campo requerido"),
  password: yup
    .string()
    .min(4, "Mínimo 4 caracteres")
    .required("Campo requerido"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Contraseñas no coinciden"),
});
