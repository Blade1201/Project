import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import FeaturedRooms from "../components/FeaturedRooms";
import Hero from "../components/Hero";
import Services from "../components/Services";

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero>
        <Banner title="Szobáink" subtitle="Már 1999 Ft./éjszakától">

          <Link to="/rooms" className="btn-primary"> Szobáink </Link>

        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
}

export default Home;
