import React from "react";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

function Form() {
  return (
    <div className="form">
      <h2 className="form__title">Título del Formulario</h2>
      <Input />
      <Input />
      <Input />
      <Button>Registrate</Button>
    </div>
  );
}

export default Form;
