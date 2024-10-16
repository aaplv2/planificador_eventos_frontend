import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table/Table";

import { useParams } from "react-router-dom";
import { getEventById } from "../../actions/getEventById";

function AttendeesTable() {
  const { id } = useParams();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEventById(id).then((events) => {
      setEvents(events);
    });
  }, []);

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
        {events.map((event) =>
          event.attendees.map((attendee, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{attendee.name}</TableCell>
              <TableCell>{attendee.status}</TableCell>
              <TableCell>{attendee.phone}</TableCell>
              <TableCell className="text-right">{attendee.email}</TableCell>
            </TableRow>
          ))
        )}
      </TableBody>
    </Table>
  );
}

export default AttendeesTable;
