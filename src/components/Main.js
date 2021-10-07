import React from "react";
import { useSelector } from "react-redux";

const Main = (props) => {
    const backgrounds = useSelector(state => state.background)

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
      MainStyle.backgroundImage = ""
    }

    return (
      <div style={MainStyle}>  
        {props.children}
      </div>
    )
}

export default Main