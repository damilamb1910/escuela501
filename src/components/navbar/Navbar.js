import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css"; // Estilos de la barra de navegación
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null); // Referencia al menú desplegable

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = (event) => {
    // Cierra el menú si el clic ocurre fuera del contenedor del menú
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Agregar el listener al montar el componente
    document.addEventListener("mousedown", closeMenu);
    return () => {
      // Limpiar el listener al desmontar el componente
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <img
            src={logo}
            alt="Logo Escuela 501"
            className="logo-img"
          />
        </a>
      </div>
      <div ref={menuRef} className={`navbar-links ${isOpen ? "open" : ""}`}>
        <a href="#about-us">Sobre Nosotros</a>
        <a href="#services">Servicios</a>
        <a href="#workshops">Talleres</a>
        <a href="#how-to-help">Cómo Ayudar</a>
        <a href="#testimonials">Testimonios</a>
        <a href="#contact">Contacto</a>
      </div>
      <button className="navbar-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
    </nav>
  );
};

export default Navbar;
