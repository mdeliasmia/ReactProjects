import { useEffect, useState } from "react";

export default function useLocalStorage(key, defaulyValue) {
    const [value, setValue] = useState(() => {
        let currentValue;
        try {
            currentValue = JSON.parse(localStorage.getItem(key) || String(defaulyValue));
        } catch (err) {
            console.log(err);
            currentValue = defaulyValue;
        }
        return currentValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}