import React from "react";
import { Button } from "../Button/Button";
import { EditProfileSheet } from "../EditProfileSheet/EditProfileSheet";

function Profile() {
  return (
    <div className="profile">
      <h2 className="profile-username">Nombre de usario</h2>
      <h2 className="profile-mail">Email</h2>
      <Button>Cerrar sesión</Button>
      <EditProfileSheet />
    </div>
  );
}

export default Profile;
