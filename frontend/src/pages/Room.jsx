import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import RoomContainer from "../components/RoomsContainer";


const Room = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="Szobáink">
          <Link to="/" className="btn-primary">
            Kezdőoldalra
          </Link>
        </Banner>
      </Hero>

      <RoomContainer />
    </>
  );
}

export default Room;