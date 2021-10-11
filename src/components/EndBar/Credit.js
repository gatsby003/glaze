import React, { useState } from "react";
import { useSelector } from "react-redux";
import { changeBg } from "../../reducers/backgroundReducer";
import {useDispatch} from 'react-redux'
import styles from "../../styles.module.css" 
import {loaderOn } from "../../reducers/loader";
import { NextPlan } from "@mui/icons-material";



const Credit = () => {
    const state = useSelector(state => state.background)
    const [style, setStyle] = useState(styles.change_bg_hidden)
    const dispatch = useDispatch()

    if (state){
        const user = state.user
        return (
            <div className={styles.credit}
                onMouseEnter={e => setStyle(styles.change_bg_active)}
                onMouseLeave={e => setStyle(styles.change_bg_hidden)}
                >
                <p className={styles.credit_text}>Unsplash</p>
                <p className={styles.credit_text}>{user.username}</p>
                <div className={style}>
                <NextPlan onClick={() => {
                    dispatch(loaderOn())
                    dispatch(changeBg())}}/>
                </div>
            </div>
        )
    }else {
        return (<></>)
    }

}

export default Credit