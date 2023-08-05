import React, {useContext} from 'react';
import "../styles/components/featuredrooms.css";
import {RoomListContext} from '../context/RoomListContext';
import Title from './Title';
import Room from './Room';


const FeaturedRooms = () => {
    const context = useContext(RoomListContext);
    const { featuredRooms: rooms } = context;

    
    const roomComponents = rooms.map((room) => (
        <Room key={room.id} room={room} />
    ));


    return (
        <section className="featured-rooms">
            <Title title="Kiemelt szobák" />

            <div className="featured-rooms-center">
                {roomComponents}
            </div>
        </section>
    );
};

export default FeaturedRooms;
