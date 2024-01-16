import { useEffect, useState } from "react";
import WorkoutDetails from '../components/WorkoutDetails.js';
import WorkoutForm from '../components/WorkoutForm.js';
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";

const Home = () => {
  const [workouts, dispatch] = useWorkoutsContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type:'SET_WORKOUT', payload: json })
      }
    };
    fetchWorkouts();
  }, []);
  return (
    <div className='home'>
        <div className='workouts'>
        {workouts && workouts.map((workout) => (
        <WorkoutDetails workout={workout} key={workout._id}/>
        ))}
        </div>
        <WorkoutForm />
    </div>
  );
};
export default Home;
