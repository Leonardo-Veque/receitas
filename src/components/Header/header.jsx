import React from "react";
import "./header.css";
import Logo from "./imagens/logo.png";

export const header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" />
    </header>
  );
};
