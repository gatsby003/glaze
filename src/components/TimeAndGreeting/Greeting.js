import React from "react";
import { H } from "react-headings";
import { useState, useEffect } from "react";
const Greeting = () => {
    const [name, setName] = useState("")
    const [isName, setIsName] = useState(false)

    useEffect(() => {
      const name = localStorage.getItem("userName")
      if (name){
        setName(name)
        setIsName(true)
      }
    }, [])
    
    const greetingStyle = {
      color : "white",
      marginTop : "-8px",
      width : "50%",
      fontSize : "30px",
      background : "none",
      outline: "none",
      border : "none",
      textAlign : "center",
      borderBottom : "2px solid white", 
      fontFamily : "monospace"     
    }

    const handleKeyDown = (e) => {
      if (e.key === 'Enter'){
        setIsName(true);
        localStorage.setItem('userName', name);
      }
    }

    if (isName){
      const _ = {
        color : "white",
        textAlign : "center",
        fontSize : "50px",
        fontFamily : "sans",
        fontWeight : "500",
        letterSpacing : "-0.05em",
        wordSpacing : "-0.1em",
        marginTop : "0px"
      }
      return (
        <H level="3" style={_}>
          {`Good evening ${name}`}
        </H>
      )
    }else {
      return (
        <div style={{display : "flex",
        flexDirection : "column",
        alignItems : "center",
        marginTop: "5px",
        justifyContent : "flex-start"}}>
          <H  style={{color : "white", fontSize : "35px", marginTop : "0px", fontWeight: 200, fontFamily : "monospace"}}>Whats your name macha?</H>
          <input type="text" style={greetingStyle} value={name} onChange={e => setName(e.target.value)} onKeyDown = {handleKeyDown}/>
        </div>
      )
    }
}

export default Greeting