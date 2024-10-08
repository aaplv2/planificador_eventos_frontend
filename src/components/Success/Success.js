import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../Table/Table";
import { Button } from "../Button/Button";

function Success() {
  return (
    <div className="success">
      <h2>Exito!</h2>
      <p>Registro al evento a sido exitoso.</p>
      <p>Tu número de entrada es:</p>
      <h3>ID O CODIGO RANDOM</h3>
      <div className="event-details">
        <Table>
          <TableHeader></TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Hora</TableCell>
              <TableCell>19:00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lugar</TableCell>
              <TableCell>Direccion 878, barrio</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Valor</TableCell>
              <TableCell>$10000</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Cupos</TableCell>
              <TableCell>59/100</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Button>Inicio</Button>
    </div>
  );
}

export default Success;
