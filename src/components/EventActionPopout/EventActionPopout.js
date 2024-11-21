import React, { useState } from "react";
import { IconPencil } from "@tabler/icons-react";
import { useForm } from "react-hook-form";

import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import { DialogClose, DialogTitle } from "@radix-ui/react-dialog";
import { useEventStore } from "../../stores/eventStore";
import { postEventAction } from "../../actions/postEventAction";
import { Label } from "../Label/Label";
import { UploadButton } from "../UploadButton/UploadButton";

function EventActionPopout() {
  const [image, setImage] = useState({});

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
    const valuesData = new FormData();

    for (let prop in values) {
      valuesData.append(prop, values[prop]);
    }

    valuesData.append("file", image);

    postEventAction(valuesData).then(() => {
      window.location.reload();
    });
  }

  function handleFileUpload(file) {
    const image = file.target.files[0];
    setImage(image);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="fixed right-4 bottom-10" variant="outline">
          <IconPencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] event__action-popout">
        <DialogDescription />
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
                    <Input {...field} type="date" />
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
                    <Input {...field} type="time" />
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
            {/* <UploadButton>Subir Imagen</UploadButton> */}
            <Button
              type="button"
              className="px-0 py-0 w-full max-w-sm"
              onChange={handleFileUpload}
            >
              <Label
                htmlFor="picture"
                className="w-full h-full inline-flex justify-center items-center"
              >
                Subir Imagen
              </Label>
              <Input id="picture" type="file" style={{ display: "none" }} />
            </Button>
            <DialogClose asChild>
              <Button type="submit">Confirmar</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button className="ml-2">Cancelar</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EventActionPopout;
