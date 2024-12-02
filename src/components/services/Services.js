import React from "react";
import "./Services.css";

const servicesData = [
  { title: "Inicial", description: "Educación personalizada para el desarrollo inicial de los estudiantes." },
  { title: "Primer Ciclo", description: "Fortaleciendo las bases educativas de los niños." },
  { title: "Segundo Ciclo", description: "Preparación académica avanzada y habilidades sociales." },
  { title: "Inclusión", description: "Promovemos la integración en todos los niveles educativos." },
  { title: "Teatro", description: "Desarrollo de habilidades artísticas y confianza." },
  { title: "Música", description: "Estimulación a través de la música y la creatividad." },
  { title: "Educación Física", description: "Fomentamos el bienestar físico y mental." },
  { title: "ATDI", description: "Atención temprana para el desarrollo integral." },
  { title: "CFI (Centro de formación integral)", description: "Atención temprana para el desarrollo integral." },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <h2>Nuestros Servicios</h2>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;