import { useContext } from "react";
import DashboardContext from "../context/DashboardContext";
import DashboardCard from "../components/DashboardCard";
import RecentUsers from "../components/RecentUsers";
import RecentOrders from "../components/RecentOrders";

function Dashboard() {
    const { users, products, orders } = useContext(DashboardContext);

    return (
        <div className="pageContent">
            <div className="pageHeader">
                <div>
                    <h1>Dashboard</h1>
                    <p>Overview of your store</p>
                </div>
            </div>

            <DashboardCard
                users={users}
                products={products}
                orders={orders}
            />

            <div className="dashboardRecent">
                <RecentUsers users={users} />
                <RecentOrders orders={orders} />
            </div>
        </div>
    );
}

export default Dashboard;
