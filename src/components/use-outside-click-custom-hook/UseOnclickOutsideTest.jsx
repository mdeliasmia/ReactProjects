import { useRef, useState } from "react";
import useOutsideClick from "./useOutsideClick";


export default function UseOnclickOutsideTest() {

    const ref = useRef();
    useOutsideClick(ref, () => { setShowContent(false) });
    useOutsideClick(ref, () => { setShowContent(false) });
    const [showContent, setShowContent] = useState(false);
    // const [] = useState();


    return (
        <div>
            <h1>This is UseOnclickOutsideTest Custom Hook</h1>
            {showContent ? (
                <div ref={ref} style={{ background: 'gray', padding: '20px' }}>
                    <h1>This is a random content</h1>
                    <p>
                        Please click outside of this to close this. It won't close if you
                        click inside of this content
                    </p>
                </div>
            ) : (
                <button onClick={() => setShowContent(true)}>Show Content</button>
            )}
        </div>
    );
}