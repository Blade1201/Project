import React, {useContext} from 'react';
import {Link, useParams} from 'react-router-dom';
import {RoomContext} from '../context/Context';
import Banner from '../components/Banner';
import Hero from "../components/Hero";

const SingleRoom = () => {
  const { slug } = useParams();

  const context = useContext(RoomContext);
  const { getRoom } = context;
  const room = getRoom(slug);

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
        <Hero>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Vissza a szobákhoz
            </Link>
          </Banner>
        </Hero>

        <section className="single-room">
          <div className="single-room-images">
            {images.map((item, index) => (
                <img key={index} src={item} alt={name} />
            ))}
          </div>

          <div className="single-room-info">
            <article className="desc">
              <h3>Részletek:</h3>
              <p>{description}</p>
            </article>

            <article className="info">
              <h3>Információ:</h3>
              <h6>Ár : ${price}</h6>
              <h6>Méret : {size} SQFT</h6>
              <h6>
                Maximális létszáma :{' '}
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>{pets ? 'Állatok engedélyezve' : 'Állatok nincsenek engedélyezve'}</h6>
              <h6>{breakfast && 'Nincs reggeli'}</h6>
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
