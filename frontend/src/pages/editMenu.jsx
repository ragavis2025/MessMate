import { useState } from "react";

function EditMenu() {
  const [day, setDay] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({ day, breakfast, lunch, dinner });
  };

  return (
    <div>
      <h1 className = "text-blue-500">Edit Weekly Menu</h1>

      <form onSubmit={handleSubmit}>
        <label>Day:</label><br />
        <input type="text" placeholder="Day" required value={day} onChange={(e) => setDay(e.target.value)}/><br />
        <label>Breakfast:</label><br />
        <input type="text" placeholder="Breakfast" required value={breakfast} onChange={(e) => setBreakfast(e.target.value)}/><br />
        <label>Lunch:</label><br />
        <input type="text" placeholder="Lunch" value={lunch} required onChange={(e) => setLunch(e.target.value)}/><br />
        <label>Dinner:</label><br />
        <input type="text" placeholder="Dinner" value={dinner} required onChange={(e) => setDinner(e.target.value)}/><br />
        <button type="submit">Update Menu</button>
      </form>
    </div>
  );
}

export default EditMenu;