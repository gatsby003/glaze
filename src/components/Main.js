import React from "react";
import { useSelector } from "react-redux";
import styles from '../styles.module.css'
import MidBar from '../components/MidBar/MidBar'
import EndBar from '../components/EndBar/EndBar'
import TopBar from "./TopBar.js/TopBar";
const Main = () => {
    const backgrounds = useSelector(state => state.background)
    var imageUrl = ""
    if (backgrounds){
      console.log(backgrounds)
      imageUrl = backgrounds.today.url
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