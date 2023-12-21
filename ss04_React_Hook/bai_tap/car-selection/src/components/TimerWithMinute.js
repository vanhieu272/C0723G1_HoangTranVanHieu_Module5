import {useEffect, useState} from "react";

const TimerWithMinute = () => {
    const [timer, setTimer] = useState({minute: 1, second: 60});

    useEffect(() => {
        const countDown = setInterval( () => {
            setTimer(prevTimer => {
                if (prevTimer.second > 0) {
                    return {
                      ...prevTimer,
                        second: prevTimer.second - 1
                    }
                } else if (prevTimer.minute > 0) {
                    return {
                      ...prevTimer,
                        second: 59,
                        minute: prevTimer.minute - 1
                    }
                } else {
                    clearInterval(countDown);
                    alert("Time's up");
                    return {
                        minute: 0,
                        second: 0
                    }
                }
                }
            )
            }, 1000);
        return () => clearInterval(countDown);
    }, []);

    const formattedTime = `${timer.minute.toString().padStart(2, '0')}:${timer.second.toString().padStart(2, '0')}`;


    return (
        <div>
            <h1>Timer with minute</h1>
            <h1>Countdown: {formattedTime}</h1>
        </div>
    );
};

export default TimerWithMinute;
