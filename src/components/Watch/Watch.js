import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    const increaseSteps = () => {
        // const newStepsCount = steps + 1;
        setSteps(steps + 1);
        // console.log(steps);
    }

    useEffect(() => {
        console.log(steps);
    }, [steps])
    return (
        <div>
            <h1>This is My smart Watch</h1>
            <h3>My current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Start</button>
            <button>Stop</button>
        </div>
    );
};

export default Watch;