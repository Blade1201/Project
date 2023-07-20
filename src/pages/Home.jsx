import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="Szobák"
          subtitle="Már 3000 Ft./éjszakától"
        >
          <Link to="/rooms" className="btn-primary">
            Szobáink
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;
