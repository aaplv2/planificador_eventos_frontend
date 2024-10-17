import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table/Table";

function TasksTable({ event }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Hora</TableHead>
          <TableHead>Taréa</TableHead>
          <TableHead>Encargado</TableHead>
          <TableHead className="text-right">Desripción</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {event.tasks &&
          event.tasks.map((tasks, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{tasks.time}</TableCell>
              <TableCell>{tasks.title}</TableCell>
              <TableCell>{tasks.responsible}</TableCell>
              <TableCell className="text-right">{tasks.description}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}

export default TasksTable;
