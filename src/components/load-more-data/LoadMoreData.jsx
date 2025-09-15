import { useEffect, useState } from "react";
import "./styles.css";

export default function LoadMoreData() {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);
    const [allProductLength, setAllProductLength] = useState(0);

    async function fetchProduct() {
        try {
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);

            const result = await response.json();

            if (result && result.products && result.products.length) {
                // setProducts(result.products);
                setProducts((prevData) => [...prevData, ...result.products]);
                setLoading(false);
            }

            // console.log(result);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }
    async function fetchAllProductLength() {
        try {
            const response1 = await fetch(`https://dummyjson.com/products`);

            const result1 = await response1.json();
            if (result1 && result1.products && result1.products.length) {
                setAllProductLength(result1.total);
            }
            // console.log(result1.total);
        } catch (e) {
            console.log(e);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProduct();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [count]);

    useEffect(() => {
        fetchAllProductLength();
    }, []);
    // console.log(allProductLength);
    useEffect(() => {
        if (products && allProductLength > 0 && products.length === allProductLength) {
            setDisableButton(true);
        }
    }, [products, allProductLength]);

    if (loading) {
        return <div>Please wait ! Data Loading...</div>
    }
    // console.log(products);

    return (
        <div className="load-more-container">
            <div className="product-container">
                {
                    products && products.length
                        ? products.map((item, index1) =>
                            <div className="product" key={index1}>
                                <img
                                    src={item.thumbnail}
                                    alt={item.title}
                                />
                                <p>{item.title}</p>
                            </div>)
                        : null
                }
            </div>
            <div className="button-container">
                <button disabled={disableButton} onClick={() => setCount(count + 1)}>Load More Products</button>
                {
                    disableButton ? <p>You have reached to end of Products</p> : null
                }
            </div>
        </div>
    );
}
