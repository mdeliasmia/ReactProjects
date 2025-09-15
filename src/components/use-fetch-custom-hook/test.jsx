import useFetch from ".";

export default function UseFetchHookTest() {
    const { data, error, pending } = useFetch(
        "https://dummyjson.com/products",
        {}
    );


    // console.log(error, data, pending);
    return (
        <div>
            <h1>This is Custom useFetch Hook Test Hook Page</h1>
            {
                pending ? <h3>Pending Please Wait..</h3> : null
            }
            {
                error ? <h3>There was Error</h3> : null
            }
            {
                data && data.products && data.products.length
                    ? data.products.map((productItem, index) => (
                        <p key={index}>{productItem.title}</p>
                    ))
                    : null
            }
        </div>
    );
}