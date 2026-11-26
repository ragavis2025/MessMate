import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { feedbackSchema } from "../components/FormSchema/feedbackSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function FeedBack() {
    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: zodResolver(feedbackSchema)
    });

    function onSubmit1(data) {
        console.log("Student Feedback:", data);
        alert("Feedback Submitted Successfully");
        navigate("/studentDashboard");
    }

    return (
        <div>
            <h1>Submit Feedback</h1>
            <form onSubmit={handleSubmit(onSubmit1)}>

                <label>Enter Meal</label><br />
                <input type="text" required placeholder="Enter Meal type" {...register("meal")}/>          
                <p>{errors.meal?.message}</p>
                <label>Rating</label><br />
                <input type="number" required placeholder="Give Rating (1-5)" {...register("rating")}/>
                <p>{errors.rating?.message}</p>
                <label>Comments</label><br />
                <input type="text" required placeholder="Give any comment" {...register("comments")}/>
                <p>{errors.comments?.message}</p>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
}

export default FeedBack;
