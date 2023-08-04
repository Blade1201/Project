import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { RoomContext } from '../../../context/RoomContext';
import Swal from "sweetalert2";
import axios from 'axios';
import { RoomTypeContext } from '../../../context/RoomTypeContext';
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";

const RoomsModifications = () => {
    const [current, setCurrent] = useState({});
    const [formData, setFormData] = useState(current[0] || {});
    console.log(formData);
    const { id } = useParams();

    const { handleChange: handleModify } = useContext(RoomContext);
    const { roomTypes } = useContext(RoomTypeContext);

    const navigate = useNavigate();

    const handleChange = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = () => {
        if (Object.entries(formData).length === 3 && !isEmpty())
            handleModify(id, formData).then(val => {
                if (val) {
                    navigate("/adminpage/rooms");
                    window.location.reload();
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Sikeres módosítás!",
                        showConfirmButton: false,
                        timer: 4000
                    })
                }
                else {
                    Swal.fire({
                        position: 'center',
                        icon: 'error',
                        title: "Sikertelen módosítás!",
                        text: "A módsoítás közben valamilyen hiba történt.",
                        showConfirmButton: false,
                        timer: 5000
                    })
                }

            })
        else {
            Swal.fire({
                position: 'center',
                icon: 'error',
                title: "Hiba!",
                text: 'Kérjük, az összes mezőt töltse ki!',
                showConfirmButton: false,
                timer: 5000
            })
        }

    }

    const isEmpty = () => {
        return Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value).length !== 3;
    }


    useEffect(() => {
        axios.get(`http://localhost:8080/room/rooms/${id}`)
            .then(({ data }) => {
                setFormData(data[0]);
                setCurrent(data)
            }

            )
            .catch(err => console.log(err));
    }, []);


    return (
        <>
            
            <Hero>
                <Banner title="Szoba módosítása">
                    <Link to="/adminpage/rooms" className="btn-primary">
                        Vissza
                    </Link>
                </Banner>
            </Hero>
        
                <h1 style={{ marginTop: "3rem", textAlign: "center" }}>Módosítandó szobaszám - <i style={{ color: "#434A42", fontSize: 25 }}> {current[0]?.["room_number"]}. szoba </i></h1>
                <div style={{ textAlign: "center" }}>
                    <hr />
                </div>


            <div style={{ marginBottom: "6rem", textAlign: "center" }}>
                <div style={{ margin: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Szobaszám</label>
                <input
                    style={{
                        width: '550px',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    type="number"
                    name="room_number"
                    onChange={(e) => handleChange(e)}
                    value={formData?.room_number || ""}
                    />
                </div>

                <div style={{ margin: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Szobatípus</label>
                    <select
                        name="room_type_id"
                        value={formData.room_type_id}
                        onChange={handleChange}
                        style={{ width: '450px' }}
                    >
                    {roomTypes.map((val, index) => (
                        <option key={index} value={val.room_type_id}>{val.room_type_name}</option>
                    ))}
                    </select>
                </div>

                <br />

                <button
                    onClick={() =>
                        Swal.fire({
                            title: 'Biztos módosítani szeretné?',
                            text: "A módosítás nem visszavonható művelet!",
                            icon: 'warning',
                            showCancelButton: true,
                            cancelButtonText: "Mégse",
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Igen, módosítás!'
                        }).then((result) => {
                            if (result.isConfirmed) {
                                handleSubmit()
                                Swal.fire(
                                    {
                                        title: "Sikeresen módosította a szoba adatait!",
                                        icon: "success",
                                        timer: 3000
                                    }
                                )
                            }
                        })
                    }>Módosítás</button>
            </div>
            </>
    )
}

export default RoomsModifications;