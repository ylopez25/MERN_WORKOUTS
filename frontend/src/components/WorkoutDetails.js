import React from 'react'

export default function workoutDetails({workout}) {
  return (
    <div>
        <h2>{workout.title}</h2>
        <p>Load kg: {workout.load}</p>
        <p>Reps: {workout.reps}</p>
    </div>
  )
}
