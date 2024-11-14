import { useForm } from "react-hook-form";

import { Button } from "../Button/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Form/Form";
import { Input } from "../Input/Input";

import { useNavigate } from "react-router-dom";
import { useProfileStore } from "../../stores/profileStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { signinSchma } from "../../schemas/SigninSchema";
import { authorize } from "../../actions/authorize";
import { getUser } from "../../actions/getUser";

export default function SigninForm() {
  const navigate = useNavigate();
  const { updateEmail, updateIsLoggedIn } = useProfileStore();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(signinSchma),
    mode: "onChange",
  });

  function onSubmit(values) {
    authorize(values.email, values.password).then((data) => {
      updateIsLoggedIn(true);
      getUser(data.token).then(({ data }) => {
        updateEmail(data.email);
      });
      navigate("/");
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={!form.formState.isValid}>
          Iniciar Sesión
        </Button>
      </form>
    </Form>
  );
}
