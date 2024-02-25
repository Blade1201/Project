import React, { useState, useContext, useEffect, useRef } from 'react';
import "../styles/components/navbar.css";
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaAlignRight } from 'react-icons/fa';
import Logo from '../images/logo/logo.png';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentUser, logout } = useContext(AuthContext);
  const navbarRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  return (
    <nav className="navbar" ref={navbarRef}>
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/"><img src={Logo} alt="Hopstop" /></Link>
          <button type="button" className="nav-btn" onClick={handleToggle}>
            <FaAlignRight className="nav-icon" />
          </button>

          <ul className={isOpen ? "nav-links show-nav" : "nav-links"}>
            <li><Link to="/">Kezdőlap</Link></li>
            <li><Link to="/rooms">Szobák</Link></li>
            <li><Link to="/reservations">Foglalás</Link></li>
            <li><Link to="/attractions">Látnivalók</Link></li>
            <li><Link to="/contact">Kapcsolat</Link></li>
            {currentUser != null && currentUser.isAdmin === 1 && (
              <li><Link className='admin-btn' to="/adminpage">Admin Felület</Link></li>
            )}
             <li className="user-buttons">
              <div>
                {currentUser !== null ? (
                  <p>Bejelentkezve: {currentUser.name}</p>
                ) : null}
              </div>
              <div>
                {currentUser === null ? (
                  <Link to="/login">Bejelentkezés</Link>
                ) : (
                  <Link to="/login" onClick={() => logout()}>Kijelentkezés</Link>
                )}
              </div>
            </li>
          </ul>
        </div>
      
      </div>
    </nav>
  );
};

export default Navbar;
