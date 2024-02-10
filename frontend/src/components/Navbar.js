import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workouts</h1>
        </Link>
        <Link to="/">
          <h1>Profile</h1>
        </Link>
        <form>
        <input
          placeholder="Something that needs to be done..."
          // value={userInput}
          // onChange={handleChange}
        />
        <button type="submit">
         search
        </button>
      </form>
      </div>
    </header>
  );
}
