import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer'>
            <h4 className='text-center'>All Right reserved &copy; Techinfoyt</h4>
            <p className='text-center mt-2'>
                <Link to="/about">About</Link>
                |
                <Link to="/contact">Contact</Link>
                |
                <Link to="/policy">Private policy</Link>
            </p>
        </div>
    )
}

export default Footer