import React from "react";
import { useRegisterStore } from "../../stores/registerStore";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table/Table";

function AttendeesTable() {
  const name = useRegisterStore((state) => state.name);
  const email = useRegisterStore((state) => state.email);
  const phone = useRegisterStore((state) => state.phone);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Nombre</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead>Teléfono</TableHead>
          <TableHead className="text-right">Correo electrónico</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Andres P</TableCell>
          <TableCell>Pagado</TableCell>
          <TableCell>12345678</TableCell>
          <TableCell className="text-right">test1@test.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV002</TableCell>
          <TableCell>Pendiente</TableCell>
          <TableCell>12345678</TableCell>
          <TableCell className="text-right">test2@test.com</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">INV003</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>12345678</TableCell>
          <TableCell className="text-right">test3@test.com</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

export default AttendeesTable;
