import {useState} from "react";

function Counter1() {
    const [count, setCount] = useState(0);
    const changeValue = (count) => {
        setCount((prevState) => prevState + 1);
    }

    return (
        <>
            <p>Count: <span>{count}</span> </p>
            <button onClick={changeValue}>
                PLUS 1
            </button>
        </>
    )
}

export default Counter1;