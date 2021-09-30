import Clock from 'react-live-clock'
import {H} from 'react-headings'

const Time = () => {
    return (
        <H style={{margin : "0", color: "white", fontSize: "90px", fontWeight: "100" ,fontFamily: "monospace"}}>
        <Clock style={{letterSpacing : "-0.1em"}} format="h:mm" interval={1000}/>
        </H>
    )
}

export default Time