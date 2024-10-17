import * as yup from "yup";

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const registerSchema = yup
  .object({
    name: yup.string().required("Campo requerido"),
    email: yup.string().email("Formato incorrecto").required("Campo requerido"),
    phone: yup.string().matches(phoneRegExp, "Número de teléfono inválido"),
  })
  .required();
