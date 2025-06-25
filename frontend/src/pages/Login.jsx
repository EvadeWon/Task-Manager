import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const navigate = useNavigate()
    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:4000/api/user/login", formData);
            localStorage.setItem("token", res.data.token);
            alert(res.data.message);
            navigate("/")
        } catch (error) {
            alert("login failed")
        }

    }
    return (
        <>
            <div className="flex flex-col justify-center h-screen w-full items-center">
                <div className="flex flex-col items-center justify-center my-2">
                    <h1 className="text-3xl text-green-700 font-bold">Taskify</h1>
                    <p className="font-semibold">Login with Taskify</p>
                </div>
                <form className="flex flex-col items-center gap-3 my-1">
                    <input type="text" name="email" value={formData.email} placeholder="email" className="w-64 p-2 rounded-md border outline-none border-green-600" onChange={handleChange} />
                    <input type="password" name="password" value={formData.password} placeholder="password" className="w-64 p-2 rounded-md border outline-none border-green-600" onChange={handleChange} />
                    <button className=" bg-green-700 w-64 text-white p-2 rounded-md cursor-pointer" onClick={handleLogin}>Login</button>
                    <p className="text-sm">Don't have an account ? <Link to="/signup" className="text-green-700 font-medium">Sign up</Link></p>
                </form>
            </div>
        </>

    )
}

export default Login