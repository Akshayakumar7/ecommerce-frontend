import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const Spinner = ({ path = "login" }) => {
    const [count, setCount] = useState(2);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prevValue) => --prevValue)
        }, 1000);
        count === 0 && navigate(`/${path}`, {
            state: location.pathname
        });
        return () => clearInterval(interval)
    }, [count, navigate, location,path])

    return (
        <div class="d-flex justify-content-center align-item-center"
            style={{ marginTop: 200 }}
        >
            <h1 className='Text-center' style={{ marginRight: 20, marginTop: -8 }}>
                Redirecting to you in {count} seconds
            </h1>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner