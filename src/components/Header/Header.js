import React, { useEffect, useState } from "react";

import Navigation from "../Navigation/Navigation";

import logoMain1Path from "../../images/swtgo_2@2x.png";
import { Button } from "../Button/Button";
import { IconHome, IconMenu } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { EditProfileSheet } from "../EditProfileSheet/EditProfileSheet";
import { useProfileStore } from "../../stores/profileStore";
import { getUser } from "../../utils/auth";

function Header() {
  const navigate = useNavigate();
  const { email, updateEmail, isLoggedIn, updateIsLoggedIn } =
    useProfileStore();

  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
    if (token) {
      getUser(token).then(({ data }) => {
        updateEmail(data.email);
        setUserEmail(data.email);
      });
    }
  }, []);

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
      <Button
        className="bg-color-foreground hover:bg-primary/20"
        onClick={handleHomeClick}
      >
        <IconHome />
      </Button>
      {/* <nav className="header__nav">
        <Navigation />
      </nav> */}
      {/* <IconMenu /> */}
      {/* <HeaderDropdownMenu isLoggedIn={isLoggedIn}>
        <IconMenu />
      </HeaderDropdownMenu> */}
      {!isLoggedIn ? (
        <Button
          className="header__button-log bg-color-foreground hover:bg-primary/20"
          onClick={handleRedirect}
        >
          Iniciar sesión
        </Button>
      ) : (
        <>
          <h2 className="header__user">{userEmail}</h2>
          <Button
            className="header__button-log bg-color-foreground hover:bg-primary/20"
            onClick={handleSignOut}
          >
            Cerrar sesión
          </Button>
          <EditProfileSheet />
        </>
      )}
    </header>
  );
}

export default Header;
