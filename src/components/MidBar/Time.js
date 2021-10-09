import Clock from 'react-live-clock'
import {H} from 'react-headings'
import style from '../../styles.module.css'

const Time = () => {
    return (
        <div style={{display : "flex", alignSelf : 'center'}}>
        <H style={{margin : "0", color: "white", fontSize: "120px", fontWeight: "100" ,fontFamily: "monospace"}}>
          <Clock style={{letterSpacing : "-0.1em"}} format="h:mm" interval={1000}/>
        </H>
        </div>
    )
}

export default Time