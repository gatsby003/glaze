import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles.module.css'
import MidBar from '../components/MidBar/MidBar'
import EndBar from '../components/EndBar/EndBar'
import TopBar from "./TopBar.js/TopBar";
import { loaderOff } from "../reducers/loader";

const Main = () => {
    const backgrounds = useSelector(state => state.background)
    const dispatch = useDispatch()
    const [imageUrl, setImageUrl] = useState("")


    useEffect(() => {
      if (backgrounds != null){
        setImageUrl(backgrounds.url)
        dispatch(loaderOff())
      }
    }, [backgrounds, dispatch])


    return (
      <div style={{backgroundImage : `url(${imageUrl})`}} className={styles.main} >
        <TopBar/>
        <div className={styles.midBar}></div>
        <MidBar />
        <div className={styles.midBar}>
        </div>
        <EndBar />
      </div>
    )
}

export default Main