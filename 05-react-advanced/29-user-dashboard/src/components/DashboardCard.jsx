function DashboardCard({ users, products, orders }) {
    const revenue = orders.reduce(
        (total, order) => total + order.total,
        0
    );

    return (
        <div className="dashboardCards">
            <div className="dashboardCard">
                <h3>Total Users</h3>
                <h2>{users.length}</h2>
            </div>

            <div className="dashboardCard">
                <h3>Total Products</h3>
                <h2>{products.length}</h2>
            </div>

            <div className="dashboardCard">
                <h3>Total Orders</h3>
                <h2>{orders.length}</h2>
            </div>

            <div className="dashboardCard">
                <h3>Total Revenue</h3>
                <h2>${revenue}</h2>
            </div>
        </div>
    );
}

export default DashboardCard;
