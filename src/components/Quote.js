import React from "react";
import { useSelector }from 'react-redux'
const Quote = () => {


    const quote = useSelector(state => state.quote)
    console.log(quote)
    const quoteStyle = {
      fontSize : "15px", 
      color : "white", 
      fontFamily : "monospace", 
      display: "flex", 
      flexDirection: "column", 
      alignContent : "center", 
      marginBottom : "10px",
      textAlign : "center",
      width: "50%"
    }
    return (
      <div style={quoteStyle}>{`${quote}`}</div>
    )
  }

export default Quote