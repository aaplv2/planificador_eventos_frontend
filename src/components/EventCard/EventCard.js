import React from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../Table/Table";

import imageMainEventPath from "../../images/PRUEBA_proximo_evento.jpg";

function EventCard() {
  return (
    <div className="event-card">
      <div className="event-card__titles">
        <p className="event-card__titles-subtitle">Próximo Evento:</p>
        <h2 className="event-card__titles-title">Título del evento</h2>
      </div>
      <div className="event-card__event">
        <img
          className="event-card__event-image"
          src={imageMainEventPath}
          alt="Próximo evento"
        />
        <p className="event-card__event-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
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
    </div>
  );
}

export default EventCard;
