import React from "react";
import { useSelector } from "react-redux";
import { changeBg } from "../../reducers/backgroundReducer";
import {useDispatch} from 'react-redux'
import styles from "../../styles.module.css" 
import { loaderOff, loaderOn } from "../../reducers/loader";

const Credit = () => {
    const state = useSelector(state => state.background)

    const dispatch = useDispatch()

    if (state){
        const user = state.user
        return (
            <div className={styles.credit}>
                <p className={styles.credit_text}>Unsplash</p>
                <p className={styles.credit_text}>{user.username}</p>
                <button onClick={() => {
                    dispatch(loaderOn())
                    dispatch(changeBg())}}>Change</button>
            </div>
        )
    }else {
        return (<></>)
    }

}

export default Credit