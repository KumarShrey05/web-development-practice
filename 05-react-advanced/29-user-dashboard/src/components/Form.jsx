import { useContext, useState } from "react";
import DashboardContext from "../context/DashboardContext";

function Form({ category, editData = null, onClose }) {
    const {
        setUsers,
        setProducts,
        setOrders
    } = useContext(DashboardContext);

    const [formData, setFormData] = useState(editData || {});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (category === "user") {
            if (editData) {
                setUsers((prev) =>
                    prev.map((user) =>
                        user.id === editData.id
                            ? { ...user, ...formData }
                            : user
                    )
                );
            } else {
                setUsers((prev) => [
                    ...prev,
                    {
                        ...formData,
                        id: Date.now(),
                    },
                ]);
            }
        }

        if (category === "product") {
            if (editData) {
                setProducts((prev) =>
                    prev.map((product) =>
                        product.id === editData.id
                            ? { ...product, ...formData }
                            : product
                    )
                );
            } else {
                setProducts((prev) => [
                    ...prev,
                    {
                        ...formData,
                        id: Date.now(),
                    },
                ]);
            }
        }

        if (category === "order") {
            if (editData) {
                setOrders((prev) =>
                    prev.map((order) =>
                        order.id === editData.id
                            ? { ...order, ...formData }
                            : order
                    )
                );
            } else {
                setOrders((prev) => [
                    ...prev,
                    {
                        ...formData,
                        id: Date.now(),
                    },
                ]);
            }
        }

        onClose();
    };

    return (
        <form className="adminForm" onSubmit={handleSubmit}>

            {category === "user" && (
                <>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName || ""}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName || ""}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email || ""}
                        onChange={handleChange}
                        required
                    />
                </>
            )}

            {category === "product" && (
                <>
                    <input
                        type="text"
                        name="title"
                        placeholder="Product Name"
                        value={formData.title || ""}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price || ""}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category || ""}
                        onChange={handleChange}
                        required
                    />
                </>
            )}

            {category === "order" && (
                <>
                    <input
                        type="number"
                        name="userId"
                        placeholder="User ID"
                        value={formData.userId || ""}
                        onChange={handleChange}
                        required
                    />

                    <input
                        type="number"
                        name="total"
                        placeholder="Total"
                        value={formData.total || ""}
                        onChange={handleChange}
                        required
                    />
                </>
            )}

            <div className="formActions">
                <button
                    type="button"
                    className="cancelButton"
                    onClick={onClose}
                >
                    Cancel
                </button>

                <button
                    type="submit"
                    className="addButton"
                >
                    {editData ? "Update" : "Add"}
                </button>
            </div>


        </form>
    );
}

export default Form;
