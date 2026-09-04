import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/saved-jobs">Saved Jobs</Link>
      <Link to="/applied-jobs">Applied Jobs</Link>

    </div>
  )
}

export default Navbar
