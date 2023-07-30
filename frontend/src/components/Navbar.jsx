import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaAlignRight } from 'react-icons/fa';
import Logo from '../images/logo/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { currentUser, logout } = useContext(AuthContext);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">

          <Link to="/"> <img src={Logo} alt="Hopstop" /></Link>


          <button
            type="button"
            className="nav-btn"
            onClick={handleToggle}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>


        <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
          <li>
            <Link to="/">Kezdőlap</Link>
          </li>
          <li>
            <Link to="/reservations">Szobák</Link>
          </li>
          <li>
            <Link to="/attractions">Látnivalók</Link>
          </li>
          <li>
            <Link to="/contact">Kapcsolat</Link>
          </li>

          <li>
          {
            currentUser !== null ? <p style={{ color: "black", margin: "0.1rem", padding: "0.5rem 0", marginLeft: "19rem"}}>Bejelentkezve:  {currentUser['name']}</p> : ""
          }
          </li>

          <li>

          {
            currentUser === null
                ?
                <>
                  <Link to="/login" style={{ marginLeft: "48rem" }}>Bejelentkezés</Link>
                </>
                : <Link to="/login" onClick={() =>  logout()} style={{ marginLeft: "17rem" }}>Kijelentkezés</Link>
              }

          </li>
        </ul>
          
        </div>

    </nav>
  );
};

export default Navbar;
