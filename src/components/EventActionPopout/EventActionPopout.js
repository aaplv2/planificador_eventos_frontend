import React from "react";
import { IconPencil } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

import { Dialog, DialogContent, DialogTrigger } from "../Dialog/Dialog";
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
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { useEventStore } from "../../stores/eventStore";
import { postEventAction } from "../../actions/postEventAction";

function EventActionPopout() {
  const update = useEventStore((state) => state.update);

  const form = useForm({
    defaultValues: {
      title: "",
      location: "",
      date: "",
      time: "",
      price: "",
      slots: "",
      description: "",
    },
  });

  function onSubmit(values) {
    update([]);
    postEventAction(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IconPencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogTitle>Nuevo Evento</DialogTitle>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Titulo</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Ubicación</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fecha</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="time"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Valor Entrada</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="slots"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Cupos</FormLabel>
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
            <Button>Subir Imagen</Button>
            <DialogClose asChild>
              <Button type="submit">Confirmar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button>Cancelar</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EventActionPopout;
