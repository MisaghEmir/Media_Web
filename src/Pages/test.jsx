import React from 'react'

function TestCom({open}) {
  return (
    <div 
    className={` fixed h-[100vh] top-0 left-0  z-[-1] ${open}`}
    style={{backgroundColor: "#191919"}}
    ></div>
  )
}

export default TestCom