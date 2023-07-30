import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth } from './context/AuthContext'
import { Bookings } from './context/BookingContext'
import { Room } from './context/RoomContext'
import { RoomType } from './context/RoomTypeContext'
import { Users } from './context/UserContext'
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Auth>
    <Users>
        <RoomType>
            <Room>
                <Bookings>
            <BrowserRouter>

                <App />

            </BrowserRouter>
            </Bookings>
                    </Room>
                </RoomType>
            </Users>
        </Auth>
);