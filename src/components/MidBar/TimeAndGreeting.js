import React, { useState }from "react";
import Time from "./Time";
import Greeting from "./Greeting";
import Pomodoro from "../Pomodoro"
import styles from '../../styles.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { AccessAlarm } from "@mui/icons-material";


const TimeAndGreeting = () => {
    const [leftstyle, setRightStyle] = useState(styles.clock_left_hidden)
    const [rightstyle, setLeftStyle] = useState(styles.clock_right_hidden)
    const [toggleStyle, setToggleStyle] = useState("hidden")
    const [clockType, setClockType] = useState("default")

    const [clock, setClock] = useState(true)
    const [pomodoro, setPomodoro] = useState(false)


    const handleToggle = (event, clockType) => {
        console.log(clockType)
        setClockType(clockType)
        if (clockType == 'default'){
            setClock(true)
            setPomodoro(false)
        }else if (clockType == 'pomodoro') {
            setClock(false)
            setPomodoro(true)
        }

    }

    return (
        <div className={styles.centerBar}>
            <div className={styles.clock}
                onMouseEnter={e => {
                    setLeftStyle(styles.clock_left_active)
                    setRightStyle(styles.clock_right_active)
                }}
                onMouseLeave={e => {
                    setLeftStyle(styles.clock_left_hidden)
                    setRightStyle(styles.clock_right_hidden)
                    setToggleStyle("hidden")
                }}
            >
                <div className={leftstyle}>
                    <AccessTimeIcon onClick={() => {
                        toggleStyle === "hidden" ? setToggleStyle("visible") : setToggleStyle("hidden") 
                    }}                    
                    />
                    <div style={{visibility : toggleStyle}}>
                        <ToggleButtonGroup
                            color="primary"
                            value={clockType}
                            exclusive
                            onChange={handleToggle}
                        >
                            <ToggleButton value="pomodoro">
                                <AccessAlarm/>
                            </ToggleButton>
                            <ToggleButton value="default">
                                <AccessTimeIcon/>
                            </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </div>
                <Time showClock={clock}/>
                <Pomodoro showPomodoro={pomodoro}/>
                <div className={rightstyle}>
                    {/* <MoreHorizIcon/> */}
                </div>
            </div>
            <Greeting/>
        </div>
    )
}


export default TimeAndGreeting