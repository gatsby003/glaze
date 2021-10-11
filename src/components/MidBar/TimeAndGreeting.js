import React, { useState }from "react";
import Time from "./Time";
import Greeting from "./Greeting";
import styles from '../../styles.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const TimeAndGreeting = () => {
    const [leftstyle, setRightStyle] = useState(styles.clock_left_hidden)
    const [rightstyle, setLeftStyle] = useState(styles.clock_right_hidden)
    const [showMenu, setShowMenu] = useState(false)

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
                }}
            >
                <div className={leftstyle}>
                    <AccessTimeIcon onClick= {() => setShowMenu(!(showMenu))}/>
                </div>
                <Time/>
                <div className={rightstyle}>
                    <MoreHorizIcon/>
                </div>
            </div>
            <Greeting/>
        </div>
    )
}


export default TimeAndGreeting