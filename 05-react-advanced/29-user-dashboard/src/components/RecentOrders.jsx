function RecentOrders({ orders }) {
    const recentOrders = orders.slice(0, 5);

    return (
        <div>
            <h2>Recent Orders</h2>

            {recentOrders.map((order) => (
                <div key={order.id}>
                    <p>Order #{order.id}</p>
                    <p>User ID: {order.userId}</p>
                    <p>Total: ${order.total}</p>
                </div>
            ))}
        </div>
    );
}

export default RecentOrders;
