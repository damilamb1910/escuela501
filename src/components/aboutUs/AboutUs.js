import React from "react";
import "./AboutUs.css";
import aboutImg from "../../assets/hero.png"

const AboutUs = () => {
  return (
    <section className="about-us" id="about-us">
      <div className="about-us-content">
        <div className="about-us-text">
          <h2>Sobre Nosotros</h2>
          <p>
            En la Escuela de Educación Especial N° 501 'Villa Las Naciones', trabajamos con dedicación para brindar una educación inclusiva y personalizada. Nuestro objetivo es potenciar las habilidades de cada estudiante, fomentando su desarrollo personal, académico y social. 
          </p>
          <p>
            Con más de 20 años de trayectoria, somos un referente en la comunidad, ofreciendo talleres y programas adaptados a las necesidades individuales de nuestros alumnos. ¡Tu apoyo nos ayuda a seguir creciendo y haciendo la diferencia!
          </p>
        </div>
        <div className="about-us-image">
          <img src={aboutImg} alt="Imagen representativa de la escuela" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;