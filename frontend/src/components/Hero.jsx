import React from "react";
import "../styles/components/hero.css";

const Hero = ({ children}) => {
  return <header className="defaultHero">{children}</header>;
}


export default Hero;