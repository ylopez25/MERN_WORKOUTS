import React from "react";
import { useState } from "react";

export default function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [err, setError] = useState(null);

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

    if (!response.ok) {
      setError(response.err);
    }

    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
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
      { <div>{err}</div>}
    </form>
  );
}
