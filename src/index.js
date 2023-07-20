import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {RoomProvider} from "./context/Context";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RoomProvider>
        <App />
    </RoomProvider>
);