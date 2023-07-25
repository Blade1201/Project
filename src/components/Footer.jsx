import React from "react";
import { Link } from 'react-router-dom';
import Debit_Card from "../images/debit-card.jpg";
import { FaClock, FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
    <footer>
                    <div className="col-md-4 col-xs-6">
                            <h3 className="footer-title">Lépjen velünk kapcsolatba</h3>
                            <hr />
                            <ul className="footer-contact">
                                <li>
                                    <FaMapMarker /> 4400 Nyíregyháza Böszörményi út 15.
                                </li>
                                <li>
                                    <a style={{ color: "black", textDecoration: "none" }} href="tel:+36201186170">
                                        <FaPhone /> +36 20 118 6170
                                    </a>
                                </li>
                                <li >
                                    <a style={{ color: "black", textDecoration: "none" }} href="mailto: hopstophotel@gmail.com">
                                        <FaEnvelope /> hopstophotel@gmail.com
                                    </a>
                                </li>
                                <li>
                                <FaClock /> 0-24h
                                </li>
                            </ul>
                    </div>
                    <div className="col-md-4 col-xs-6">
                            <h3 className="footer-title">Információk</h3>
                            <hr />
                            <div style={{display: "inline-block"}}>
                                <Link className='information' to="adatkezelesi_tajekoztato" target='_top'>
                                    <p>Adatkezelési tájékoztató</p>
                                </Link>
                                <Link className='information' to="altalanos_szerzodesi_feltetelek" target='_top'>
                                    <p>Általános Szerződési Feltételek</p>
                                </Link>
                                <Link className='information' to="gyakori_kerdesek_es_valaszok" target='_top'>
                                    <p>Gyakori kérdések és válaszok</p>
                                </Link>
                            </div>
                    </div>
                    <div className="col-md-4 col-xs-6">
                            <h3 className="footer-title">Hopstop hotel Nyíregyháza</h3>
                            <hr />
                            <img src={Debit_Card} alt="szepkartya" style={{ maxWidth: "60%", height: "auto", paddingTop: "1rem" }} />
                    </div>
                    <p style={{color: "white", paddingTop: "15rem"}}> &copy; {year} Minden jog fenntartva.</p>
    </footer>
</>
  );
}

export default Footer;