import { useForm } from "react-hook-form";

import { Button } from "../Button/Button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../Form/Form";
import { Input } from "../Input/Input";
import { postRegisterToEvent } from "../../actions/postRegisterToEvent";
import { useParams } from "react-router-dom";
import { useEventStore } from "../../stores/eventStore";

export default function RegisterForm({ event, setEvent }) {
  const update = useEventStore((state) => state.update);

  const { id } = useParams();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
    },
  });

  function onSubmit(values) {
    update([]);
    postRegisterToEvent({ attendees: [...event.attendees, values] }, id).then(
      (data) => {
        //data == array
        //data[0] == event
        setEvent(data);
        //aca hay que cambiar el estado en donde este el evento
      }
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input id="name" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input id="email" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Teléfono</FormLabel>
              <FormControl>
                <Input id="phone" {...field} />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit">Regístrate</Button>
      </form>
    </Form>
  );
}
