import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import Layout from './Layout';
import telecallerImage from '../../../src/assets/images/telecaller.jpeg'

const Contact = () => {
    return (
        <Layout title={"Contact Us"}>
            <div className="contact-us-container">
                <div className="contact-details">
                    <h2>Contact Information</h2>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <span>Email: info@example.com</span>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        <span>Address: 123 Main Street, Cityville, Country</span>
                    </div>
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faPhone} />
                        <span>Phone: +1 234 567 890</span>
                    </div>
                </div>
                <div className="telecaller-image">
                    <img src={telecallerImage} alt="Telecaller Girl" />
                </div>
            </div>
        </Layout>
    );
};

export default Contact;
