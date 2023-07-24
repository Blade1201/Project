import React from 'react';
import { FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';
import { BiRestaurant } from 'react-icons/bi';
import Title from './Title';

const Services = () => {
  const services = [
    {
      icon: <BiRestaurant />,
      title: "Étterem",
      info:
        "Ismerje meg séfeink ízléses mesevilágát.",
    },
    {
      icon: <FaHiking />,
      title: "Túrázás",
      info:
        "Vendégeink kedvezményesen látogathatják városunk látványosságait.",
    },
    {
      icon: <FaShuttleVan />,
      title: "Ingyenes parkolás",
      info:
        "Hotelünk területén a vendégek ingyenes parkolási lehetőséggel élhetnek.",
    },
    {
      icon: <FaBeer />,
      title: "Alkohol fogyasztás",
      info:
        "Felnőtt érdeklődőink válogathatnak széles választékú katalógusainkban.",
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
