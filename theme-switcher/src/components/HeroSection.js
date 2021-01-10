import React,{useContext} from 'react'
import Context from "../context/Context";
import ColorTheme from "../colorTheme";

const HeroSection = () => {

    const [theme,setTheme] = useContext(Context);
    const themeCss=ColorTheme[theme];
    return (
        <div style={themeCss}> 
            <h1>Theme</h1>
            <button onClick={()=>setTheme(theme==="light"?"dark":"light")} >click me</button>
        </div>
    )
}

export default HeroSection
