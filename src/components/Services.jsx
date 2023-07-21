import React from 'react';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import Title from './Title';

const Services = () => {
  const services = [
    {
      icon: <FaCocktail />,
      title: "Koktélozás",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
    },
    {
      icon: <FaHiking />,
      title: "Kerékpározás",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Ingyenes szállítás",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
    },
    {
      icon: <FaBeer />,
      title: "Alkohol fogyasztás",
      info:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores est eaque error provident unde eligendi.",
    },
  ];

  return (
    <section className="services">
      <Title title="Szolgáltatásaink" />

      <div className="services-center">
        {services.map((item, index) => {
          return (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
