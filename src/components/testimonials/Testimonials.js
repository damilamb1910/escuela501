import React from "react";
import "./Testimonials.css";

const testimonialsData = [
  {
    quote: "Gracias a la escuela, mi hijo ha logrado desarrollarse en un ambiente lleno de amor y aprendizaje.",
    author: "María Gómez",
  },
  {
    quote: "El taller de carpintería fue una experiencia transformadora para mi sobrino. Ahora tiene más confianza en sí mismo.",
    author: "Jorge Pérez",
  },
  {
    quote: "Colaborar con esta institución es un honor. El impacto en los estudiantes es realmente increíble.",
    author: "Laura Martínez",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <h2>Lo Que Dicen de Nosotros</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <p className="quote">"{testimonial.quote}"</p>
            <p className="author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;