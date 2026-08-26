import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

function ProductDetails() {
    const [product, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };

        fetchProduct();
    }, [id])


    return (
        <div className="product-details">
            {product && (
                <>
                    <h2>{product.title}</h2>
                    <h1 className="price">Rs {product.price}</h1>
                    <h4>{product.category}</h4>
                    <p>{product.description}</p>
                    <h3>Rating: {product.rating.rate}</h3>
                </>
            )}
        </div>
    )
}

export default ProductDetails;
