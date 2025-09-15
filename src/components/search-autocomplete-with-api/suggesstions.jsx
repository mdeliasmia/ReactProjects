

export default function Suggesstions({ data, handleClick }) {

    return (
        <div>
            <ul>
                {
                    data && data.length
                        ? data.map((item, index) => <li onClick={handleClick} key={index}>
                            {item}
                        </li>
                        ) : null
                }
            </ul>
        </div>
    );
}