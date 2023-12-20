import {useState} from "react";

function Counter2(){
    const [count, setCount] = useState(0);
    const changeValue = () => {
        setCount((prevState) => prevState + 2);
    }

    return(
        <>
            <p>Count: <span>{count}</span> </p>
            <button onClick={changeValue}>
                PLUS 2
            </button>
        </>
    )
}

export default Counter2;