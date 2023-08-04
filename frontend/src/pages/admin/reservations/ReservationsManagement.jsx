import React, { useContext } from 'react';
import { BookingContext } from '../../../context/BookingContext';
import Swal from "sweetalert2";
import moment from "moment";
import 'moment/locale/hu';
import { Link } from 'react-router-dom';
import Hero from "../../../components/Hero";
import Banner from "../../../components/Banner";


const ReservationsManagement = () => {

    const { bookings, handleRemove } = useContext(BookingContext);

    const handleDelete = (id) => {
        handleRemove(id)
    }

    
    return (
        <>
            <Hero>
                <Banner title="Foglalások kezelése">
                    <Link to="/adminpage" className="btn-primary">
                        Vissza az adminfelületre
                    </Link>
                </Banner>
            </Hero>
            
                <div style={{ marginBottom: "7rem", marginTop: "4rem" }}>
                    <table style={{ maxWidth: "100%", textAlign: "center" }}>
                        <thead >
                            <tr>
                                <th style={{ width: "2%" }}>ID</th>
                                <th style={{ width: "6%" }}>Név</th>
                                <th style={{ width: "1%" }}>Szobaszám</th>
                                <th style={{ width: "10%" }}>Szobatípus</th>
                                <th style={{ width: "5%" }}>Érkezés</th>
                                <th style={{ width: "5%" }}>Távozás</th>
                                <th style={{ width: "6%" }}>Éjszakák</th>
                                <th style={{ width: "3%" }}>Végösszeg</th>
                                <th style={{ width: "30%" }}></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                bookings.map((value, index) =>
                                    <tr key={index} >
                                        <td>{value.booking_id}</td>
                                        <td>{value.name}</td>
                                        <td>{value.room_number}</td>
                                        <td>{value.room_type_name}</td>
                                        <td>{moment(value.check_in).format('ll')}</td>
                                        <td>{moment(value.check_out).format('ll')}</td>
                                        <td>{value.night_number}</td>
                                        <td>{value.amount} Ft</td>

                                        <td>
                                            <button
                                                style={{ float: 'left' }}
                                                onClick={() => {
                                                    Swal.fire({
                                                        title: 'Biztos a törlésben?',
                                                        text: "A foglalás véglegesen törölve lesz a rendszerből!",
                                                        icon: 'warning',
                                                        showCancelButton: true,
                                                        cancelButtonText: "Mégse",
                                                        confirmButtonColor: '#3085d6',
                                                        cancelButtonColor: '#d33',
                                                        confirmButtonText: 'Igen, törlés!'
                                                    }).then((result) => {
                                                        if (result.isConfirmed) {
                                                            handleDelete(value.booking_id);
                                                            Swal.fire({
                                                                title: 'Sikeresen törölte a foglalást!',
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
                        </tbody>
                    </table>
                </div>
        </>
    )
}

export default ReservationsManagement;