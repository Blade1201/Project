import React, { useState, useEffect, createContext } from "react";
import axios from "axios";


const RoomListContext = createContext();


const RoomList = ({ children }) => {
    const [rooms, setRooms] = useState([]);
    const [sortedRooms, setSortedRooms] = useState([]);
    const [featuredRooms, setFeaturedRooms] = useState([]);
    const [type, setType] = useState("Összes");
    const [capacity, setCapacity] = useState(1);
    const [price, setPrice] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [minSize, setMinSize] = useState(0);
    const [maxSize, setMaxSize] = useState(0);
    const [breakfast, setBreakfast] = useState(false);
    const [pets, setPets] = useState(false);


    useEffect(() => {
        axios.get("http://localhost:8080/room/rooms").then((response) => {
            const roomsData = formatDate(response.data);
            const featuredRoomsData = roomsData.filter((room) => room.featured === true);

            const maxPriceData = Math.max(...roomsData.map((item) => item.price));
            const maxSizeData = Math.max(...roomsData.map((item) => item.size));

            setRooms(roomsData);
            setFeaturedRooms(featuredRoomsData);
            setSortedRooms(roomsData);
            setPrice(maxPriceData);
            setMaxPrice(maxPriceData);
            setMaxSize(maxSizeData);
        });
    }, []);


    const formatDate = (data) => {
        return data.map((item) => {
            const {
                room_type_id,
                room_type_name,
                slug,
                type,
                description,
                size,
                space,
                price_night,
                pets,
                breakfast,
                featured,
                extras,
                images
            } = item;
            return {
                id: room_type_id,
                name: room_type_name,
                slug,
                type,
                description,
                size: parseInt(size),
                capacity: parseInt(space),
                price: parseFloat(price_night),
                pets: pets === 1,
                breakfast: breakfast === 1,
                featured: featured === 1,
                extras: JSON.parse(extras),
                images: JSON.parse(images)
            };
        });
    };


    const getRoom = (slug) => {
        const tempRooms = [...rooms];
        return tempRooms.find((room) => room.slug === slug);
    };


    const handleChange = (event) => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = event.target.name;


        switch (name) {
            case "type":
                setType(value);
                break;
            case "capacity":
                setCapacity(parseInt(value));
                break;
            case "price":
                setPrice(parseFloat(value));
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

        let tempRooms = [...rooms];


        if (type !== "Összes") {
            tempRooms = tempRooms.filter((room) => room.type === type);
        }


        if (capacity !== 1) {
            tempRooms = tempRooms.filter((room) => room.capacity >= capacity);
        }

        tempRooms = tempRooms.filter((room) => room.price <= price);


        tempRooms = tempRooms.filter((room) => room.size >= minSize && room.size <= maxSize);

        if (breakfast) {
            tempRooms = tempRooms.filter((room) => room.breakfast === true);
        }


        if (pets) {
            tempRooms = tempRooms.filter((room) => room.pets === true);
        }

        setSortedRooms(tempRooms);
    };



    return (
        <RoomListContext.Provider
            value={{
                rooms,
                sortedRooms,
                featuredRooms,
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
            {children}
        </RoomListContext.Provider>
    );
};

export { RoomList, RoomListContext };