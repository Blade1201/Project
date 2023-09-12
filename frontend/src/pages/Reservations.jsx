import React, { useContext, useEffect, useState } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from "react-router-dom";
import { RoomTypeContext } from '../context/RoomTypeContext';
import { AuthContext } from '../context/AuthContext';
import moment from "moment";
import 'moment/locale/hu';
import Swal from 'sweetalert2';
import axios from "axios";



const Reservations = () => {

    moment().locale('hu');

    const { roomTypes } = useContext(RoomTypeContext);
    const { currentUser } = useContext(AuthContext);

    const [availableRooms, setAvailableRooms] = useState([]);

    const [checkInDate, setCheckInDate] = useState(moment());
    const [checkOutDate, setCheckOutDate] = useState(moment().add(1, 'days'));
    const [type, setType] = useState('');
    const [show, setShow] = useState(false);

    const nightNumber = Math.round((Date.parse(checkOutDate) - Date.parse(checkInDate)) / 86400000)

    
    const handleCheckInDateChange = (newValue) => {
        setCheckInDate(newValue);
        setCheckOutDate(newValue.clone().add(1, 'days'));
      };
      

      const handleCheckOutDateChange = (newValue) => {
        setCheckOutDate(newValue);
      };


    const handleChangeRoomType = (event) => {
        setType(event.target.value);
    };


    const handleSubmit = () => {
        axios.post("http://localhost:8080/reservation/reservations/availablerooms", { type, checkInDate, checkOutDate }, {
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            if (res.status === 200) {
                setAvailableRooms(res.data)
            }
        }).catch((err) => {
            Swal.fire(
                {
                    icon: "warning",
                    title: "Sajnos nincs szabad szoba!",
                    text: "Kérem, válasszon másik időintervallumot!",
                    confirmButtonText: 'Megértettem!'
                }
            )
        })
    };



    const reservation = (roomId, priceNight) => {
        if (currentUser === null) {
            Swal.fire({
                position: 'center',
                icon: 'warning',
                title: "Sikertelen foglalás!",
                text: 'Jelentkezzen be a fiókjába!',
                showConfirmButton: false,
                timer: 5000
            })
        } else {
            const userId = currentUser['userId'];
            const email = currentUser['email'];
            const amount = priceNight * nightNumber;
            axios.post("http://localhost:8080/reservation/reservations", { email, userId, roomId, checkInDate, checkOutDate, nightNumber, amount }, {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res) => {
                if (res.status === 201) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Sikeres foglalás!",
                        text: 'Hotelünk e-mail-ben visszaigazolja a foglalást',
                        showConfirmButton: false,
                        timer: 5000
                    })
                }
            })
        }
    }


   
    const AdapterDays = {
        formatDate: (date) => {
            return moment(date).format('YYYY-MM-DD');
          },
          parseDate: (str) => {
            return moment(str);
          },
      };
      
      const DatePicker = ({ minDate, label, value, onChange }) => {
        const handleChange = (e) => {
          const { value } = e.target;
          onChange(AdapterDays.parseDate(value));
        };
      
        return (
          <label>
            {label}
            <input type="date" min={AdapterDays.formatDate(minDate)} value={AdapterDays.formatDate(value)} onChange={handleChange} />
          </label>
        );
      };
      
      
    useEffect(() => {
        setCheckOutDate(moment(new Date()).add(1, 'days').format());
    }, []);
    

    return (

        <>

            <Hero>
                <Banner title="Foglalás">
                    <Link to="/" className="btn-primary">
                        Kezdőoldalra
                    </Link>
                </Banner>
            </Hero>

            <div style={{ marginTop: 30,marginBottom: "18.1rem" }}>
                <form onSubmit={handleSubmit} style={{ textAlign: 'center', marginBottom: 30 }}>
                <div style={{ height: 70, display: 'flex', gap: 20, alignItems: 'center', marginLeft: "45rem"}}>
                    <DatePicker
                        minDate={new Date()}
                        label="Érkezés"
                        value={checkInDate}
                        onChange={handleCheckInDateChange}
                        />

                    <DatePicker
                        minDate={checkInDate}
                        label="Távozás"
                        value={checkOutDate}
                        onChange={handleCheckOutDateChange}
                        />
                <p style={{ paddingTop: 12, width: 'auto' }}> {nightNumber} éjszaka</p>
                </div>

            <div style={{ margin: '16px', width: '250px', marginLeft: "51rem"}}>
            <label id="demo-simple-select-label">Szobatípus</label>
            <select
                id="demo-simple-select"
                value={type}
                onChange={handleChangeRoomType}
                style={{
                    display: 'block',
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    textAlign: "center",
                    }}
                    >
            <option value="">
                <em>nincs kiválasztva</em>
            </option>
                {roomTypes.map((val, index) => (
                <option key={index} value={val.room_type_name}>
                    {val.room_type_name}
                </option>
                ))}
            </select>
            </div>

                    <button type='button' onClick={() => { setShow(true); handleSubmit() }} style={{ margin: "15", marginRight: "2rem" }}>
                        Szabad szobák keresése
                    </button>
                </form>
                <hr />
                <div className="row">
                    {
                        (show && (
                            availableRooms.map((value, index) =>

                                <div className="card" style={{ maxWidth: "100%", margin: 2, padding: 2, backgroundColor: "#F4F1DE", borderColor: "#434A42", borderRadius: 10, borderWidth: 7, borderStyle: "double", marginBottom: "-14.4rem" }} key={index}>

                                    <dic className="card-content">

                                        <p style={{ fontWeight: 'bold', fontSize: "15px" }}>
                                            Foglalni kívánt időszak: {moment(checkInDate).format('LL')}  - {moment(checkOutDate).format('LL')}
                                        </p>

                                        <p style={{ textAlign: "center", fontWeight: "bold" }}>
                                            {value.room_type_name}
                                        </p>

                                        <hr style={{ margin: 'auto', padding: 15 }} />

                                        <p textAlign={'justify'} >
                                            {value.description}
                                        </p>

                                        <p style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "16px" }}>
                                            Ágyak: { value.space}
                                        </p>

                                        <p style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "16px" }}>
                                            Maximális létszám:  {value.space}
                                        </p>

                                        <p style={{ color: "rgba(0, 0, 0, 0.6)", fontSize: "16px" }}>
                                            Szobaár: {value.price_night} Ft. / Éjszakától
                                        </p>

                                        <p style={{ textAlign: "center", color: "red" }}>
                                            Fizetendő összeg: {value.price_night * nightNumber} Ft
                                        </p>

                                    </dic>

                                    <div className="card-actions">
                                        <button onClick={() => reservation(value.room_id, value.price_night)}>Foglalás</button>
                                    </div>
                                </div>
                            )
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Reservations;