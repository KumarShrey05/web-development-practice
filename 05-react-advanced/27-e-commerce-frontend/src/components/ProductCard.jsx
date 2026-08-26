import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../context/CartContext";

function ProductCard({ product }) {
    const { cart, setCart } = useContext(CartContext);

    const handleAddToCart = () => {
        const existingProduct = cart.find(
            (item) => item.id === product.id
        );
        if (existingProduct) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );

        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
    };

    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>

                <h3>{product.title}</h3>
            </Link>
            <h2 className="price">Rs {product.price}</h2>

            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}

export default ProductCard;