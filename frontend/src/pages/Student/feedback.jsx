import { useNavigate } from "react-router-dom";
import {useForm} from "react-hook-form";
import { feedbackSchema } from "../../components/FormSchema/feedbackSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function FeedBack() {
    const navigate = useNavigate();
    const {register,handleSubmit,formState: { errors }} = useForm({
        resolver: zodResolver(feedbackSchema)
    });

    function onSubmit1(data) {
        console.log("Student Feedback:", data);
        alert("Feedback Submitted Successfully!!!");
        navigate("/student/dashboard");
    }

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">

            <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">

                <h1 className="text-3xl font-bold text-teal-700 text-center mb-2">Submit Feedback</h1>
                <form onSubmit={handleSubmit(onSubmit1)}>

                    <label className="block font-semibold text-slate-700 mb-1">Enter Meal</label>
                    <input type="text" required placeholder="Enter Meal type" {...register("meal")} className="w-full border border-slate-300 rounded-xl p-3 mb-1 outline-none focus:border-teal-600"/>          
                    <p className="text-red-500 text-sm mb-4">{errors.meal?.message}</p>
                    <label className="block font-semibold text-slate-700 mb-1">Rating</label>
                    <input type="number" required placeholder="Give Rating (1-5)" {...register("rating")} className="w-full border border-slate-300 rounded-xl p-3 mb-1 outline-none focus:border-teal-600"/>
                    <p className="text-red-500 text-sm mb-4">{errors.rating?.message}</p>
                    <label className="block font-semibold text-slate-700 mb-1">Comments</label>
                    <input type="text" required placeholder="Give any comment" {...register("comments")} className="w-full border border-slate-300 rounded-xl p-3 mb-1 outline-none focus:border-teal-600"/>
                    <p className="text-red-500 text-sm mb-4">{errors.comments?.message}</p>
                    <button type="submit" className="w-full bg-teal-700 text-white font-semibold text-lg p-3 rounded-xl hover:bg-teal-800">Submit Feedback</button>
                </form>
            </div>
        </div>
    );
}

export default FeedBack;
