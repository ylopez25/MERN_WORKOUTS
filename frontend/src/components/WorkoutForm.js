import React from "react";
import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function WorkoutForm() {
  const { dispatch } = useWorkoutsContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const responsed = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await responsed.json();

    if (!responsed.ok) {
      setError(response.error);
      setEmptyFields(response.emptyFields)
    }

    if (responsed.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      dispatch({ type: "CREATE_WORKOUTS", payload: response });
      console.log("new workout added", response);
    }
  };
  return (
    <form className="create" onSubmit={handleSubmit}>
      <label>Title:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
      <label>Load (kg):</label>
      <input type="number" onChange={(e) => setLoad(e.target.value)} value={load} />
      <label>Reps:</label>
      <input type="number" onChange={(e) => setReps(e.target.value)} value={reps} />
      <button>Submit</button>
      {error && <div>{error}</div>}
    </form>
  );
}
