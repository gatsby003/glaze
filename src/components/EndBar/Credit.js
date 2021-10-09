import React from "react";
import { useSelector } from "react-redux";
import styles from "../../styles.module.css" 

const Credit = () => {
    const state = useSelector(state => state.background)

    if (state){
        const user = state.today.user
        return (
            <div className={styles.credit}>
                <p className={styles.credit_text}>Unsplash</p>
                <p className={styles.credit_text}>{user.username}</p>
            </div>
        )
    }else {
        return (<></>)
    }

}

export default Credit