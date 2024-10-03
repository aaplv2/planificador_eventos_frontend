import React from "react";

import Navigation from "../Navigation/Navigation";

import logoMain1Path from "../../images/swtgo_2@2x.png";
import { Button } from "../Button/Button";

function Header() {
  return (
    <header className="header">
      <img className="header__logo" alt="Logo Swingtiago" src={logoMain1Path} />
      <nav className="header__nav">
        <Navigation></Navigation>
      </nav>
      <Button></Button>
    </header>
  );
}

export default Header;
