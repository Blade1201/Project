import React from 'react';
import { Link } from "react-router-dom";

export const Page = ({ title, link }) => {
    return (
        <div className='page'>
            <h4>{title}</h4>
            <Link to={link}>
                <button className='btn-primary'>Tovább <br /> a kezelőfelületre </button>
            </Link>
        </div>
    )
}