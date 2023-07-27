import React from "react";
import { Link } from "react-router-dom";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0]} alt="single room" />

        <div className="price-top">
          <h6>{price} Ft./</h6>
          <p>Éjszakánként</p>
        </div>

        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Foglalás
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

export default Room;