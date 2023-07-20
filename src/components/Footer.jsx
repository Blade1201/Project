import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Hopstop</h2>
      <p>
        &copy; <span>{year}</span> Minden jog fenntartva.
      </p>
    </footer>
  );
}

export default Footer;