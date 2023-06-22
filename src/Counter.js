import React, { useState } from "react";

const Counter=()=>{
    const [count,addcount]=useState(0);

    return (<div>
        <h1>{count}</h1>
        <button onClick={()=> addcount(count+1)}>click me</button>
    </div>)
}

export default Counter;