import { useState } from "react"


function Login() {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log({ name,email,password });
    };
  return (

   <>
   <h1 className="text-blue-500">Profile Page</h1>
   <form onSubmit={handleSubmit}>
    <label>Admin name:</label><br />
    <input type="text" required placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value)}/><br />
    <label>Admin Email:</label><br />
    <input type="email" required placeholder="Enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
    <label>Password:</label><br />
    <input type="password" required placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br />
    <button type="submit">Update</button>
   </form>
   </>
  )
}

export default Login;
