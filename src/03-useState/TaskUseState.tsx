import React, { useState } from 'react';


const TaskUseState = () => {
    let [count, setCount] = useState(0);


    const handelClick = () => {
        setCount(++count);
    }

    const handelClear = () => {
        setCount(0);
    }


    return (
        <div style={{textAlign: 'center'}}>
            <h1>{count}</h1>
            <button onClick={handelClick}>Increase</button>
            <button onClick={handelClear}>Clear</button>
        </div>
    );
};

export default TaskUseState;
