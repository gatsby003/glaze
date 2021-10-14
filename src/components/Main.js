import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from '../styles.module.css'
import MidBar from '../components/MidBar/MidBar'
import EndBar from '../components/EndBar/EndBar'
import TopBar from "./TopBar.js/TopBar";
import { loaderOff } from "../reducers/loader";

const Main = () => {
    const backgrounds = useSelector(state => state.background)
    const dispatch = useDispatch()


    useEffect(() => {
      if (backgrounds != null){
        dispatch(loaderOff())
      }
    }, [backgrounds, dispatch])


    var imageUrl = ""
    if (backgrounds){
      imageUrl = backgrounds.url
    }
    console.log(imageUrl)

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