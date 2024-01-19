import React from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

export default function WorkoutDetails({ workout }) {
  const {dispatch} = useWorkoutsContext()

  const handleDelete = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json();

    if(response.ok) {
      dispatch({ type:'DELETE_WORKOUT', payload: json})
    }
  }
  return (
    <div className="workout-details">
      <h2>{workout.title}</h2>
      <p>Load kg: {workout.load}</p>
      <p>Reps: {workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span className='material-symbols-outlined' onClick={handleDelete}>delete</span>
    </div>
  );
}
