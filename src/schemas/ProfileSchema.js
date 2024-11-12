import * as yup from "yup";

export const profileSchema = yup
  .object({
    name: yup
      .string()
      .required("Campo requerido")
      .min(3, "Mínimo 3 caracteres"),
    email: yup.string().email("Formato incorrecto").required("Campo requerido"),
  })
  .required();
