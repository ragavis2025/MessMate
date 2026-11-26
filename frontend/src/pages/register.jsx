import {useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { studentRegisterSchema } from "../components/FormSchema/studentRegisterSchema";
import {zodResolver} from "@hookform/resolvers/zod";

function Register(){
    const navigate = useNavigate();
    const {register,handleSubmit,formState:{errors}}=useForm({
        resolver: zodResolver(studentRegisterSchema)
    })
    function onSubmit1(data){
        console.log(data)
        alert("register success")
        navigate("/")
    }
    return(
        <form onSubmit={handleSubmit(onSubmit1)}>
            <label>Name: </label>
            <input type="text" required placeholder="Enter your name" {...register("name")}/><br/>
            <p>{errors.name?.message}</p>
            <label>Email id: </label>
            <input type="email" required placeholder="Enter your email" {...register("email")}/><br/>
            <p>{errors.email?.message}</p>
            <label>Password: </label>
            <input type="password" required placeholder="Enter your password" {...register("password")} /><br/>
            <p>{errors.password?.message}</p>
            <label>Age: </label>
            <input type="number" required placeholder="Enter your age" {...register("age")}/><br/>
            <p>{errors.age?.message}</p>
            <label>Block : </label>
            <input type="text" required placeholder="Enter your hostel block" {...register("block")}/><br/>
            <p>{errors.block?.message}</p>
            <label>Room number: </label>
            <input type="number" required placeholder="Enter your room number" {...register("roomno")}/><br/>
            <p>{errors.roomno?.message}</p>
            <label>Roll number: </label>
            <input type="text" required placeholder="Enter your roll number" {...register("rollno")}/><br/>
            <p>{errors.rollno?.message}</p>
            <label>Year: </label>
            <input type="number" required placeholder="Enter your current year" {...register("year")}/><br/>
            <p>{errors.year?.message}</p>
            <label>Phone number: </label>
            <input type="tel" required placeholder="Enter your Phone number" {...register("phoneno")}/><br/>
            <p>{errors.phoneno?.message}</p>
            <button type="submit">Submit</button>   
        </form>
    )
}

export default Register;