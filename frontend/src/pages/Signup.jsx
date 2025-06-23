import { Link, useNavigate } from "react-router-dom"
import React, { useState } from "react"
import axios from 'axios'
const Signup = () => {
    const [formData,setFormData]=useState({
        username:"",
        email:"",
        password:""
    })

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const navigate = useNavigate()
    const handleSignup = async(e) => {
        e.preventDefault();
        try {
            const res=await axios.post("http://localhost:4000/api/user/signup",formData)
            alert(res.data.message);
            navigate("/login")
        } catch (error) {
            alert(error.message)
        }
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-3xl text-green-700 font-semibold">Taskify</h1>
                <p className="font-medium">Signup with Taskify</p>
                <form className="flex flex-col w-64 my-2 gap-3" onSubmit={handleSignup}>
                    <input type="text" name="username" placeholder="username" className="p-2 rounded-md border border-green-600 outline-none" onChange={handleChange}/>
                    <input type="email" name="email" placeholder="email" className="p-2 rounded-md border border-green-600 outline-none" onChange={handleChange}/>
                    <input type="password" name="password" placeholder="password" className="p-2 rounded-md border border-green-600 outline-none" onChange={handleChange}/>
                    <button className="w-64 cursor-pointer bg-green-700 rounded-md p-2 text-white">Signup</button>
                    <p className="text-sm">Have an account?<Link className="text-green-700 font-medium"> Login</Link></p>
                </form>
            </div>
        </>

    )
}

export default Signup