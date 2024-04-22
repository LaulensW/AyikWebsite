import React from 'react';
import "./notfound.css";
import image from "../assets/404.png";

const NotFound = () => {
    return (
        <div className='notfound'>
            <img className='viernulvier' src={image} alt="" />
            <div className='notfound2'>
                <h1>Page Not Found</h1>
                <p>The page you are looking for does not exist.</p>
            </div>
        </div>
    );
};

export default NotFound;