import React from "react";

import Navigation from "../Navigation/Navigation";

import logoMain1Path from "../../images/swtgo_2@2x.png";
import { Button } from "../Button/Button";
import { IconHome, IconMenu } from "@tabler/icons-react";
import { Link, useNavigate } from "react-router-dom";
import { EditProfileSheet } from "../EditProfileSheet/EditProfileSheet";
import { useProfileStore } from "../../stores/profileStore";

function Header() {
  const navigate = useNavigate();
  const { isLoggedIn, updateIsLoggedIn } = useProfileStore();

  function handleRedirect() {
    navigate("/signin");
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    updateIsLoggedIn(false);
  }

  function handleHomeClick() {
    navigate("/");
  }

  return (
    <header className="header">
      <img className="header__logo" alt="Logo Swingtiago" src={logoMain1Path} />
      <nav className="header__nav">
        <Navigation />
      </nav>
      <Button onClick={handleHomeClick}>
        <IconHome />
      </Button>
      <Button>
        <IconMenu />
      </Button>
      {!isLoggedIn ? (
        <Button onClick={handleRedirect}>Iniciar sesión</Button>
      ) : (
        <>
          <Button onClick={handleSignOut}>Cerrar sesión</Button>
          <EditProfileSheet />
        </>
      )}
    </header>
  );
}

export default Header;
