import React from "react";
import "./Workshops.css";

const workshopsData = [
  { title: "Carpintería", description: "Desarrollo de habilidades manuales y artísticas en la creación de objetos de madera." },
  { title: "Metalmecánica", description: "Aprendizaje práctico en procesos de metalurgia y mecánica básica." },
  { title: "Economía Doméstica", description: "Fomentamos la autonomía en actividades del hogar y manejo de recursos." },
  { title: "Jardinería", description: "Cuidado del medio ambiente y habilidades de cultivo y paisajismo." },
  { title: "Taller de Armado", description: "Habilidades en ensamblaje de componentes y proyectos prácticos." },
];

const Workshops = () => {
  return (
    <section className="workshops" id="workshops">
      <h2>Nuestros Talleres</h2>
      <div className="workshops-container">
        {workshopsData.map((workshop, index) => (
          <div className="workshop-card" key={index}>
            <h3>{workshop.title}</h3>
            <p>{workshop.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Workshops;