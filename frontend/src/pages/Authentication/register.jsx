import {useNavigate , Link} from "react-router-dom";
import {useForm} from "react-hook-form";
import { studentRegisterSchema } from "../../components/FormSchema/studentRegisterSchema";
import {zodResolver} from "@hookform/resolvers/zod";

function Register(){
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver: zodResolver(studentRegisterSchema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register success")
        navigate("/login",{
            state:data
        })
    }
    return(
      <div className="min-h-screen bg-slate-100 flex justify-center items-center p-4">
        <form onSubmit={handleSubmit(onSubmit1)} className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">
            <h1 className="text-4xl font-bold text-teal-700 text-center mb-2">MessMate Register</h1>
            <h2 className="text-xl text-slate-600 text-center mb-4">Create Your Account</h2>

            <label htmlFor="name" className="block font-semibold text-slate-700 mb-2">Name: </label>
            <input type="text" id="name" required placeholder="Enter your name" {...register("name")}  className="w-full border p-2 rounded mb-1"/>
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
            
            <label htmlFor="email" className="block font-semibold text-slate-700 mb-2">Email id: </label>
            <input type="email" id="email" required placeholder="Enter your email" {...register("email")}  className="w-full border p-2 rounded mb-1"/>
            <p className="text-red-500 text-sm">{errors.email?.message}</p>
            
            <label htmlFor="password" className="block font-semibold text-slate-700 mb-2">Password: </label>
            <input type="password" id="password" required placeholder="Enter your password" {...register("password")}  className="w-full border p-2 rounded mb-1"/>
            <p className="text-red-500 text-sm">{errors.password?.message}</p>
            
            <label htmlFor="age" className="block font-semibold text-slate-700 mb-2">Age: </label>
            <input type="number" id="age" required placeholder="Enter your age" {...register("age")}  className="w-full border p-2 rounded mb-1"/>
            <p className="text-red-500 text-sm">{errors.age?.message}</p>
            
            <label htmlFor="block" className="block font-semibold text-slate-700 mb-2">Block : </label>
            <input type="text" id="block" required placeholder="Enter your hostel block" {...register("block")} className="w-full border p-2 rounded mb-1"/>
            <p className="text-red-500 text-sm">{errors.block?.message}</p>
            
            <label htmlFor="roomno" className="block font-semibold text-slate-700 mb-2">Room number: </label>
            <input type="number" id="roomno" required placeholder="Enter your room number" {...register("roomno")} className="w-full border p-2 rounded mb-1"/>
            <p className="text-red-500 text-sm">{errors.roomno?.message}</p>
            
            <label htmlFor="rollno" className="block font-semibold text-slate-700 mb-2">Roll number: </label>
            <input type="text" id="rollno" required placeholder="Enter your roll number" {...register("rollno")}  className="w-full border p-2 rounded mb-1"/>
            <p className="text-red-500 text-sm">{errors.rollno?.message}</p>
            
            <label htmlFor="year" className="block font-semibold text-slate-700 mb-2">Year: </label>
            <input type="number" id="year" required placeholder="Enter your current year" {...register("year")} className="w-full border p-2 rounded mb-1"/>
            <p className="text-red-500 text-sm">{errors.year?.message}</p>
            
            <label htmlFor="phoneno" className="block font-semibold text-slate-700 mb-2">Phone number: </label>
            <input type="tel" id="phoneno" required placeholder="Enter your Phone number" {...register("phoneno")} className="w-full border p-2 rounded mb-1"/>
            <p className="text-red-500 text-sm">{errors.phoneno?.message}</p>
            
            <button type="submit" className="w-full bg-teal-700 text-white p-2 rounded mt-4 hover:bg-teal-800">Submit</button>  
            
            <p className="text-center mt-4 text-sm">Already have an account?<Link to="/login" className="text-teal-700 font-semibold ml-1"> Login</Link></p> 
        </form>
      </div>
    )
}

export default Register;