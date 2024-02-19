import React, { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import toast from 'react-hot-toast';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/auth';



const Login = () => {
    const navigate = useNavigate();
    const [auth, setAuth] = useAuth()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const res = await axios.post('/api/v1/auth/login', {
                email: email,
                password: password,
            });
            if (res?.data?.success) {
                console.log("res?.data?.message", res?.data?.message)
                await toast.success(res?.data?.message);
                setAuth({
                    ...auth,
                    user: res?.data?.user,
                    token: res?.data?.token
                })
                localStorage.setItem("auth", JSON.stringify(res?.data))
                navigate("/")
            }
            else {
                toast.error(res?.data?.message)
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong")
        }
        setLoading(false);
    };

    const onClickForgotPassword = async () => {
        navigate("/forgot-password")
    }
    return (
        <Layout title={"Login"}>
            <div className='register'>
                <div className="card">
                    <h2 className='heading-text'>LOGIN</h2>
                    <form onSubmit={submitHandler}>
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
                        <div className='mb-3'>
                            <button type="submit" className="submit-btn" disabled={loading}>
                                Login
                            </button>

                        </div>
                        <button type="buttom" className="submit-btn" onClick={() => onClickForgotPassword()}>
                            Forgot password
                        </button>

                    </form>
                </div>

            </div>
        </Layout>
    )
}

export default Login