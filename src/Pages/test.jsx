import React, { useMemo, useState } from 'react'

function TestCom({open}) {
  const [load, setLoad] = useState(false)
  useMemo(() =>{
setTimeout(() => {
  setLoad(true)
}, 2000);
  })
  return (
    <div 
    className={` fixed h-[100vh] top-0 left-0  z-[-1] ${load && open}`}
    style={{backgroundColor: "#191919"}}
    ></div>
  )
}

export default TestCom