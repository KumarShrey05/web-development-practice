import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div>
            <Link to="/">Dashboard</Link>
            <Link to="/users">User</Link>
            <Link to="/Products">Products</Link>
            <Link to="/Orders">Orders</Link>
            <Link to="/Form">Form</Link>
        </div>
    )
}

export default Navbar
