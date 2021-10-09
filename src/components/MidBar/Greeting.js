import React from "react";
import { H } from "react-headings";
import styles from '../../styles.module.css'

const Greeting = () => {
  return (
    <div style={{display : "flex", alignSelf : 'center'}}>
    <H level="3" className={styles.preGreeting}>
      {`Good evening Ganesh`}
    </H>
    </div>
  )
}

export default Greeting