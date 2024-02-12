import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    //form function
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/register', {
                name: name,
                email: email,
                password: password,
                phone: phoneNumber,
                address: address
            });
            if (res?.data?.success) {
                toast.success(res?.data?.message);
                navigate("/login")
            }
            else {
                toast.error(res?.data?.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
    }

    return (
        <Layout title={"Register Ecommerce App"}>
            <div className='register'>
                <form onSubmit={submitHandler}>
                    <div className="mb-3">

                        <input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your name"
                            required={true}

                        />
                    </div>
                    <div className="mb-3">
                        <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail"
                            placeholder="Enter your Email"
                            required

                        />
                    </div>
                    <div className="mb-3">

                        <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Enter your Password"
                            required

                        />
                    </div>
                    <div className="mb-3">

                        <input
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your Phone number"
                            required


                        />
                    </div>
                    <div className="mb-3">

                        <input
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            placeholder="Enter your Address"
                            required


                        />
                    </div>

                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>

            </div>
        </Layout>
    )
}

export default Register