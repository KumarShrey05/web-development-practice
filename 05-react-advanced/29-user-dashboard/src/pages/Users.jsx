import { useContext } from "react"
import DashboardContext from "../context/DashboardContext"

function Users() {
    const { users } = useContext(DashboardContext);

    return (
        <div className="userCard">
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Email</th>
                        <th>Job Title</th>
                    </tr>
                </thead>

                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>
                                <img
                                    src={user.image}
                                    alt={`${user.firstName} ${user.lastName}`}
                                />
                            </td>
                            <td>
                                {user.firstName} {user.lastName}
                            </td>
                            <td>{user.id}</td>
                            <td>{user.email}</td>
                            <td>{user.company.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Users
