function RecentOrders({ orders }) {
    const recentOrders = orders.slice(0, 5);

    return (
        <div className="recentSection">
            <div className="recentHeader">
                <h2>Recent Orders</h2>
            </div>

            <div className="recentList">
                {recentOrders.map((order) => (
                    <div className="recentItem" key={order.id}>
                        <div>
                            <p className="primaryText">
                                Order #{order.id}
                            </p>

                            <span>User ID: {order.userId}</span>
                        </div>

                        <strong>${order.total}</strong>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RecentOrders;
