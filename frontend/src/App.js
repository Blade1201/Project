import React, { useContext, useEffect } from "react";
import "./styles/style.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FAQ from "./pages/FAQ";
import Reservations from "./pages/Reservations";
import Register from "./pages/Register";
import Login from "./pages/Login";
import axios from 'axios';
import { RoomTypeContext } from './context/RoomTypeContext';
import { RoomContext } from "./context/RoomContext";
import { BookingContext } from './context/BookingContext';
import { UserContext } from './context/UserContext';

const App = () => {
  const { handleSet: handleSetUsers } = useContext(UserContext);
  const { handleSet: handleSetRoomTypes } = useContext(RoomTypeContext);
  const { handleSet: handleSetRooms } = useContext(RoomContext);
  const { handleSet: handleSetBooking } = useContext(BookingContext);

  useEffect(() => {
    const fetchData = async () => {
      const [roomtypes, rooms, users, reservations] = await Promise.all([
        axios.get('http://localhost:8080/room/roomtypes', {
          headers: {
            'Access-Control-Allow-Origin': "localhost:3000"
          }
        }),
        axios.get('http://localhost:8080/room/rooms', {
          headers: {
            'Access-Control-Allow-Origin': "localhost:3000"
          }
        }),
        axios.get('http://localhost:8080/user/users', {
          headers: {
            'Access-Control-Allow-Origin': "localhost:3000"
          }
        }),
        axios.get('http://localhost:8080/reservation/reservations', {
          headers: {
            'Access-Control-Allow-Origin': "localhost:3000"
          }
        }),
      ]);
      handleSetRoomTypes(roomtypes.data);
      handleSetRooms(rooms.data);
      handleSetUsers(users.data);
      handleSetBooking(reservations.data);
    };
    fetchData();
  }, []);

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/reservations" Component={Reservations} />
          <Route path="/attractions" Component={Attractions} />
          <Route path="/contact" Component={Contact} />
          <Route path="/privacy_policy" Component={PrivacyPolicy} />
          <Route path="/terms_and_conditions" Component={TermsAndConditions} />
          <Route path="/frequently_asked_questions" Component={FAQ} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="*" Component={Error} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;