import { useContext } from "react";
import CartContext from "../context/CartContext";


function Cart() {
    const { cart, setCart } = useContext(CartContext);

    const increaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCart(
            cart.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const removeFromCart = (id) => {
        setCart(
            cart.filter((item) => item.id !== id)
        );
    }

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div className="cart">
            <h1>Cart</h1>

            {cart.map((product) => (
                <div className="cart-item" key={product.id}>
                    <h2>{product.title}</h2>

                    <h1 className="price">
                        Rs {(
                            product.price * product.quantity
                        ).toFixed(2)}
                    </h1>

                    <div className="quantity">
                        <button onClick={() => decreaseQuantity(product.id)}>
                            -
                        </button>

                        <span>{product.quantity}</span>

                        <button onClick={() => increaseQuantity(product.id)}>
                            +
                        </button>
                    </div>

                    <button
                        className="remove-btn"
                        onClick={() => removeFromCart(product.id)}
                    >
                        Remove
                    </button>
                </div>
            ))}

            <h3 className="cart-total">
                Total: Rs {total.toFixed(2)}
            </h3>
        </div>
    )
}

export default Cart;