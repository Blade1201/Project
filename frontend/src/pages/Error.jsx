import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Error = () => {
  return (
    <Hero>
      <Banner title="404" subtitle="A keresett oldal nem található!">
        <Link to="/" className="btn-primary">
          Kezdőoldal
        </Link>
      </Banner>
    </Hero>
  );
}

export default Error;
