import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../Table/Table";

function EventCard({
  title,
  date,
  time,
  location,
  price,
  slots,
  image,
  description,
  showTable = false,
  showSubtitle = false,
}) {
  return (
    <div className="event-card">
      <div className="event-card__titles">
        {showSubtitle && (
          <p className="event-card__titles-subtitle">Próximo Evento:</p>
        )}
        <h2 className="event-card__titles-title">{title}</h2>
      </div>
      <div className="event-card__event">
        {image != undefined && (
          <img
            className="event-card__event-image"
            src={"/" + image}
            alt={title}
          />
        )}
        <p className="event-card__event-description">{description}</p>
      </div>
      {showTable && (
        <div className="event-details">
          <Table>
            <TableHeader></TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Fecha</TableCell>
                <TableCell>
                  {new Date(date).toLocaleDateString("es-ES")}, {time}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Lugar</TableCell>
                <TableCell>{location}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Valor</TableCell>
                <TableCell>{price}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Cupos</TableCell>
                <TableCell>{slots}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      )}
    </div>
  );
}

export default EventCard;
