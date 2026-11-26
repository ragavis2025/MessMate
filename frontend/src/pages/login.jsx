import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { loginSchema } from "../components/FormSchema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";


function Login() {
    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: zodResolver(loginSchema)
    });

    function onSubmit1(data) {
        console.log("Login Details:", data);
        alert("Login Successful");
        navigate("/studentDashboard");
    }

    return (
        <div>
            <h1>MessMate Login</h1>
            <form onSubmit={handleSubmit(onSubmit1)}>
                <label>Email: </label><br />
                <input type="email" required placeholder="Enter your email" {...register("email")}/>
                <p>{errors.email?.message}</p>
                <label>Password: </label><br />
                <input type="password" placeholder="Enter your password" {...register("password")}/>
                <p>{errors.password?.message}</p>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;