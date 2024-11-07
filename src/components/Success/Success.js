import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../Table/Table";
import { Button } from "../Button/Button";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getEventById } from "../../actions/getEventById";

function Success() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [event, setEvent] = useState({});
  const [lastDigits, setLastDigits] = useState("");

  useEffect(() => {
    getEventById(id).then(({ data }) => {
      setEvent(data);
      const digits = data._id.match(/\d+$/);
      setLastDigits(digits ? digits[0] : "");
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
      <h3 className="success__code">{lastDigits}</h3>
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
      <Button onClick={handleReturnButton}>Inicio</Button>
    </div>
  );
}

export default Success;
