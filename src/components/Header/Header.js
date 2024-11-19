import React, { useEffect, useState } from "react";

import logoMain1Path from "../../images/swtgo_2@2x.png";
import { Button } from "../Button/Button";
import { IconHome } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { EditProfileSheet } from "../EditProfileSheet/EditProfileSheet";
import { useProfileStore } from "../../stores/profileStore";
import { getUser } from "../../actions/getUser";


function Header() {
  const navigate = useNavigate();
  const { email, updateEmail, isLoggedIn, updateIsLoggedIn } =
    useProfileStore();

  const [token, setToken] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    setToken(token);
    if (token) {
      getUser(token).then(({ data }) => {
        updateEmail(data.email);
        setUserEmail(data.email);
      });
    }
  }, [updateIsLoggedIn]);

  function handleRedirect() {
    navigate("/signin");
  }

  function handleSignOut() {
    localStorage.removeItem("jwt");
    updateIsLoggedIn(false);
    navigate("..");
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
      {!isLoggedIn ? (
        <Button
          className="header__button-log bg-color-foreground hover:bg-primary/20"
          onClick={handleRedirect}
        >
          Iniciar sesión
        </Button>
      ) : (
        <>
          <h2 className="header__user hidden sm:block">{email}</h2>
          <Button
            className="header__button-log bg-color-foreground hover:bg-primary/20 hidden sm:block"
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
