import React from "react";
import SignupForm from "../SignupForm/SignupForm";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="signup">
      <h2 className="signup__title">Registrate</h2>
      <SignupForm />
      <p className="signup__text">
        ¿Ya eres miembro? {""}
        <Link to="/signin">Inicia sesión aquí</Link>
      </p>
    </div>
  );
}

export default Signup;
