import { useRef } from "react";
import useFetch from "../use-fetch-custom-hook";


export default function ScrollToTopAndBottom() {

    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products?limit=200",
        {}
    );
    const bottomRef = useRef(null);

    function handleScrollToTop() {
        window.scrollTo(
            { top: 0, left: 0, behavior: 'smooth', }
        );
    }

    function handleScrollToBottom() {
        bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (pending) return <div>Data Loading...</div>
    if (error) return <div>{error}</div>

    return (
        <div>
            <h1>This is ScrollToTopAndBottom Custom Hook</h1>
            <h3>This is the Top section</h3>
            <button onClick={handleScrollToBottom}>Scroll-To-Bottom</button>
            <ul style={{ listStyle: 'none' }}>
                {
                    data && data.products && data.products.length
                        ? data.products.map((productItem, index) => (
                            <li key={index}>{productItem.title}</li>
                        ))
                        : null
                }
            </ul>
            <button onClick={handleScrollToTop}>Scroll-To-Top</button>
            <div ref={bottomRef}></div>
            <h3>This The Bottom of this page</h3>
        </div>
    );
}