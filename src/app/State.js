import React, { useEffect, useState } from 'react';

const State = () => {
    const calculateTimeLeft = () => {
        const difference = new Date("2024-05-17T11:59:59") - new Date();
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

        // Cleanup the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, [timeLeft]); // Add timeLeft as a dependency

    const [value, setValue] = useState('next-js')
    const changeValue = () => {
        setValue((prevValue) => (prevValue === 'next-js' ? 'javascript' : 'next-js'));
    }
    return (
        <main>

            <p className='text-xl'> Countdown = {timeLeft.days}: {timeLeft.hours} : {timeLeft.minutes}:  {timeLeft.seconds}</p>

            <section className='my-5'>
                <p className='text-2xl'>Hello {value}</p>
                <button onClick={changeValue} className='text-white bg-black px-3 py-2'>Change Value</button>
            </section>

        </main>
    );
};

export default State;