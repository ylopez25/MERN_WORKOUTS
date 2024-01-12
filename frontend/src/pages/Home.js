import { useEffect, useState } from 'react'
const Home = () => {
    const [workouts, setWorkouts] = useState(null);

    useEffect(()=>{
        const fetchWorkouts = async () => {
            const response = await fetch('https://localhost:3000/api/workouts')
            const json = await response.json()

            if(response.ok) {
                setWorkouts(json)
            }
        }   
        fetchWorkouts(json)
     }, [])
  return (
    <div>
      <h2>Home</h2>
      {workouts && workouts.map((workout)=> (
        <p key={workout._id}>{workout.title}</p>
      ))}
    </div>
  );
};
export default Home;
