import React from "react";
import { useSelector }from 'react-redux'
import styles from '../../styles.module.css'

const Quote = () => {
    const quote = useSelector(state => state.quote)

    return (
        <div className={styles.quote}>
            <p className={styles.quote_text}>{quote}</p>
        </div>
    )
  }

export default Quote