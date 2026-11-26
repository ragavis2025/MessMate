import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addMenuSchema } from "../components/FormSchema/addMenuSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function EditMenu() {
    const navigate = useNavigate();
    const { register,handleSubmit,formState: { errors }} = useForm({
        resolver: zodResolver(addMenuSchema)
    });

    function onSubmit1(data) {
        console.log("Weekly Menu:", data);
        alert("Menu Updated Successfully");
        navigate("/adminDashboard");
    }

    return (
        <div>
            <h1>Update Weekly Menu</h1>
            <form onSubmit={handleSubmit(onSubmit1)}>
                <label>Enter Day</label><br />
                <input type="text" required placeholder="Enter Day" {...register("day")}/>
                <p>{errors.day?.message}</p>
                <label>Breakfast</label><br />
                <input type="text" required placeholder="Enter Breakfast" {...register("breakfast")}/>
                <p>{errors.breakfast?.message}</p>
                <label>Lunch</label><br />
                <input type="text" required placeholder="Enter Lunch" {...register("lunch")}/>
                <p>{errors.lunch?.message}</p>
                <label>Dinner</label><br />
                <input type="text" required placeholder="Enter Dinner" {...register("dinner")}/>
                <p>{errors.dinner?.message}</p>
                <button type="submit">Update Menu</button>
            </form>
        </div>
    );
}

export default EditMenu;
