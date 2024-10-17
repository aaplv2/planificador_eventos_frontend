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
import { authorize } from "../../utils/auth";
import { useNavigate } from "react-router-dom";
import { useProfileStore } from "../../stores/profileStore";

export default function SigninForm() {
  const navigate = useNavigate();
  const { updateIsLoggedIn } = useProfileStore();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values) {
    authorize(values.email, values.password).then((data) => {
      updateIsLoggedIn(true);
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
              <FormLabel>Inicia Sesion</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
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
              <FormLabel>Inicia Sesion</FormLabel>
              <FormControl>
                <Input placeholder="Contraseña" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
