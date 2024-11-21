import React from "react";
import "./Navbar.css"; // Estilos de la barra de navegación
import logo from "../../assets/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} />
      </div>
      <ul className="navbar-links">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre Nosotros</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#workshops">Talleres</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      <button className="donate-button">¡Contribuye ahora!</button>
    </nav>
  );
};

export default Navbar;