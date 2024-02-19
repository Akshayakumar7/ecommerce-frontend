import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    //form function
    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register', {
                name: name,
                email: email,
                password: password,
                phone: phoneNumber,
                address: address,
                answer:answer
            });
            if (res?.data?.success) {
                console.log("res?.data?.message", res?.data?.message)
                await toast.success(res?.data?.message);
                navigate("/login")
            }
            else {
                toast.error(res?.data?.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
        setLoading(true);
    }

    return (
        <Layout title={"Register Ecommerce App"}>
            <div className='register'>
                <div className="card">
                    <h2 className='heading-text'>REGISTRATION FORM</h2>
                    <form onSubmit={submitHandler}>
                        <div className="input-group">
                            <label>Name</label>
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Password</label>
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Address</label>
                            <input
                                type="text"
                                name="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>What is your favorite dish</label>
                            <input
                                type="text"
                                name='Answer'
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />
                        </div>

                        <div className="input-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                name="phoneNumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="submit-btn" disabled={loading}>
                            {loading ? 'Submitting...' : 'Submit'}
                        </button>
                    </form>
                </div>

            </div>
        </Layout>
    )
}

export default Register