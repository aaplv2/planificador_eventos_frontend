import { useForm } from "react-hook-form";
import { useProfileStore } from "../../stores/profileStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../schemas/ProfileSchema";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../Sheet/Sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../Form/Form";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { updateUserInfo } from "../../actions/updateUserInfo";
import { IconMenu, IconMenu2 } from "@tabler/icons-react";

export function EditProfileSheet() {
  const update = useProfileStore((state) => state.update);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
    },
    resolver: yupResolver(profileSchema),
    mode: "onChange",
  });

  function onSubmit(values) {
    updateUserInfo(values.name, values.email);
    update(values.name, values.email, true);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-color-foreground hover:bg-primary/20">
          <IconMenu2 />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar Perfíl</SheetTitle>
        </SheetHeader>
        <SheetDescription>{""}</SheetDescription>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">Nombre</FormLabel>
                    <FormControl>
                      <Input id="name" className="col-span-3" {...field} />
                    </FormControl>
                    <FormMessage className="col-span-full col-start-2" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">
                      Correo electrónico
                    </FormLabel>
                    <FormControl>
                      <Input id="email" className="col-span-3" {...field} />
                    </FormControl>
                    <FormMessage className="col-span-full col-start-2" />
                  </FormItem>
                )}
              />
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit" disabled={!form.formState.isValid}>
                    Confirmar
                  </Button>
                </SheetClose>
              </SheetFooter>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
}
