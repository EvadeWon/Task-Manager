import { Link } from "react-router-dom"
import React from "react"
import { useNavigate } from "react-router-dom"
const Login = () => {
    const Navigate=useNavigate()
    const handleLogin=(e)=>{
        e.preventDefault()
        localStorage.setItem("auth",true);
        Navigate("/")
    }
    return (
        <>
            <div className="flex flex-col justify-center h-screen w-full items-center">
                <div className="flex flex-col items-center justify-center my-2">
                    <h1 className="text-3xl text-green-700 font-bold">Taskify</h1>
                    <p className="font-semibold">Login with Taskify</p>
                </div>
                <form className="flex flex-col items-center gap-3 my-1">
                    <input type="text" placeholder="email" className="w-64 p-2 rounded-md border outline-none border-green-600" />
                    <input type="password" placeholder="password" className="w-64 p-2 rounded-md border outline-none border-green-600" />
                    <button className=" bg-green-700 w-64 text-white p-2 rounded-md cursor-pointer" onClick={handleLogin}>Login</button>
                    <p className="text-sm">Don't have an account ? <Link className="text-green-700 font-medium">Sign up</Link></p>
                </form>
            </div>
        </>

    )
}

export default Login