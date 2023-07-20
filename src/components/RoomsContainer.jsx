import React, { useContext } from 'react';
import { RoomContext } from '../context/Context';
import Loadings from './Loading';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';

const RoomContainer = () => {
    const context = useContext(RoomContext);
    const { loading, sortedRooms, rooms } = context;

    if (loading) {
        return <Loadings />;
    }

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
};

export default RoomContainer;
