
import { useEffect, useState } from "react";

// rgb(25, 45, 76)
export default function RandomColor() {

    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {
        return Math.floor(Math.random() * length);
    }

    function handleCreateRandomHexColor() {
        // #456789
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
        let hexColor = '#';

        for (let i = 0; i < 6; i++) {
            hexColor += hex[randomColorUtility(hex.length)];
        }
        // console.log(hexColor);
        setColor(hexColor);
    }
    function handleCreateRandomRgbColor() {
        // rgb(255, 255, 255)
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r},${g},${b})`);
        // console.log(color);
    }
    useEffect(() => {
        if (typeOfColor === 'rgb') handleCreateRandomRgbColor();
        else handleCreateRandomHexColor();
    }, [typeOfColor]);
    return (
        <div style={{
            width: '100vw',
            height: '100vw',
            background: color,
        }}>
            <div className="container">
                <button onClick={() => setTypeOfColor('hex')}>Create Hex Color</button>
                <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
                <button onClick={
                    typeOfColor === 'hex'
                        ? handleCreateRandomHexColor
                        : handleCreateRandomRgbColor
                }>Generate Random Color</button>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: '#fff',
                    fontSize: '30px',
                    marginTop: '50px'
                }}>
                    <h3>{typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}</h3>
                    <h2>{color}</h2>
                </div>
            </div>
        </div>
    );
}