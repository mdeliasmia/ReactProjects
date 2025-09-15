import { useEffect } from "react";

export default function useOutsideClick(ref, handler) {

    useEffect(() => {
        function listener(event) {
            if (!ref.current || ref.current.contains(event.target)) {
                return
            }
            handler(event);
        };

        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);

        return () => {
            document.addEventListener('mousedown', listener);
            document.addEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}