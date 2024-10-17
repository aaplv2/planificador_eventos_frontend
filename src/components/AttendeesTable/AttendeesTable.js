import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table/Table";

function AttendeesTable({ event }) {
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
        {event.attendees &&
          event.attendees.map((attendee, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{attendee.name}</TableCell>
              <TableCell>{attendee.status}</TableCell>
              <TableCell>{attendee.phone}</TableCell>
              <TableCell className="text-right">{attendee.email}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default AttendeesTable;
