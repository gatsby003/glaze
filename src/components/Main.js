import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

const Main = (props) => {
    const backgrounds = useSelector(state => state)

    const MainStyle = {
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

    if (backgrounds) {
      MainStyle.backgroundImage = `url(${backgrounds.today})`
    }else {
      // quick fix : react transitions coming soon
      MainStyle.backgroundImage = `url(${'https://miro.medium.com/max/880/0*H3jZONKqRuAAeHnG.jpg'})`
    }

    return (
      <div style={MainStyle}>  
        {props.children}
      </div>
    )
}

export default Main