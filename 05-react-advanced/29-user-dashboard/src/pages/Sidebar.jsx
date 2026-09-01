import { Link } from "react-router-dom"

function Sidebar() {
    return (
        <aside>
            <nav>
                <Link to="/">Dashboard</Link>
                <Link to="/users">User</Link>
                <Link to="/Products">Products</Link>
                <Link to="/Orders">Orders</Link>

            </nav>
        </aside>
    )
}

export default Sidebar
