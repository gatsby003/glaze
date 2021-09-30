import React from "react";
import Time from "./Time";
import Greeting from "./Greeting";

const TimeAndGreeting = () => {

    return (
        <div style={{display : "flex", flexDirection : "column", alignItems : "center", justifyContent: "flex-end"}}>
            <Time/> 
            <Greeting/>
        </div>
    )
}


export default TimeAndGreeting