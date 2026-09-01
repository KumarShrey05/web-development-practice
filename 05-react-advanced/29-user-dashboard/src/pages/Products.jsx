import { useContext, useState } from "react";
import DashboardContext from "../context/DashboardContext";
import Search from "../components/Search";
import Form from "../components/Form";

function Products() {
    const { products, setProducts } = useContext(DashboardContext);

    const [search, setSearch] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [showForm, setShowForm] = useState(false);
    const [editProduct, setEditProduct] = useState(null);

    const handleSearch = () => {
        setSearchTerm(search);
    };

    const handleEdit = (product) => {
        setEditProduct(product);
        setShowForm(true);
    };

    const handleDelete = (id) => {
        setProducts((prev) =>
            prev.filter((product) => product.id !== id)
        );
    };

    const filteredProducts = products.filter((product) =>
        `${product.title} ${product.category} ${product.description}`
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
    );

    return (
        <div className="pageContent">

            <div className="pageHeader">
                <div>
                    <h1>Products</h1>
                    <p>Manage your product catalogue</p>
                </div>

                <button
                    className="addButton"
                    onClick={() => {
                        setEditProduct(null);
                        setShowForm(true);
                    }}
                >
                    + Add Product
                </button>
            </div>

            {showForm && (
                <Form
                    category="product"
                    editData={editProduct}
                    onClose={() => setShowForm(false)}
                />
            )}

            <Search
                value={search}
                onChange={setSearch}
                onSearch={handleSearch}
                placeholder="Search products..."
            />

            <div className="tableCard">
                <table>
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>ID</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredProducts.map((product) => (
                            <tr key={product.id}>
                                <td>
                                    <div className="productInfo">
                                        <img
                                            className="productImage"
                                            src={product.thumbnail}
                                            alt={product.title}
                                        />

                                        <span className="primaryText">
                                            {product.title}
                                        </span>
                                    </div>
                                </td>

                                <td>#{product.id}</td>

                                <td>
                                    <span className="categoryBadge">
                                        {product.category}
                                    </span>
                                </td>

                                <td className="price">
                                    ${product.price}
                                </td>

                                <td>★ {product.rating}</td>

                                <td>
                                    <div className="actions">
                                        <button
                                            className="editButton"
                                            onClick={() => handleEdit(product)}
                                        >
                                            Edit
                                        </button>

                                        <button
                                            className="deleteButton"
                                            onClick={() => handleDelete(product.id)}
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

export default Products;
