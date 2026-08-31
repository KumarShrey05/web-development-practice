import { useContext } from "react";
import DashboardContext from "../context/DashboardContext";

function Orders() {
    const { orders } = useContext(DashboardContext);

    return (
        <div>
            {orders.map((order) => (
                <div key={order.id}>
                    <h3>Order #{order.id}</h3>

                    <p>User ID: {order.userId}</p>

                    <p>Total Products: {order.totalProducts}</p>

                    <p>Total Quantity: {order.totalQuantity}</p>

                    <p>Total: ${order.total}</p>

                    <p>Discounted Total: ${order.discountedTotal}</p>
                </div>
            ))}
        </div>
    );
}

export default Orders;
