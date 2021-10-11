import React, {useState} from "react";
import { useSelector }from 'react-redux'
import styles from '../../styles.module.css'
import { changeQuote } from "../../reducers/quoteReducer"
import { useDispatch } from "react-redux";
import { NextPlan } from "@mui/icons-material";

const Quote = () => {

    const [style, setStyle] = useState(styles.quote_change_hidden)

    const quote = useSelector(state => state.quote)

    const dispatch = useDispatch()

    return (
        <div className={styles.quote}
            onMouseEnter={e => {
                console.log('mouse entered')
                e.preventDefault()
                setStyle(styles.quote_change_active)}}
            onMouseLeave={e => {
                e.preventDefault()
                setStyle(styles.quote_change_hidden)
                console.log(style)
            }}
            >
            <p className={styles.quote_text}>{quote}</p>
            <div className={style}>
                <NextPlan onClick={() => dispatch(changeQuote())}/>
            </div>
        </div>
    )
  }

export default Quote