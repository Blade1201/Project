import React from "react";
import "./styles/style.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Attractions from "./components/Attractions";


const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/rooms/" Component={Room} />
          <Route path="/rooms/:slug" Component={SingleRoom} />
          <Route path="/attractions" Component={Attractions} />
          <Route path="*" Component={Error} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;