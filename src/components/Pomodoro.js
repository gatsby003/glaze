import React from 'react'
import Clock from 'react-live-clock'
import styles from '../styles.module.css'

const Pomodoro = ({showPomodoro}) => {
    if (showPomodoro){
        return (
            <div className={styles.clock_container_visible}>
            <h1 style={{margin : "0", color: "white", fontSize: "120px", fontWeight: "100" ,fontFamily: "monospace"}}>
                <Clock style={{letterSpacing : "-0.1em"}} format="mm:ss" ticking={true} />
            </h1>
            </div>
        )
    }else {
        return (null)
    }
}



export default Pomodoro
