import React from "react";
import { useSelector }from 'react-redux'
import styles from '../../styles.module.css'
import { changeQuote } from "../../reducers/quoteReducer"
import { useDispatch } from "react-redux";

const Quote = () => {
    const quote = useSelector(state => state.quote)

    const dispatch = useDispatch()

    return (
        <div className={styles.quote}>
            <p className={styles.quote_text}>{quote}</p>
            <button onClick={() => dispatch(changeQuote())}>New</button>
        </div>
    )
  }

export default Quote