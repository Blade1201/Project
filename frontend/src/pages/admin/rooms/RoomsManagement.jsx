import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RoomContext } from '../../../context/RoomContext';
import { RoomTypeContext } from '../../../context/RoomTypeContext';
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";

const RoomsManagement = () => {
    const { roomTypes } = useContext(RoomTypeContext);
    const { rooms } = useContext(RoomContext)
    const navigate = useNavigate();


    const handleChangeRoomType = (id) => {
        navigate(`/adminpage/roomtypes/modifications/${id}`)
    }

    const handleChangeRoom = (id) => {
        navigate(`/adminpage/rooms/modifications/${id}`)
    }


    return (
        <>
            <Hero>
                <Banner title="Szobák kezelése">
                    <Link to="/adminpage" className="btn-primary">
                        Vissza az adminfelületre
                    </Link>
                </Banner>
            </Hero>

                <div>
                    <h2 style={{ textAlign: "center", marginTop: "2rem" }}>Szobák</h2>
                    <div>
                        <table style={{ maxWidth: "100%", textAlign: "center"}}>
                            <thead >
                                <tr>
                                    <th style={{ width: "3%" }}>ID</th>
                                    <th style={{ width: "10%" }}>Szobatípus</th>
                                    <th style={{ width: "40%" }}>Leírása</th>
                                    <th style={{ width: "5%" }}>Férőhely</th>
                                    <th style={{ width: "7%" }}>Ára</th>
                                    <th style={{ width: "18%" }}></th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    roomTypes.map((value, index) =>
                                        <tr key={index} >
                                            <td>{value.room_type_id}</td>
                                            <td>{value.room_type_name}</td>
                                            <td style={{ textAlign: "justify" }}>{value.description}</td>
                                            <td>{value.space}</td>
                                            <td >{value.price_night} Ft/éjszaka</td>

                                            <td><button style={{ marginLeft: "auto", marginRight: "auto", 
                    padding: "10px", backgroundColor: "blue", color: "white", border: "medium", borderRadius: "4px", cursor: "pointer", display: "block", float: "left" }} onClick={() => handleChangeRoomType(value.room_type_id)} >Módosítás</button></td>

                                        </tr>
                                    )
                                }

                            </tbody>

                        </table>
                    </div>
                </div>

                    <h2 style={{ textAlign: "center", marginTop: "4rem" }}>Szobatípusok</h2>
                    <div style={{ display: "flex", justifyContent: "center", marginBottom: "6rem" }}>
                        <table style={{ textAlign: "center", lineHeight: "2rem", width: "22%" }}>
                            <thead >
                                <tr>
                                    <th style={{ width: "1%" }}> ID</th>
                                    <th style={{ width: "40%" }}> Szobaszám</th>
                                    <th style={{ width: "100%" }}> Szobatípus</th>
                                </tr>
                            </thead>

                            <tbody>

                                {
                                    rooms.map((value, index) =>
                                        <tr key={index} >
                                            <td>{value.room_id}</td>
                                            <td>{value.room_number}</td>
                                            <td>{value.room_type_name}</td>
                                            <td>
                                                <button
                                                style={{ marginLeft: "auto", marginRight: "auto", 
                                                padding: "6px", backgroundColor: "blue", color: "white", border: "medium", borderRadius: "4px", cursor: "pointer", display: "block" }}
                                                onClick={() => handleChangeRoom(value.room_id)} >Módosítás</button>
                                            </td>
                                        </tr>
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
        </>
    )
}

export default RoomsManagement;