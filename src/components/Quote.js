import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const Quote = () => {
    const [quote, setQuote] = useState("");

    useEffect(() => {
      const url = "https://glaze-api.herokuapp.com/quote/"
      const getQuote = async () => {
        const result = await axios.get(url)
        console.log(result)
        localStorage.setItem("quoteForToday", result.data)
        setQuote(result.data)
      }
      if (localStorage.getItem("quoteForToday")){
        setQuote(localStorage.getItem("quoteForToday"))
      }else {
        getQuote()
      }
    }, [])

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