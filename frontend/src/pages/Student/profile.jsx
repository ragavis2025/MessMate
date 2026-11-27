import { useState } from "react";

function Profile() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        age: "",
        block: "",
        roomno: "",
        rollno: "",
        year: "",
        phone: ""
    });

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        alert("Student details updated successfully");
    };

    return (
        <div className="min-h-screen bg-slate-100 flex justify-center items-center p-4">
            <form onSubmit={handleSubmit} className="bg-white w-full max-w-xl p-8 rounded-2xl shadow-lg">
              <h1 className="text-2xl font-bold text-teal-700 text-center mb-2">Update Student Profile</h1>
                <label className="block font-semibold text-slate-700 mb-2">Student Name:</label>
                <input type="text" name="name" required
                    placeholder="Enter your name"
                    value={formData.name} onChange={handleChange} className="w-full border p-2 rounded mb-1"/>

                <label className="block font-semibold text-slate-700 mb-2">Email:</label>
                <input type="email" name="email" required
                    placeholder="Enter your email"
                    value={formData.email} onChange={handleChange} className="w-full border p-2 rounded mb-1" />

                <label className="block font-semibold text-slate-700 mb-2">Age:</label>
                <input type="number" name="age" required
                    placeholder="Enter your age"
                    value={formData.age} onChange={handleChange} className="w-full border p-2 rounded mb-1" />

                <label className="block font-semibold text-slate-700 mb-2">Block:</label>
                <input type="text" name="block" required
                    placeholder="Enter your block"
                    value={formData.block} onChange={handleChange} className="w-full border p-2 rounded mb-1"/>

                <label className="block font-semibold text-slate-700 mb-2">Room Number:</label>
                <input type="number" name="roomno" required
                    placeholder="Enter your room number"
                    value={formData.roomno} onChange={handleChange} className="w-full border p-2 rounded mb-1"/>

                <label className="block font-semibold text-slate-700 mb-2">Roll Number:</label>
                <input type="text" name="rollno" required
                    placeholder="Enter your roll number"
                    value={formData.rollno} onChange={handleChange} className="w-full border p-2 rounded mb-1"/>

                <label className="block font-semibold text-slate-700 mb-2">Year:</label>
                <input type="number" name="year" required
                    placeholder="Enter your year"
                    value={formData.year} onChange={handleChange} className="w-full border p-2 rounded mb-1"/>

                <label className="block font-semibold text-slate-700 mb-2">Phone Number:</label>
                <input type="tel" name="phone" required
                    placeholder="Enter your phone number"
                    value={formData.phone} onChange={handleChange} className="w-full border p-2 rounded mb-1"/>

                <button type="submit" className="w-full bg-teal-700 text-white p-2 rounded mt-4 hover:bg-teal-800">Update Profile</button>
            </form>
        </div>
    );
}

export default Profile;