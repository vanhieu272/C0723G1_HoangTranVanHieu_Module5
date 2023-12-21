import {useState} from "react";

const CounterComponentCustom = () => {
    const [counter, setCounter] = useState({counter1: 0, counter2: 0});

    const incrementCounter1 = () => {
        setCounter({...counter, counter1: counter.counter1 + 1});
    }

    const incrementCounter2 = () => {
        setCounter({...counter, counter2: counter.counter2 + 2});
    }
    return (
        <>
            <h1>Counter 1: {counter.counter1}</h1>
            <button onClick={incrementCounter1}>Increment Counter 1</button>
            <h1>Counter 2: {counter.counter2}</h1>
            <button onClick={incrementCounter2}>Increment Counter 2</button>
            </>)
}

export default CounterComponentCustom;