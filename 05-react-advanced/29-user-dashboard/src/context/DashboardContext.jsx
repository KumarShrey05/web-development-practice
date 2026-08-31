import { createContext, useState, useEffect } from "react";
import { getOrders, getProducts, getUsers } from "../Server";

const DashboardContext = createContext()

export function DataProvider({ children }) {
    const [users, setUsers] = useState([]);
    const [products, setProducts] = useState([]);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            const data = await getUsers();
            setUsers(data.users);
        };

        const fetchProduct = async () => {
            const data = await getProducts();
            setProducts(data.products);
        };

        const fetchOrder = async () => {
            const data = await getOrders();
            setOrders(data.carts);
        }
        fetchUser();
        fetchProduct();
        fetchOrder();

    }, [])

    return (
        <DashboardContext.Provider value={{ users, setUsers, products, setProducts, orders, setOrders }}>
            {children}
        </DashboardContext.Provider>
    );
}

export default DashboardContext;
