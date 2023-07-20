import React, {useContext} from 'react';
import {RoomContext} from '../context/Context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

const FeaturedRooms = () => {
    const context = useContext(RoomContext);
    const { loading, featuredRooms: rooms } = context;

    const roomComponents = rooms.map((room) => (
        <Room key={room.id} room={room} />
    ));

    return (
        <section className="featured-rooms">
            <Title title="featured rooms" />

            <div className="featured-rooms-center">
                {loading ? <Loading /> : roomComponents}
            </div>
        </section>
    );
};

export default FeaturedRooms;
