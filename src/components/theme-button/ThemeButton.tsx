import { useEffect, useState } from "react";
import "./index.scss";
import { motion } from "framer-motion";
export interface ThemeButtonProps {
    readonly theme:string
    readonly setTheme:(theme_to_set:string)=>void
}
export function ThemeButton({theme,setTheme}:ThemeButtonProps) {
    const [buttonState,setButtonState]=useState(theme==="light"?"off":"on");
    useEffect(()=>{
        setTheme(buttonState==="on"?"dark":"light");
    },[buttonState,setTheme])
    return (
        <motion.div className={`${buttonState}-button`} onClick={()=>{setButtonState(buttonState==="on"?"off":"on")}} layout>
            <motion.div className="circle"></motion.div>
        </motion.div>
    )
}