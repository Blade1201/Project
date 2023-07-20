import React, { useState, useEffect } from "react";
import items from "../data/data";

const RoomContext = React.createContext();

const RoomProvider = (props) => {
    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [featuredRooms, setFeaturedRooms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [type, setType] = useState("all");
    const [capacity, setCapacity] = useState(1);
    const [price, setPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [minSize, setMinSize] = useState(0);
    const [maxSize, setMaxSize] = useState(0);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);

    useEffect(() => {
        // getData
        let roomsData = formatDate(items);
        let featuredRoomsData = roomsData.filter((room) => room.featured === true);

        let maxPriceData = Math.max(...roomsData.map((item) => item.price));
        let maxSizeData = Math.max(...roomsData.map((item) => item.size));

        setRooms(roomsData);
        setFeaturedRooms(featuredRoomsData);
        setSortedRooms(roomsData);
        setLoading(false);
        setPrice(maxPriceData);
        setMaxPrice(maxPriceData);
        setMaxSize(maxSizeData);
    }, []);

    const formatDate = (items) => {
        let tempItems = items.map((item) => {
            let id = item.sys.id;
            let images = item.fields.images.map((image) => image.fields.file.url);

            let room = { ...item.fields, images, id };
            return room;
        });
        return tempItems;
    };

    const getRoom = (slug) => {
        let tempRooms = [...rooms];
        return tempRooms.find((room) => room.slug === slug);
    };

    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;

        // Updating state based on the name
        switch (name) {
            case "type":
                setType(value);
                break;
            case "capacity":
                setCapacity(parseInt(value));
                break;
            case "price":
                setPrice(parseInt(value));
                break;
            case "minSize":
                setMinSize(parseInt(value));
                break;
            case "maxSize":
                setMaxSize(parseInt(value));
                break;
            case "breakfast":
                setBreakfast(value);
                break;
            case "pets":
                setPets(value);
                break;
            default:
                break;
        }
    };

    useEffect(() => {
        filterRooms();
    }, [type, capacity, price, minSize, maxSize, breakfast, pets]);

    const filterRooms = () => {
        // all the room
        let tempRooms = [...rooms];

        // filter by type
        if (type !== "all") {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }

        // filter by capacity
        if (capacity !== 1) {
            tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
        }

        // filter by price
        tempRooms = tempRooms.filter((room) => room.price <= price);

        // filter bt size
        tempRooms = tempRooms.filter(
            (room) => room.size >= minSize && room.size <= maxSize
        );

        // filter by breakfast
        if (breakfast) {
            tempRooms = tempRooms.filter((room) => room.breakfast === true);
        }

        // filter by pets
        if (pets) {
            tempRooms = tempRooms.filter((room) => room.pets === true);
        }

        // change state
        setSortedRooms(tempRooms);
    };

    return (
        <RoomContext.Provider
            value={{
                rooms,
                sortedRooms,
                featuredRooms,
                loading,
                type,
                capacity,
                price,
                minPrice,
                maxPrice,
                minSize,
                maxSize,
                breakfast,
                pets,
                getRoom,
                handleChange,
            }}
        >
            {props.children}
        </RoomContext.Provider>
    );
};


export { RoomProvider, RoomContext };
