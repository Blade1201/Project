import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { RoomTypeContext } from '../../../context/RoomTypeContext';
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";

const RoomTypeModifications = () => {

    const [current, setCurrent] = useState({});
    const [formData, setFormData] = useState(current[0] || {});
    const { id } = useParams();

    const { handleChange: handleModify } = useContext(RoomTypeContext);

    const navigate = useNavigate();


    const handleChange = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }

    
    const handleSubmit = () => {
        if (Object.entries(formData).length === 5 && !isEmpty())
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
        console.log(Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value));
        return Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value).length !== 5;

    }


    useEffect(() => {
        axios.get(`http://localhost:8080/room/roomtypes/${id}`)
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
                <Banner title="Szobatípus módosítása">
                    <Link to="/adminpage/rooms" className="btn-primary">
                        Vissza
                    </Link>
                </Banner>
            </Hero>

                <h1 style={{ marginTop: "3rem", textAlign: "center" }}>Módosítandó szoba - <i style={{ color: "#434A42", fontSize: 25 }}> {current[0]?.["room_type_name"]} </i></h1>
                <div style={{ textAlign: "center" }}>
                    <hr />
                </div>

            <div style={{  marginBottom: "7rem",marginTop: "3rem",width: "30%", padding: "20px", backgroundColor: "#f5f5f5",borderRadius: "10px",
        display: "flex", flexDirection: "column", textAlign: "center", marginLeft: "auto", marginRight: "auto"}} >

                <div style={{ margin: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Szobatípus megnevezése</label>
                <input
                    style={{
                        width: '350px',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    type="text"
                    name="room_type_name"
                    onChange={(e) => handleChange(e)}
                    value={formData?.room_type_name || ""}
                    />
                </div>


                <div style={{ margin: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Leírás</label>
                <textarea
                    style={{
                        width: '92%',
                        height: '100px',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                        resize: "none"
                    }}
                    type="text"
                    name="description"
                    onChange={(e) => handleChange(e)}
                    value={formData?.description || ""}
                    />
                </div>


                <div style={{ margin: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Férőhely</label>
                <input
                    style={{
                        width: '300px',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    type="number"
                    name="space"
                    onChange={(e) => handleChange(e)}
                    value={formData?.space || ""}
                    />
                </div>


                <div style={{ margin: '1rem' }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Ár/éjszaka</label>
                <input
                    style={{
                        width: '300px',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    type="number"
                    name="price_night"
                    onChange={(e) => handleChange(e)}
                    value={formData?.price_night || ""}
                    />
                </div>

                <button
                style={{ marginLeft: "auto", marginRight: "auto", 
                padding: "10px", backgroundColor: "blue", color: "white", border: "medium", borderRadius: "4px", cursor: "pointer", display: "block", marginTop: "1rem" }}
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
                                        title: "Sikeresen módosította a szobatípust!",
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

export default RoomTypeModifications;