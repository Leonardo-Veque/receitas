import React from "react";
import "./header.css";
import logo from "../../assets/imagens/logo.png"

function Header() {
  return (
    <header>
     <img src={logo} alt="logo" style={{width:"200px"}}/>
    </header>
  );
}

export default Header;
