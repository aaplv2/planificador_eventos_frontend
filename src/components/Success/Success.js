import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../Table/Table";
import { Button } from "../Button/Button";
import { useNavigate, useParams } from "react-router-dom";
import { getEventById } from "../../actions/getEventById";
import useTicketCodeStore from "../../stores/ticketCodeStore";

function Success() {
  const { ticketCode } = useTicketCodeStore(); 

  const { id } = useParams();

  const navigate = useNavigate();

  const [event, setEvent] = useState({});

  useEffect(() => {
    getEventById(id).then(({ data }) => {
      setEvent(data);
    });
  }, []);

  function handleReturnButton() {
    navigate(-1);
  }

  return (
    <div className="success">
      <h2 className="success__title">Exito!</h2>
      <div className="success__text">
        <p>Registro al evento a sido exitoso.</p>
        <p>Tu número de entrada es:</p>
      </div>
      <h3 className="success__code">{ticketCode}</h3>
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
      <Button onClick={handleReturnButton}>Volver a evento</Button>
    </div>
  );
}

export default Success;
