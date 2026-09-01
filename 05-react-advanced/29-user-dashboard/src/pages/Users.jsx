import { useContext, useState } from "react";
import DashboardContext from "../context/DashboardContext";
import Search from "../components/Search";
import Form from "../components/Form";

function Users() {
    const { users, setUsers } = useContext(DashboardContext);

    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editUser, setEditUser] = useState(null);

    const handleSearch = () => {
        setSearchTerm(search);
    };

    const handleEdit = (user) => {
        setEditUser(user);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setUsers((prev) => prev.filter((user) => user.id !== id));
    };

    const filteredUsers = users.filter((user) =>
        `${user.firstName} ${user.lastName} ${user.email}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pageContent">

            <div className="pageHeader">
                <div>
                    <h1>Users</h1>
                    <p>Manage and view all users</p>
                </div>

                <button
                    className="addButton"
                    onClick={() => {
                        setEditUser(null);
                        setShowForm(true);
                    }}
                >
                    + Add User
                </button>
            </div>

            {showForm && (
                <Form
                    category="user"
                    editData={editUser}
                    onClose={() => setShowForm(false)}
                />
            )}

            <Search
                value={search}
                onChange={setSearch}
                onSearch={handleSearch}
                placeholder="Search users..."
            />

            <div className="tableCard">
                <table>
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Name</th>
                            <th>ID</th>
                            <th>Email</th>
                            <th>Job Title</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>
                                    <img
                                        className="userImage"
                                        src={user.image}
                                        alt={`${user.firstName} ${user.lastName}`}
                                    />
                                </td>

                                <td className="primaryText">
                                    {user.firstName} {user.lastName}
                                </td>

                                <td>#{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.company.title}</td>

                                <td>
                                    <div className="actions">
                                        <button
                                            className="editButton"
                                            onClick={() => handleEdit(user)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="deleteButton"
                                            onClick={() => handleDelete(user.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default Users;
