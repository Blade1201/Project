import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { UserContext } from '../../../context/UserContext';
import Swal from "sweetalert2";
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";

const UsersModifications = () => {
    const [current, setCurrent] = useState({});
    const [formData, setFormData] = useState(current[0] || {});

    const { id } = useParams();

    const { handleChange: handleModify } = useContext(UserContext);

    const navigate = useNavigate();


    const handleChange = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value });
    }


    const handleSubmit = () => {
        if (Object.entries(formData).length === 7 && !isEmpty())
            handleModify(id, formData).then(val => {
                if (val) {
                    navigate("/adminpage/users");
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
        return Object.entries(formData).filter(([key, value]) => typeof value === "string" ? value.trim().length !== 0 : value).length !== 7;

    }


    useEffect(() => {
        axios.get(`http://localhost:8080/user/users/${id}`)
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
                <Banner title="Felhasználó módosítása">
                    <Link to="/adminpage/users" className="btn-primary">
                        Vissza
                    </Link>
                </Banner>
            </Hero>

                <h1 style={{ marginTop: "4rem" }}>Módosítás - <i style={{ color: "#434A42" }}>{current[0]?.name}</i></h1>
                <div style={{ textAlign: "center" }}>
                    <hr />
                </div>

                <div style={{ margin: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>E-mail</label>
                <input
                    style={{
                        width: '550px',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    type="email"
                    name="email"
                    onChange={(e) => handleChange(e)}
                    value={formData?.email || ""}
                />
            </div>

            <div style={{ margin: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Név</label>
                <input
                    style={{
                        width: '550px',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    type="text"
                    name="name"
                    onChange={(e) => handleChange(e)}
                    value={formData?.name || ""}
                />
            </div>

            <div style={{ margin: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Lakcím</label>
                <input
                    style={{
                        width: '550px',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    type="text"
                    name="address"
                    onChange={(e) => handleChange(e)}
                    value={formData?.address || ""}
                />
            </div>

            <div style={{ margin: '1rem' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem' }}>Telefonszám</label>
                <input
                    style={{
                        width: '550px',
                        padding: '0.5rem',
                        border: '1px solid #ccc',
                        borderRadius: '4px',
                    }}
                    type="text"
                    name="phone_number"
                    onChange={(e) => handleChange(e)}
                    value={formData?.phone_number || ""}
                />
            </div>

                <div >
                    <input id="user" type="radio" name="is_admin" value="0" checked={formData?.is_admin === "0"} onChange={(e) => handleChange(e)} />
                    <label style={{ fontFamily: 'Rozha One' }} htmlFor="user">Felhasználó</label>
                    <input style={{ marginLeft: 70 }} id="admin" type="radio" name="is_admin" value="1" checked={formData?.is_admin === "1"} onChange={(e) => handleChange(e)} />
                    <label style={{ fontFamily: 'Rozha One' }} htmlFor="admin">Adminisztrátor</label>
                </div>

                

                <button
                    style={{ marginBottom: "7rem" }}
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
                                        title: "Sikeresen módosította a felhasználót!",
                                        icon: "succes",
                                        timer: 3000
                                    }
                                )
                            }
                        })}
                >
                    Módosítás
                </button>
            </>
    )
}


export default UsersModifications;