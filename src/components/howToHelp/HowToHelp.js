import React from "react";
import "./HowToHelp.css";

const HowToHelp = () => {
  return (
    <section className="how-to-help" id="how-to-help">
      <div className="help-content">
        <h2>Cómo Puedes Ayudar</h2>
        <p>
          Tu apoyo puede marcar la diferencia en la vida de nuestros estudiantes. 
          Con tu ayuda, podemos mejorar nuestras instalaciones, equipar los talleres, 
          y brindar más oportunidades a quienes más lo necesitan.
        </p>
        <div className="help-buttons">
          <button className="primary-button">Haz una Donación</button>
          <button className="secondary-button">Sé Voluntario</button>
          <button className="secondary-button">Patrocina un Taller</button>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;