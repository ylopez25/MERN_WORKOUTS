import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
    <div>
        <Link to='/'>
        <h1>Workout buddy</h1>
        </Link>
    </div>
    </header>
  )
}
