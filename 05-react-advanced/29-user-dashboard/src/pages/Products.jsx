import { useContext } from "react"
import DashboardContext from "../context/DashboardContext"

function Products() {

    const { products } = useContext(DashboardContext);

    return (
        <div>
            {products.map((product) => (
                <div key={product.id}>
                    <p>{product.id}</p>
                    <h3>{product.title}</h3>
                    <h2>{product.price}</h2>
                    <h4>{product.category}</h4>
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Products
