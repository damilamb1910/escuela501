import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Transformando vidas a través de la educación especial</h1>
        <p>Con tu ayuda, podemos seguir creciendo y ofreciendo oportunidades únicas a nuestros estudiantes.</p>
        <div className="hero-buttons">
          <button className="primary-button">Conoce más</button>
          <button className="secondary-button">Colabora</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;