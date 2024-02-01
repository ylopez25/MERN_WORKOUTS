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
        <div>
        <span>Sign in /</span>
        <span> Sign up</span>
        </div>
      </div>
    </header>
  );
}
