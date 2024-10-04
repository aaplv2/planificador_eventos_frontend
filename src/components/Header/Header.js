import React from "react";

import Navigation from "../Navigation/Navigation";

import logoMain1Path from "../../images/swtgo_2@2x.png";
import { Button } from "../Button/Button";
import { IconMenu } from "@tabler/icons-react";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Logo Swingtiago" src={logoMain1Path} />
      <nav className="header__nav">
        <Navigation/>
      </nav>
      <Button variant="ghost">
        <IconMenu/>
      </Button>
    </header>
  );
}

export default Header;
