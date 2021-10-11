import Clock from 'react-live-clock'
import style from '../../styles.module.css'

const Time = () => {
    return (
        <div style={{display : "flex", alignSelf : 'center', paddingLeft : "25px", paddingRight : "25px"}}>
        <h1 style={{margin : "0", color: "white", fontSize: "120px", fontWeight: "100" ,fontFamily: "monospace"}}>
          <Clock style={{letterSpacing : "-0.1em"}} format="h:mm" interval={1000} ticking={true}/>
        </h1>
        </div>
    )
}

export default Time