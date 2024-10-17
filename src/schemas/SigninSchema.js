import * as yup from "yup";

export const signinSchma = yup.object({
  email: yup.string().email("Formato incorrecto").required("Campo requerido"),
  password: yup
    .string()
    .min(4, "Mínimo 4 caracteres")
    .required("Campo requerido"),
});
