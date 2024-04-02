import React, { useContext } from 'react';
import { RoomListContext } from '../context/RoomListContext';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';


const RoomContainer = () => {
    const context = useContext(RoomListContext);
    const { sortedRooms, rooms } = context;

    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
    );
};

export default RoomContainer;