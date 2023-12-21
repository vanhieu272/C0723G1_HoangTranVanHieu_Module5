import {useEffect, useState} from "react";

const Timer = () => {
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        const countdown = setInterval(() => {
            setTimer(prevTimer => {
                if (prevTimer > 0) {
                    return prevTimer - 1;
                } else {
                    clearInterval(countdown);
                    alert("Time's up");
                    return 0;
                }
            });
        }, 1000);

        return () => clearInterval(countdown);
    }, []);

    return (
        <div>
            <h1>Countdown: {timer}</h1>
        </div>
    );
};

export default Timer;
