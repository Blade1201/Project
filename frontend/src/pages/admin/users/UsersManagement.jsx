import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../../context//UserContext';
import Swal from "sweetalert2";
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";

const UsersManagement = () => {

    const { users, handleRemove } = useContext(UserContext);
    const navigate = useNavigate();


    const handleChange = (id) => {
        navigate(`/adminpage/users/modifications/${id}`)
    }

    const handleDelete = (id) => {
        handleRemove(id)
    }



    return (
        <>
            <Hero>
                <Banner title="Regisztrált felhasználók">
                    <Link to="/adminpage" className="btn-primary">
                        Vissza az adminfelületre
                    </Link>
                </Banner>
            </Hero>

                <div style={{ marginBottom: "7rem", marginTop: "4rem" }}>
                    <table style={{ maxWidth: '100%', textAlign:"center", display: "block ruby" }}>
                            <tr>
                                <th style={{ width: "2%", }}>ID</th>
                                <th style={{ width: "15%" }}>Név</th>
                                <th style={{ width: "15%" }}>E-mail-cím</th>
                                <th style={{ width: "40%" }}> Lakcím</th>
                                <th style={{ width: "8%" }}>Telefonszám</th>
                                <th style={{ width: "10%" }}>Admin</th>
                                <th style={{ width: "5%" }}></th>
                                <th style={{ width: "5%" }}></th>
                            </tr>

                            {
                                users.map((value, index) =>
                                    <tr key={index}>
                                        <td>{value.user_id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.email}</td>
                                        <td>{value.address}</td>
                                        <td>{value.phone_number}</td>


                                        <td>{value.is_admin ? <input type="checkbox" disabled checked /> : <input type="checkbox" disabled />}</td>
                                        <td><button onClick={() => handleChange(value.user_id)} 
                                        style={{ marginLeft: "auto", marginRight: "auto", 
                                        padding: "10px", backgroundColor: "blue", color: "white", border: "medium", borderRadius: "4px", cursor: "pointer", display: "block" }}
                                        > Módosítás</button></td>

                                        <td>
                                            <button
                                            style={{ marginLeft: "auto", marginRight: "auto", 
                                            padding: "10px", backgroundColor: "red", color: "white", border: "medium", borderRadius: "4px", cursor: "pointer", display: "block" }}
                                                onClick={() => {

                                                    Swal.fire({
                                                        title: 'Biztos a törlésben?',
                                                        text: "A felhasználó véglegesen törölve lesz!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        cancelButtonText: "Mégse",
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Igen, törlés!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            handleDelete(value.user_id);
                                                            Swal.fire({
                                                                title: 'Sikeresen törölte a felhasználót!',
                                                                icon: "success",
                                                                timer: 3000
                                                            }

                                                            )
                                                        }
                                                    })
                                                }}


                                            >
                                                Törlés
                                            </button>
                                        </td>
                                    </tr>
                                )
                            }

                    </table>
                </div>
        </>
    )
}

export default UsersManagement;