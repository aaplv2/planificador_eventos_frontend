import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../Table/Table";
import { Button } from "../Button/Button";
import { useEventStore } from "../../stores/eventStore";
import { useParams } from "react-router-dom";
import { getEventById } from "../../actions/getEventById";

function Success() {
  const { id } = useParams();

  const [event, setEvent] = useState({});

  useEffect(() => {
    getEventById(id).then((data) => {
      setEvent(data.data);
    });
  }, []);

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
              <TableCell>{event.time}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Lugar</TableCell>
              <TableCell>{event.location}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Valor</TableCell>
              <TableCell>{event.price}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Cupos</TableCell>
              <TableCell>{event.slots}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <Button>Inicio</Button>
    </div>
  );
}

export default Success;
