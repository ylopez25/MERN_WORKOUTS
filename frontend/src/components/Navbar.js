import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Workout buddy</h1>
        </Link>
        <div>
        <span>Sign in /</span>
        <span> Sign up</span>
        </div>
      </div>
    </header>
  );
}
