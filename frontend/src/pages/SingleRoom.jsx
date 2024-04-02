import React, {useContext, useEffect} from 'react';
import "../styles/pages/singleroom.css";
import {Link, useParams} from 'react-router-dom';
import {RoomListContext} from '../context/RoomListContext';
import Banner from '../components/Banner';
import RoomHero from "../components/RoomHero";


const SingleRoom = () => {
  const { slug } = useParams();

  const context = useContext(RoomListContext);
  const { getRoom } = context;
  const room = getRoom(slug);


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  if (!room) {
    return (
        <div className="error">
          <h3>Nincs ilyen szobánk!</h3>
          <Link to="/rooms" className="btn-primary">
            Vissza a szobákhoz
          </Link>
        </div>
    );
  }


  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;


  
  return (
      <>
        {images.map((item) => (
          <RoomHero item={item}>
            <Banner title={`${name} Szoba`}>
              <Link to="/rooms" className="btn-primary">
                  Vissza a szobákhoz
              </Link>
            </Banner>
          </RoomHero>
            ))}

        <section className="single-room">

          <div className="single-room-info">
            <article className="desc">
              <h3>Részletek:</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>Információ:</h3>
              <h6>Ár : {price} Ft./Éjszaka</h6>
              <h6>Méret : {size}m<sup>2</sup></h6>
              <h6>
                Maximális létszám : {capacity} személy
              </h6>
              <h6>{pets ? 'Háziállatok engedélyezve' : 'Háziállatok nincsenek engedélyezve'}</h6>
              <h6>{breakfast ? 'Van reggeli' : "Nincs reggeli"}</h6>
            </article>
          </div>
        </section>

        <section className="room-extras">
          <h6>Extrák:</h6>
          <ul className="extras">
            {extras.map((item, index) => (
                <li key={index}> - {item}</li>
            ))}
          </ul>
        </section>
      </>
  );
};

export default SingleRoom;