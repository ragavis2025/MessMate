import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { addMenuSchema } from "../../components/FormSchema/addMenuSchema";
import { zodResolver } from "@hookform/resolvers/zod";

function EditMenu() {
    const navigate = useNavigate();
    const { register,handleSubmit,formState: { errors }} = useForm({
        resolver: zodResolver(addMenuSchema)
    });

    function onSubmit1(data) {
        console.log("Weekly Menu:", data);
        alert("Menu Updated Successfully");
        navigate("/admin/dashboard");
    }

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center p-6">
            <div className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">
                <h1 className="text-3xl font-bold text-teal-700 text-center mb-2">Update Weekly Menu</h1>
                <p className="text-slate-500 text-center mb-6">Enter the meals for the selected day</p>
                <div className="border-t-2 border-teal-600 mb-6"></div>
                <form onSubmit={handleSubmit(onSubmit1)}>
                    <label className="block font-semibold text-slate-700 mb-1">Enter Day</label>
                    <input type="text" required placeholder="Enter Day" {...register("day")} className="w-full border border-slate-300 rounded-xl p-3 mb-1 outline-none focus:border-teal-600"/>
                    <p className="text-red-500 text-sm mb-4">{errors.day?.message}</p>
                    <label className="block font-semibold text-slate-700 mb-1">Breakfast</label>
                    <input type="text" required placeholder="Enter Breakfast" {...register("breakfast")} className="w-full border border-slate-300 rounded-xl p-3 mb-1 outline-none focus:border-teal-600"/>
                    <p className="text-red-500 text-sm mb-4">{errors.breakfast?.message}</p>
                    <label className="block font-semibold text-slate-700 mb-1">Lunch</label>
                    <input type="text" required placeholder="Enter Lunch" {...register("lunch")} className="w-full border border-slate-300 rounded-xl p-3 mb-1 outline-none focus:border-teal-600"/>
                    <p className="text-red-500 text-sm mb-4">{errors.lunch?.message}</p>
                    <label className="block font-semibold text-slate-700 mb-1">Dinner</label>
                    <input type="text" required placeholder="Enter Dinner" {...register("dinner")} className="w-full border border-slate-300 rounded-xl p-3 mb-1 outline-none focus:border-teal-600"/>
                    <p className="text-red-500 text-sm mb-4">{errors.dinner?.message}</p>
                    <button type="submit" className="w-full bg-teal-700 text-white font-semibold text-lg p-3 rounded-xl mt-2 hover:bg-teal-800">Update Menu</button>
                </form>
            </div>
        </div>
    );
}

export default EditMenu;
