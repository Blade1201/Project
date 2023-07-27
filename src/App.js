import React from "react";
import "./styles/style.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Attractions from "./pages/Attractions";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FAQ from "./pages/FAQ";


const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/rooms/" Component={Room} />
          <Route path="/rooms/:slug" Component={SingleRoom} />
          <Route path="/attractions" Component={Attractions} />
          <Route path="/contact" Component={Contact} />
          <Route path="/privacy_policy" Component={PrivacyPolicy} />
          <Route path="/terms_and_conditions" Component={TermsAndConditions} />
          <Route path="/frequently_asked_questions" Component={FAQ} />
          <Route path="*" Component={Error} />
        </Routes>
        <Footer />
      </>
  );
}

export default App;