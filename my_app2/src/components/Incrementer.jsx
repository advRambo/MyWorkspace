import React, { useState } from "react";
import Counter from "./Counter"
const Incrementer = () => {
    const [count, setCount] = useState(0);
    // const increase = () => {
    //     setCount(count + 1);
    // }
    function increase() {
        setCount(count + 1);
    }
    return (
        <>
            <Counter cVal={count} />
            <button onClick={increase}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </>
    )
}

export default Incrementer;