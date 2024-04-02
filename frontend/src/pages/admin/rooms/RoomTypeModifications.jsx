import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import Swal from "sweetalert2";
import { RoomTypeContext } from '../../../context/RoomTypeContext';
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";

const RoomTypeModifications = () => {

    const [current, setCurrent] = useState({});
    const [formData, setFormData] = useState({});
    const [isSuccessful, setIsSuccessful] = useState(false);
    const { id } = useParams();
    
    const { handleChange: handleModify } = useContext(RoomTypeContext);
    const navigate = useNavigate();

    const handleChange = ({ target: { value, name } }) => {
        if (formData[name] !== value) {
            setFormData({ ...formData, [name]: value });
        }
    }

    const handleSubmit = () => {
        const hasChanges = Object.keys(formData).some(key => formData[key] !== current[0][key]);
        if (hasChanges) {
            handleModify(id, formData)
                .then(success => {
                    if (success) {
                        axios.get(`http://localhost:8080/room/roomtypes/${id}`)
                            .then(({ data }) => {
                                setFormData(data[0]);
                                setCurrent(data);
                                setIsSuccessful(true);
                                Swal.fire({
                                    position: 'center',
                                    icon: 'success',
                                    title: "Sikeres módosítás!",
                                    showConfirmButton: false,
                                    timer: 4000
                                });
                            })
                            .catch(error => {
                                console.error("Hiba az adatbeküldés során:", error);
                            });
                    } else {
                        Swal.fire({
                            position: 'center',
                            icon: 'error',
                            title: "Sikertelen módosítás!",
                            text: "A módosítás közben valamilyen hiba történt.",
                            showConfirmButton: false,
                            timer: 5000
                        });
                    }
                })
                .catch(error => {
                    console.error("Hiba lépett fel az adatmódosítás közben:", error);
                });
        } else {
            Swal.fire({
                position: 'center',
                icon: 'info',
                title: "Nincs változás!",
                text: 'Nem történt változás a szobatípusban.',
                showConfirmButton: false,
                timer: 5000
            });
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/room/roomtypes/${id}`)
            .then(({ data }) => {
                setFormData(data[0]);
                setCurrent(data)
            })
            .catch(err => console.log(err));
    }, []);


    useEffect(() => {
        if (isSuccessful) {
            navigate("/adminpage/rooms");
            window.location.reload();
        }
    }, [isSuccessful, navigate]);



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

            <div style={{
                marginBottom: "7rem", marginTop: "3rem", width: "30%", padding: "20px", backgroundColor: "#f5f5f5", borderRadius: "10px",
                display: "flex", flexDirection: "column", textAlign: "center", marginLeft: "auto", marginRight: "auto"
            }} >

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Szobatípus megnevezése</label>
                    <input
                        style={{
                            width: '250px',
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

                <div>
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

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Férőhely</label>
                    <input
                        style={{
                            width: '250px',
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

                <div>
                    <label style={{ display: 'block', marginBottom: '0.5rem' }}>Ár/éjszaka</label>
                    <input
                        style={{
                            width: '250px',
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
                    style={{
                        marginLeft: "auto", marginRight: "auto",
                        padding: "10px", backgroundColor: "green", color: "white", border: "medium", borderRadius: "4px", cursor: "pointer", display: "block", marginTop: "1rem"
                    }}
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
                                handleSubmit();
                            }
                        })
                    }>Módosítás</button>
            </div>
        </>
    )
}

export default RoomTypeModifications;