import React from "react";
import { Button } from "../Button/Button";
import { EditProfileSheet } from "../EditProfileSheet/EditProfileSheet";
import { useProfileStore } from "../../stores/profileStore";

function Profile() {
  const username = useProfileStore((state) => state.username);
  const email = useProfileStore((state) => state.email);

  return (
    <div className="profile">
      <h2 className="profile-username">{username}</h2>
      <h2 className="profile-mail">{email}</h2>
      <Button>Cerrar sesión</Button>
      <EditProfileSheet />
    </div>
  );
}

export default Profile;
