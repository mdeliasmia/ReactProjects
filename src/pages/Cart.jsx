import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile/CartTile";


export default function Cart() {

    const [totalCart, setTotalCart] = useState(0);
    // const state = useSelector(state => state);
    const { cart } = useSelector(state => state);

    useEffect(() => {
        setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
    }, [cart]);

    // console.log(state);
    // console.log(cart, totalCart);
    return (
        <div className="flex justify-center items-center">
            {
                cart && cart.length ? (
                    <div className="flex justify-center items-center lg:flex-row md:flex-col sm:flex-col">
                        <div className="min-h-[80vh] grid md:grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
                            <div className="flex flex-col justify-center items-center p-3">
                                {
                                    cart.map((cartItem, index) => <CartTile key={index} cartItem={cartItem} />)
                                }
                            </div>
                        </div>
                        <div className="w-[300px]">
                            <div className="flex flex-col justify-center items-end p-5 space-y-5 mt-14">
                                <h1 className="font-bold text-lg text-red-800">Your Cart Summary</h1>
                                <p>
                                    <span className="text-gray-800 font-bold">
                                        Total Item
                                    </span>
                                    <spna>
                                        :{cart.length}
                                    </spna>
                                </p>
                                <p>
                                    <span className="text-gray-800 font-bold">
                                        Total Amount
                                    </span>
                                    <spna>
                                        :{totalCart}
                                    </spna>
                                </p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="min-h-[80vh] flex flex-col  items-center justify-center">
                        <h1 className="text-gray-800 font-bold text-xl mb-2">Your Cart is Empty</h1>
                        <Link to={'/'}>
                            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4 uppercase">Shop Now</button>
                        </Link>
                    </div>
                )
            }
        </div>
    );
}