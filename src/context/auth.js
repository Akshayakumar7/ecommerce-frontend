import { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
const AuthContent = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: ""
    });
    axios.defaults.headers.common['Authorization'] = auth?.token;
    useEffect(() => {
        const data = localStorage.getItem("auth");
        console.log(">>>>", data)
        if (data) {
            const parseData = JSON.parse(data);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })
        }
        //eslint-disable-next-line
    }, [])
    return (
        <AuthContent.Provider value={[auth, setAuth]}>
            {children}
        </AuthContent.Provider>
    )
}

const useAuth = () => useContext(AuthContent);

export { useAuth, AuthProvider }