import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import { FaClock, FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';
import Hero from "../components/Hero";
import Banner from "../components/Banner";

const Contact = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [show, setShow] = useState(false);
  const [showError, setShowError] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      setShowError(false);
    }, 6000);
  }, [show, showError]);


  const validate = () => {
    let errors = {};
    if (name.length === 0) {
      errors.name = 'Kérjük, töltse ki a mezőt!';
    }
    if (email.length === 0) {
      errors.email = 'Kérjük, töltse ki a mezőt!';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Az e-mail-cím nem megfelelő!';
    }
    if (message.length === 0) {
      errors.message = 'Kérjük, töltse ki a mezőt!';
    }
    return errors;
  };


  const handleClick = () => {
    const errors = validate();

    if (Object.keys(errors).length === 0) {
      localStorage.setItem('message', JSON.stringify({ name, email, message }));
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Üzenetét sikeresen elküldtük.',
        text: 'Hotelünk hamarosan felveszi Önnel a kapcsolatot...',
        showConfirmButton: false,
        timer: 4000,
      });
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setErrors(errors);
      setShowError(true);
    }
  };


  return (
    <>
       <Hero>
     <Banner title="Kapcsolat">
     <Link to="/" className="btn-primary">
            Kezdőoldalra
          </Link>
      </Banner>
      </Hero>


      <div className="contact">
            <div className="left-container">
              <div>
                <h5 style={{ fontSize: "20px", marginBottom: "2px"}}>Elérhetőségeink</h5>
              </div>
              <ul className="contact-element">
                <li>
                <FaMapMarker /> 4400 Nyíregyháza, Böszörményi út 15.
                </li>
                <li>
                <FaPhone /> +36 20 118 6170
                </li>
                <li>
                <FaEnvelope /> hopstophotel@gmail.com
                </li>
                <li>
                  <FaClock /> 0-24h
                </li>
              </ul>
              <iframe
                className="iframe1"
                title="googleMap"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d4003.5161760990645!2d21.71508026857414!3d47.95521675130895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1zbnlpcmVneWjDoXphIGLDtnN6w7ZybcOpbnlpIMO6dCAxNQ!5e0!3m2!1shu!2sua!4v1690394620024!5m2!1shu!2sua"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

              
           
          

          <div className="right-container" style={{ textAlign: 'center' }}>
            <div style={{ marginBottom: 30, marginTop: 20 }}>
              <h5 style={{ fontSize: "20px", marginBottom: "10px"}}>Írjon nekünk üzenetet!</h5>
            </div>
            <form className='contact-form'>
              <div>
                {showError && errors.name && <div className="error">{errors.name}</div>}
                <input
                  type="text"
                  placeholder="Név"
                  className='contact-input'
                  required
                  value={name}
                  style={{ width: '100%', marginBottom: 20, marginTop: 10 }}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                {showError && errors.email && <div className="error">{errors.email}</div>}
                <input
                  type="email"
                  placeholder="E-mail cím"
                  className='contact-input'
                  required
                  value={email}
                  style={{ width: '100%', marginBottom: 20, marginTop: 10 }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                {showError && errors.message && <div className="error">{errors.message}</div>}
                <textarea
                  placeholder="Üzenet"
                  className='contact-textarea'
                  required
                  value={message}
                  rows={5}
                  style={{ width: '100%', marginBottom: 20, marginTop: 10 }}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button className="button" onClick={handleClick}>
                Küldés
              </button>
            </form>
          </div>
          </div>
    </>
  );
};

export default Contact;
