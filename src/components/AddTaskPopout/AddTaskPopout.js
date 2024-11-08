import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../Dialog/Dialog";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "../Form/Form";
import { useEventStore } from "../../stores/eventStore";
import { useParams } from "react-router-dom";
import { postTaskToEvent } from "../../actions/postTaskToEvent";

function AddTaskPopout({ event, setEvent }) {
  const update = useEventStore((state) => state.update);

  const { id } = useParams();

  const form = useForm({
    defaultValues: {
      time: "",
      title: "",
      responsible: "",
      description: "",
    },
  });

  function onSubmit(values) {
    update([]);
    postTaskToEvent({ tasks: [...event.tasks, values] }, id).then(({data}) => {
      setEvent(data);
    });
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Añadir Tarea</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Añadir Tarea</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hora</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="responsible"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Encargado</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Desripción</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogClose asChild>
              <Button type="submit">Confirmar</Button>
            </DialogClose>
            <Button>Cancelar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskPopout;
