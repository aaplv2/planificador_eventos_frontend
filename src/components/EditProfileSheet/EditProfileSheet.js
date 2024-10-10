import { useForm } from "react-hook-form";
import { useProfileStore } from "../../stores/profileStore";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../../schemas/ProfileSchema";

import {
  Sheet,
  SheetClose,
  SheetContent,
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

export function EditProfileSheet() {
  const update = useProfileStore((state) => state.update);

  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
    },
    resolver: yupResolver(profileSchema),
    mode: "onChange",
  });

  function onSubmit(data) {
    update(data.username, data.email);
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Editar</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Editar Perfíl</SheetTitle>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-1">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem className="grid grid-cols-4 items-center gap-4">
                    <FormLabel className="text-right">Nombre</FormLabel>
                    <FormControl>
                      <Input id="username" className="col-span-3" {...field} />
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
