import React from "react";
import SigninForm from "../SigninForm/SigninForm.js";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="signin">
      <h2 className="signin__title">Inicia Sesion</h2>
      <SigninForm />
      <div className="signin__link">
        <p className="signin__text">
          ¿Aún no eres miembro? {""}
          <Link to="/signup">Regístrate aquí</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
