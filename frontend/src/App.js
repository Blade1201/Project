import React, { useContext, useEffect } from "react";
import "./styles/style.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Footer from "./components/Footer";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FAQ from "./pages/FAQ";
import Reservations from "./pages/Reservations";
import Register from "./pages/Register";
import AdminPage from "./pages/admin/AdminPage";
import UsersManagement from "./pages/admin/users/UsersManagement";
import UsersModifications from "./pages/admin/users/UsersModifications";
import ReservationsManagement from "./pages/admin/reservations/ReservationsManagement";
import RoomsManagement from "./pages/admin/rooms/RoomsManagement";
import RoomsModifications from "./pages/admin/rooms/RoomsModifications";
import RoomTypeModifications from "./pages/admin/rooms/RoomTypeModifications";
import Login from "./pages/Login";
import axios from 'axios';
import { AuthContext } from "./context/AuthContext";
import { RoomTypeContext } from './context/RoomTypeContext';
import { RoomContext } from "./context/RoomContext";
import { BookingContext } from './context/BookingContext';
import { UserContext } from './context/UserContext';



const App = () => {
  const { handleSet: handleSetUsers } = useContext(UserContext);
  const { handleSet: handleSetRoomTypes } = useContext(RoomTypeContext);
  const { handleSet: handleSetRooms } = useContext(RoomContext);
  const { handleSet: handleSetBooking } = useContext(BookingContext);

  const { currentUser } = useContext(AuthContext);


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
          <Route path="/rooms/" Component={Room} />
          <Route path="/rooms/:slug" Component={SingleRoom} />
          <Route path="/reservations" Component={Reservations} />
          <Route path="/attractions" Component={Attractions} />
          <Route path="/contact" Component={Contact} />
          <Route path="/privacy_policy" Component={PrivacyPolicy} />
          <Route path="/terms_and_conditions" Component={TermsAndConditions} />
          <Route path="/frequently_asked_questions" Component={FAQ} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />

          {
              currentUser != null && currentUser['isAdmin'] === 1 && (
                <>
                  <Route path='/adminpage' element={<AdminPage />} />
                  <Route path='/adminpage/users' element={<UsersManagement />} />
                  <Route path='/adminpage/users/modifications/:id' element={<UsersModifications />} />

                  <Route path='/adminpage/rooms' element={<RoomsManagement />} />
                  <Route path='/adminpage/roomtypes/modifications/:id' element={<RoomsModifications />} />
                  <Route path='/adminpage/rooms/modifications/:id' element={<RoomTypeModifications />} />

                  <Route path='/adminpage/reservations' element={<ReservationsManagement />} />
                </>
              )
            }

          <Route path="*" Component={Error} />
        </Routes>

        <Footer />
      </>
  );
}

export default App;