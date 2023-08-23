import React from "react";
import "./header.css";
import logo from "../../assets/imagens/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <Link to="/" className="favoritos">
        Home
      </Link>
      <Link to="/favoritos" className="favoritos">
        Favoritos
      </Link>
      <Link to="/adicionar" className="favoritos">
        Adicionar
      </Link>
    </header>
  );
}

export default Header;
