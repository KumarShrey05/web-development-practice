import { useContext, useState } from "react";
import DashboardContext from "../context/DashboardContext";

function Form({ category, editData = null }) {
    
    const { setUsers, setProducts, setOrders } = useContext(DashboardContext);

    const [formData, setFormData] = useState(editData || {});

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (category === "user") {
            setUsers((prev) => [...prev, formData]);
        }

        if (category === "product") {
            setProducts((prev) => [...prev, formData]);
        }

        if (category === "order") {
            setOrders((prev) => [...prev, formData]);
        }

        setFormData({});
    };

    return (
        <form onSubmit={handleSubmit}>

            {category === "user" && (
                <>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName || ""}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName || ""}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email || ""}
                        onChange={handleChange}
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
                    />

                    <input
                        type="number"
                        name="price"
                        placeholder="Price"
                        value={formData.price || ""}
                        onChange={handleChange}
                    />

                    <input
                        type="text"
                        name="category"
                        placeholder="Category"
                        value={formData.category || ""}
                        onChange={handleChange}
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
                    />

                    <input
                        type="number"
                        name="total"
                        placeholder="Total"
                        value={formData.total || ""}
                        onChange={handleChange}
                    />
                </>
            )}

            <button type="submit">
                {editData ? "Update" : "Add"}
            </button>

        </form>
    );
}

export default Form;
