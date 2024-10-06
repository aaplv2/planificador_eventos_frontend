import React from "react";
import EventCard from "../EventCard/EventCard";
import RegisterForm from "../RegisterForm/RegisterForm";

function Event() {
  return (
    <div className="event">
      <EventCard />
      <div>
        <p>detalles</p>
      </div>
      <RegisterForm />
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d26636.65862032199!2d-70.60712124865722!3d-33.43413199166966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2scl!4v1728060835097!5m2!1sen!2scl"
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Event;
