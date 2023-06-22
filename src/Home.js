import React, { useState } from "react";
const Home=()=>{
    const date=new Date();
    var ti=date.toLocaleTimeString();
    const [time,settime]=useState(ti);

    const udp=()=>{
        ti=new Date().toLocaleTimeString();
        settime(ti);
    };

    setInterval(udp, 1000);
    return (
    <div className="mid">
        <h3>{time}</h3>
    </div>
    )
}

export default Home;