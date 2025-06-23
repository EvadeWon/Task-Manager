import { Link, useNavigate } from "react-router-dom"
import React from "react"
const Signup = () => {
    const navigate = useNavigate()
    const handleSignup = (e) => {
        e.preventDefault();
        navigate("/login")
    }
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen">
                <h1 className="text-3xl text-green-700 font-semibold">Taskify</h1>
                <p className="font-medium">Signup with Taskify</p>
                <form className="flex flex-col w-64 my-2 gap-3" onSubmit={handleSignup}>
                    <input type="text" placeholder="username" className="p-2 rounded-md border border-green-600 outline-none" />
                    <input type="email" placeholder="email" className="p-2 rounded-md border border-green-600 outline-none" />
                    <input type="password" placeholder="password" className="p-2 rounded-md border border-green-600 outline-none" />
                    <button className="w-64 cursor-pointer bg-green-700 rounded-md p-2 text-white">Signup</button>
                    <p className="text-sm">Have an account?<Link className="text-green-700 font-medium"> Login</Link></p>
                </form>
            </div>
        </>

    )
}

export default Signup