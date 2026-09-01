import { useContext, useState } from "react";
import DashboardContext from "../context/DashboardContext";
import Search from "../components/Search";
import Form from "../components/Form";

function Orders() {
    const { orders, setOrders } = useContext(DashboardContext);

    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editOrder, setEditOrder] = useState(null);

    const handleSearch = () => {
        setSearchTerm(search);
    };

    const handleEdit = (order) => {
        setEditOrder(order);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setOrders((prev) =>
            prev.filter((order) => order.id !== id)
        );
    };

    const filteredOrders = orders.filter((order) =>
        `${order.id} ${order.userId}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pageContent">

            <div className="pageHeader">
                <div>
                    <h1>Orders</h1>
                    <p>Track and manage customer orders</p>
                </div>

                <button
                    className="addButton"
                    onClick={() => {
                        setEditOrder(null);
                        setShowForm(true);
                    }}
                >
                    + Add Order
                </button>
            </div>

            {showForm && (
                <Form
                    category="order"
                    editData={editOrder}
                    onClose={() => setShowForm(false)}
                />
            )}

            <Search
                value={search}
                onChange={setSearch}
                onSearch={handleSearch}
                placeholder="Search orders..."
            />

            <div className="tableCard">
                <table>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>User ID</th>
                            <th>Products</th>
                            <th>Quantity</th>
                            <th>Total</th>
                            <th>Discounted</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredOrders.map((order) => (
                            <tr key={order.id}>
                                <td className="primaryText">
                                    #{order.id}
                                </td>

                                <td>#{order.userId}</td>

                                <td>{order.totalProducts}</td>

                                <td>{order.totalQuantity}</td>

                                <td className="price">
                                    ${order.total}
                                </td>

                                <td className="discountPrice">
                                    ${order.discountedTotal}
                                </td>

                                <td>
                                    <div className="actions">
                                        <button
                                            className="editButton"
                                            onClick={() => handleEdit(order)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="deleteButton"
                                            onClick={() => handleDelete(order.id)}
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

export default Orders;
