import React from "react";
import "./styles/style.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  return (
    <>

    <Navbar />

    <Routes>

      <Route path="/" element ={Home} />
      <Route path="/rooms/" element={Room} />
      <Route path="/rooms/:slug" element={SingleRoom} />
      <Route element={Error} />
    
    </Routes>

    <Footer />

  </>
  );
}

export default App;