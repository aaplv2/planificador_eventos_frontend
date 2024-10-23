import {
  IconBrandGithub,
  IconCloud,
  IconLogout,
  IconMenu,
} from "@tabler/icons-react";
import { Button } from "../Button/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "../DropdownMenu/DropdownMenu";
import { useNavigate } from "react-router-dom";
import { useProfileStore } from "../../stores/profileStore";
import { useEffect, useState } from "react";
import { getUser } from "../../utils/auth";

export function HeaderDropdownMenu(isLoggedIn) {
  const navigate = useNavigate();
  const { email, updateEmail, updateIsLoggedIn } = useProfileStore();
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

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <IconMenu />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <IconBrandGithub />
          <span>GitHub</span>
        </DropdownMenuItem>
        <DropdownMenuItem disabled>
          <IconCloud />
          <span>API</span>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          {isLoggedIn ? (
            <Button onClick={handleRedirect}>Iniciar sesión</Button>
          ) : (
            <>
              <div className="header">
                <h2 className="header-mail">{email}</h2>
              </div>
              <Button onClick={handleSignOut}>Cerrar sesión</Button>
            </>
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
