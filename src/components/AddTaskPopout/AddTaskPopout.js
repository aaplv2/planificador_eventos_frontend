import React from "react";
import { useForm } from "react-hook-form";

import { Dialog, DialogContent, DialogTrigger } from "../Dialog/Dialog";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Textarea } from "../Textarea/Textarea";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "../Form/Form";

function AddTaskPopout() {
  const form = useForm({
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          Añadir Tarea
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
            <FormDescription>Añadir Tarea</FormDescription>
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
              name="commissioner"
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
                    <Textarea />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Confirmar</Button>
            <Button type="submit">Cancelar</Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddTaskPopout;
