import React from "react";
import "../styles/components/roomlist.css";
import Room from "./Room";


const RoomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>Sajnos, nincsenek szobáink a keresendő értékekkel!</h3>
      </div>
    );
  }

  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map((item) => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
}

export default RoomList;