import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import Logo from '../images/svg/logo.svg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          {/* app logo */}
          <Link to="/">
            <img src={Logo} alt="Reach Resort" />
          </Link>

          {/* navbar toggle button */}
          <button
            type="button"
            className="nav-btn"
            onClick={handleToggle}
          >
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        {/* navbar link */}
        <ul
          className={isOpen ? "nav-links show-nav" : "nav-links"}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/rooms">Rooms</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
