import React from 'react'

function TestCom({open}) {
  return (
    <div className={`absolute h-[100vh] top-0 left-0 bg-slate-800 z-[-1] ${open}`}></div>
  )
}

export default TestCom