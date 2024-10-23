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

  useEffect(() => {
    setToken(localStorage.getItem("jwt"));
    if (token) {
      getUser(token).then(({ data }) => {
        updateEmail(data.email);
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
      <nav className="header__nav">
        <Navigation />
      </nav>
      <Button onClick={handleHomeClick}>
        <IconHome />
      </Button>
        <IconMenu />
      {/* <HeaderDropdownMenu isLoggedIn={isLoggedIn}>
        <IconMenu />
      </HeaderDropdownMenu> */}
      {!isLoggedIn ? (
        
        <Button onClick={handleRedirect}>Iniciar sesión</Button>
      ) : (
        <>
          <div className="header">
            <h2 className="header-mail">{email}</h2>
          </div>
          <Button onClick={handleSignOut}>Cerrar sesión</Button>
          <EditProfileSheet />
        </>
      )}
    </header>
  );
}

export default Header;
