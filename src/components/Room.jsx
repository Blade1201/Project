import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/jpeg/room-1.jpeg";

const Room = ({ room }) => {
  const { name, slug, images, price } = room;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />

        <div className="price-top">
          <h6>{price} Ft./</h6>
          <p>Éjszakánként</p>
        </div>

        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Kiemelt
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
}

export default Room;