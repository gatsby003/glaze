import React from "react";
import Time from "./Time";
import Greeting from "./Greeting";
import styles from '../../styles.module.css'

const TimeAndGreeting = () => {

    return (
        <div className={styles.centerBar}>
            <Time/>
            <Greeting/>
        </div>
    )
}


export default TimeAndGreeting