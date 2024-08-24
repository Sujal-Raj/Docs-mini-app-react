import React from 'react'

function Background() {
  return (
    <>
    <div className='h-screen w-full bg-white-900 relative'>
          <div className="nav text-zinc-900 h-14 flex items-center justify-center font-semibold " >
            <p>Documents</p>
          </div>
            <h1 className='text-zinc-900 font-semibold text-[10vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>Docs.</h1>
    </div>
    </>
  )
}

export default Background