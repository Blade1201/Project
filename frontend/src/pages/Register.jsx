import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidUserCircle } from 'react-icons/bi';
import axios from 'axios';
import { passwordStrength } from 'check-password-strength';
import { PasswordCustom } from '../helper/PasswordCustom';
import Swal from 'sweetalert2';

const Register = () => {
  const [formData, setFormData] = useState({});
  const [show, setShow] = useState(false);

  const nameformat = /^[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó]*[ ]{1}[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó\D]*$/;
  const addressformat = /^([0-9]{4}[ ]{1}[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó]*[,]{1}[ ]{1}[A-ZÍÁÉŰÚŐÓ][a-zíéáűúőó]*[ ]{1}[\wa-zíéáűúőó]*[ ]{1}[\w][a-z íéáűúőó\./\-0-9]*)$/;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    if (Object.entries(formData).length === 5) {
      if (
        formData?.name.match(nameformat) &&
        formData?.email.match(mailformat) &&
        formData?.address.match(addressformat) &&
        passwordStrength(formData?.password, PasswordCustom).value === 'Erős' &&
        document.getElementById('contract').checked === true
      ) {
        e.preventDefault();
        axios
          .post('http://localhost:8080/auth/register', formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then(() =>
            navigate('/login'),
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Sikeres regisztráció!',
              text: 'Jelentkezzen be a fiókjába!',
              showConfirmButton: false,
              timer: 5000,
            })
          );
      } else {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Helytelen formátum!',
          text: 'Kérjük, ellenőrizze le hogy helyesen adta meg az adatait.',
          showConfirmButton: false,
          timer: 5000,
        });
      }
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Helytelen formátum!',
        text: 'Kérjük, az összes mezőt töltse ki!',
        showConfirmButton: false,
        timer: 5000,
      });
    }
  };


  return (
    <div className="custom-container">
    <div className="custom-box">

    <BiSolidUserCircle size="7%" />

      <h4 className="custom-heading">Regisztráció</h4>

      <div className="custom-input-group">
        <input
          required
          className="custom-form-control"
          placeholder="Név"
          name="name"
          onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
        />
      </div>

      <div className="custom-input-group">
        <input
          required
          className="custom-form-control"
          placeholder="Telefonszám"
          name="phoneNumber"
          onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
        />
        <small className="custom-form-text custom-text-muted">Ilyen formában adja meg: 06301234567</small>
      </div>

      <div className="custom-input-group">
        <input
          required
          className="custom-form-control"
          placeholder="E-mail cím"
          type="email"
          name="email"
          onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
        />
      </div>

      <div className="custom-input-group">
        <input
          required
          className="custom-form-control"
          placeholder="Lakcím"
          name="address"
          onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
        />
      </div>

      <div className="custom-input-group">
        <input
          required
          className="custom-form-control"
          placeholder="Jelszó"
          type="password"
          name="password"
          onKeyDown={() => setShow(true)}
          onMouseLeave={() => setShow(false)}
          onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
        />
        <small className="custom-form-text custom-text-muted">
          {show ? passwordStrength(formData?.password, PasswordCustom).value : 'min. 8 karakter, kis- és nagybetű, szám, speciális karakter'}
        </small>
      </div>

      <div className="custom-checkbox-group">
        <label className="custom-checkbox-label">
          <input id="contract" type="checkbox" className="custom-checkbox" />
          <div>
            <span>Elfogadom az</span> <Link to="/terms_and_conditions" target="_blank" className="custom-link">
              ÁSZF-et
            </Link>{' '}
            <span>és az</span>{' '}
            <Link to="/privacy_policy" target="_blank" className="custom-link">
              Adatkezelési tájékoztatót
            </Link>
            .
          </div>
        </label>
      </div>

      <div className="custom-submit-button">
        <button
          className="btn btn-primary custom-btn"
          style={{ marginTop: 20 }}
          onClick={(e) => handleSubmit(e)}
        >
          Regisztráció
        </button>
      </div>

      <div className="custom-login-link">
        <Link to="/login" className="custom-link">
          Már van fiókja? Lépjen be itt!
        </Link>
      </div>
    </div>
  </div>
  );
};

export default Register;