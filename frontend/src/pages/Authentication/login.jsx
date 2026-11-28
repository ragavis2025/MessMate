import { useLocation, useNavigate , Link } from "react-router-dom";
import { useState } from "react";
import { email } from "zod";


function Login() {
    const navigate = useNavigate();
    const location = useLocation();
    const [logindata,setLoginData]=useState({
        email:"",
        password:""
    });
    function handleChange(e){
        setLoginData({
            ...logindata,
            [e.target.name]:e.target.value
        });
    }
    function handleSubmit(e){
        e.preventDefault();
        const registerdata = location.state;
        if(registerdata.email === logindata.email && registerdata.password === logindata.password){
            console.log("Login successful");
            navigate("/student/dashboard");
        }
        else{
            console.log("Invalid email or password");
        }
        console.log("Login data:",logindata);
        console.log("Register Data:",registerdata);
    }

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">
          <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold text-teal-700 text-center mb-2">MessMate Login Page</h1>
            <h2 className="text-xl text-slate-600 text-center mb-4">Welcome Back!</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="block font-semibold text-slate-700 mb-2">Email: </label>
                <input type="email" id="email" name="email" required placeholder="Enter your email" onChange={handleChange} className="w-full border border-slate-300 rounded-xl p-3 mb-4 outline-none focus:border-teal-600"/>
                <label htmlFor="password" className="block font-semibold text-slate-700 mb-2">Password: </label>
                <input type="password" id ="password" name="password" placeholder="Enter your password" onChange={handleChange} className="w-full border border-slate-300 rounded-xl p-3 mb-4 outline-none focus:border-teal-600"/>
                <button type="submit" className="w-full bg-teal-700 text-white font-semibold text-lg p-3 rounded-xl hover:bg-teal-800">Login</button>
                <p className="text-center text-slate-600 mt-6">Don't have an account?<Link to="/" className="text-teal-700 font-bold ml-2 hover:underline"> Register</Link></p>
            </form>
          </div>
        </div>
    );
}

export default Login;