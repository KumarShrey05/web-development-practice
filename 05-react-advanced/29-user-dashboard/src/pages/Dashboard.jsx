import { useContext } from "react";
import DashboardContext from "../context/DashboardContext";

import DashboardCard from "../components/DashboardCard";
import RecentUsers from "../components/RecentUsers";
import RecentOrders from "../components/RecentOrders";

function Dashboard() {
    const { users, products, orders } = useContext(DashboardContext);

    return (
        <div>
            <h1>Dashboard</h1>

            <DashboardCard
                users={users}
                products={products}
                orders={orders}
            />

            <RecentUsers users={users} />

            <RecentOrders orders={orders} />
        </div>
    );
}

export default Dashboard;
