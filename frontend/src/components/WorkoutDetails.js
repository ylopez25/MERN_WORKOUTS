import React from "react";

export default function workoutDetails({ workout }) {
  return (
    <div className="workout-details">
      <h2>{workout.title}</h2>
      <p>Load kg: {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p>{workout.createdAt}</p>
    </div>
  );
}
