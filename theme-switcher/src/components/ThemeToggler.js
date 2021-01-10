import React,{useContext} from 'react'
import Context from "../context/Context";

const ThemeToggler = () => {

    const [theme,setTheme] = useContext(Context);
    return (
        <div onClick={()=>setTheme(theme==="light"?"dark":"light")}>
            <span>{theme}</span>
        </div>
    )
}

export default ThemeToggler;
