import axios from 'axios';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Layout from '../../components/Layout/Layout';
import SimpleLoader from '../../components/SimpleLoader';

const Forgotpassword = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [answer, setAnswer] = useState("");
    const [test, setTest] = useState("")

    const submitHandler = async () => {
        console.log("callaed")
        setLoading(true);
        try {
            const res = await axios.post('/api/v1/auth/forgot-password', {
                email: email,
                answer: answer,
                newPassword: newPassword
            });
            console.log("here1", res?.data?.success);
            if (res?.data?.success) {
                toast.success(res?.data?.message);
                await navigate("/login")
            } else {
                toast.error(res?.data?.message);
            }
            console.log("callaed", res)
        } catch (error) {
            alert("errorAK", error);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);  // Set loading to false after the request is completed
        }
    };

    return (
        <Layout title={"Forgot password"}>
            <div className='register'>
                <div className="card">
                    <h2 className='heading-text'>Reset Password</h2>
                    <form >
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
                            <label>Enter your favorite dish name</label>
                            <input
                                name="Answer"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label>New Password</label>
                            <input
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                            />
                        </div>
                        {
                            loading && <SimpleLoader />
                        }

                        <button type="submit" className="submit-btn" disabled={loading} onClick={() => submitHandler()}>
                            Reset
                        </button>
                        <button type="submit" className="submit-btn" disabled={loading} onClick={() => console.log("/login")}>
                            Test
                        </button>

                    </form>
                </div>

            </div>
        </Layout>
    )
}

export default Forgotpassword