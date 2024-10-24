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
import api from "../../utils/api";

function EventActionPopout() {
  const update = useEventStore((state) => state.update);
  const event = useEventStore();

  const [file, setFile] = useState({});
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
    // const valuesBlob = new Blob([
    //   JSON.stringify(values.title),
    //   { type: "application/json" },
    // ]);

    const valuesData = new FormData();

    for (let prop in values) {
      valuesData.append(prop, values[prop])
    }

    valuesData.append("file", image);
    
    // valuesData.append("title", values.title);
    // valuesData.append("location", values.location);
    // valuesData.append("date", values.date);
    // valuesData.append("time", values.time);
    // valuesData.append("price", values.price);
    // valuesData.append("slots", values.slots);
    // valuesData.append("description", values.description);

    fetch("http://localhost:3000/upload", {
      method: "POST",
      body: valuesData,
    })
      .catch((err) => {
        console.log(err);
      })
      .then((res) => {
        console.log(res);
      });

    // formData.append("event", values);
    // formData.append("event", file);

    // update([]);
    // postEventAction(values);
  }

  function handleFileUpload(file) {
    const image = file.target.files[0]; //[file]
    // const imageData = new FormData();
    // imageData.append("file", image);

    setImage(image);

    // api.uploadImage(data)

    // setFile(image.files);
    // const reader = new FileReader();
    // reader.onloadend = function() {
    //   console.log('RESULT', reader.result)
    // }
    // reader.readAsDataURL(file)
    // const reader = new FileReader();
    // reader.onloadend = function () {
    //   console.log("RESULT", reader.result);
    // };
    // reader.readAsDataURL(file);
    // console.log(file);
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <IconPencil />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
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
              <Button>Cancelar</Button>
            </DialogClose>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default EventActionPopout;
