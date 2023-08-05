import React, { useContext, useState } from 'react';
import "../styles/pages/authentication.css";
import { Link, useNavigate } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';
import { AuthContext } from '../context/AuthContext';
import Swal from 'sweetalert2';

const Login = () => {
  const [formData, setFormData] = useState({});
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.entries(formData).length < 2 || formData?.email.match(mailformat) === null  ) {
        Swal.fire({
            position: 'center',
            icon: 'error',
            title: 'Sikertelen bejelentkezés!',
            text: "Hibás jelszó vagy e-mail-cím!",
            showConfirmButton: false,
            timer: 2500
        })
    } else {
        login(formData)
            .then((res) => {
                navigate("/")
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sikeres bejelentkezés!',
                    text: "Most már akadálytalanul foglalhat.",
                    showConfirmButton: false,
                    timer: 2500
                })
            })
            .catch((err) => {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: 'Sikertelen bejelentkezés!',
                    text: "Hibás jelszó vagy e-mail-cím!",
                    showConfirmButton: false,
                    timer: 2500
                })

            });
    }
  };

  
  return (
    <div className="custom-container">
      <div className="custom-box">

      <FaSignInAlt size="7%" />

        <h4 className="custom-heading">Bejelentkezés</h4>

        <form className="custom-form">
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
              placeholder="Jelszó"
              type="password"
              name="password"
              onChange={({ target: { name, value } }) => setFormData({ ...formData, [name]: value })}
            />
          </div>

          <div className="custom-submit-button">
            <button
              className="btn btn-primary custom-btn"
              style={{ marginTop: 20 }}
              onClick={(e) => handleSubmit(e)}
            >
              Bejelentkezés
            </button>
          </div>
        </form>

        <div className="custom-login-link">
          <Link to="/register" className="custom-link">
            Még nincs fiókja? Regisztráljon itt!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
