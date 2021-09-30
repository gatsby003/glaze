import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = (props) => {
    const [background, setBackground] = useState("")

    useEffect(async () => {

      const today = new Date()
      const tomorrow = new Date()
      const yesterday = new Date();

      tomorrow.setDate(today.getDate() + 1);
      yesterday.setDate(today.getDate() - 1);
      
      const getPhoto = async () => {
        const result = await axios.get("https://glaze-api.herokuapp.com/background")
        const todayUrl = result.data.today.urls.full
      
        const cache = await caches.open("glaze-cache")
        await cache.add(todayUrl)
        localStorage.setItem(today.toDateString(), todayUrl)
        setBackground(todayUrl)  
      }

      const setTomorrow = async () => {
        const result = await axios.get("https://glaze-api.herokuapp.com/background")

        const tomorrowUrl = result.data.tomorrow.urls.full

        const cache = await caches.open("glaze-cache")
        await cache.add(tomorrowUrl)
        console.log(tomorrow.toDateString())
        localStorage.setItem(tomorrow.toDateString(), tomorrowUrl)
      }  

      if (localStorage.getItem(today.toDateString())){
        setBackground(localStorage.getItem(today.toDateString()))
        localStorage.removeItem(yesterday.toDateString())
      }else {
        // setting for first time 
        getPhoto();
      }

      // sets tomorrows photo if not already set
      if (!localStorage.getItem(tomorrow.toDateString())){
        setTomorrow();
      }
            
    }, [])




    const MainStyle = {
      src : {background},
      backgroundImage : `url(${background})`,
      height: "100vh",
      margin: "0%",

      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",

      display : "flex",
      flexDirection : "column",
      justifyContent : "space-between",
      alignItems : "center"

    }

    return (
      <div style={MainStyle}>  
        {props.children}
      </div>
    )
}

export default Main