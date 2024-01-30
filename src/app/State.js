import React, { useEffect, useState } from 'react';

const State = () => {
    const calculateTimeLeft = () => {
        const difference = new Date("2024-12-31T23:59:59") - new Date();
        return {
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((difference % (1000 * 60)) / 1000)
        };
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const intervalId = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div>
           
            <p className='text-xl'>Countdown: {timeLeft.days} Days, {timeLeft.hours} Hours, {timeLeft.minutes} Minutes, {timeLeft.seconds} Seconds</p>
        </div>
    );
};

export default State;