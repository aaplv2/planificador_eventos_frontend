import React from "react";

import imageMainEventPath from "../../images/PRUEBA_proximo_evento.jpg";

function EventCard() {
  return (
    <div className="eventCard">
      <div className="eventCard__titles">
        <p className="eventCard__titles-subtitle">Próximo Evento:</p>
        <p className="eventCard__titles-title">Título del evento</p>
      </div>
      <div className="eventCard__event">
        <img
          className="eventCard__event-image"
          src={imageMainEventPath}
          alt="Próximo evento"
        />
        <p className="eventCard__event-description">
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
    </div>
  );
}

export default EventCard;
