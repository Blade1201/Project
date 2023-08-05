import React from 'react';
import "../../styles/pages/admin.css";
import { Page } from './Page';


const AdminPage = () => {
  return (
    <div className="admin-page">
          <div className="col-md-4">
            <Page title="Felhasználók kezelése" link="users"/>
          </div>
          <div className="col-md-4">
          <Page title="Szobák kezelése" link="rooms"/>
          </div>
          <div className="col-md-4">
          <Page title="Foglalások kezelése" link="reservations"/>
          </div>
    </div>
  )
}

export default AdminPage;