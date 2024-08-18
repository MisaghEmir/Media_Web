import React from 'react'
import { useContext } from "react";
import { themeModeContext } from "../Context/themeContext";

function Button() {
    const themeMode = useContext(themeModeContext);
  return (
    <div className='text-black dark:text-white text11 cursor-pointer' onClick={themeMode.toggleLoginMode}>
        Send
    </div>
  )
}

export default Button