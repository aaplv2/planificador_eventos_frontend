import * as yup from "yup";

export const profileSchema = yup
  .object({
    username: yup.string().required("Requerido").min(3, "Mínimo 3 caracteres"),
    email: yup.string().email("Formato incorrecto").required("Requerido"),
  })
  .required();
