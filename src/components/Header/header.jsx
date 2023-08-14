import React from "react";
import "./header.css";
import Logo from "./imagens/logo.png";

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" />
    </header>
  );
};

export default Header;
