import React, { useRef, useState } from 'react'
import Card from './Card'

// const data = [{
//  desc:"Hello my name is sujal raj and this is my react project.",
// }]

// const [desc, setCount] = useState("Hello my name is sujal raj and this is my react project.");

function Foreground() {
  const ref = useRef(null);
  const data = [
    {desc:"Hello my name is sujal",fileSize:"0.4mb", close:true, tag:{tagOpen:false,tagDetails:"Download Now",tagColor:"gren"}},
    {desc:"this is my react project",fileSize:"0.8mb", close:false, tag:{tagOpen:true,tagDetails:"Close Now",tagColor:"red"}},
    {desc:"give me some revies about it",fileSize:"0.7mb", close:false, tag:{tagOpen:true,tagDetails:"Download Now",tagColor:"green"}},
    
  ]
  return (
    <>
        <div ref = {ref} className='h-screen w-full absolute top-0 flex flex-wrap gap-[5px]'>
            {/* <Card/> */}
            {data.map((item,index)=>(
              <Card data={item} refrence={ref} />
            ))}
        </div>
    </>
  )
}

export default Foreground
