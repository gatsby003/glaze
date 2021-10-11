import React from "react";
import Quote from "./Quote";
import styles from '../../styles.module.css'
import Credit from "./Credit";

const EndBar = () => {
    return (
        <div className={styles.endBar}>
            <Credit />
            <Quote/>
            <div style={{display : "flex", width: "50px"}}>
            </div>
        </div>
    )
}

export default EndBar