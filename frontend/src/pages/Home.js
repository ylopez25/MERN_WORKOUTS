import { useEffect } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext.js";
import WorkoutDetails from "../components/WorkoutDetails.js";
import WorkoutForm from "../components/WorkoutForm.js";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  //const [workouts, setWorkouts] = useState(null)
  useEffect(() => {
    const fetchWorkouts = async () => {
      const responsed = await fetch("/api/workouts");
      const response = await responsed.json();
      if (responsed.ok) {
        //setWorkouts(response)
        dispatch({ type: "SET_WORKOUTS", payload: response });
      }
    };
    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">{workouts && workouts.map((workout) => <WorkoutDetails workout={workout} key={workout._id} />)}</div>
      <WorkoutForm />
    </div>
  );
};
export default Home;
