import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { AiOutlineDownload } from "react-icons/ai";
// import Foreground from './Foreground';
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, refrence }) {
  return (
    <>
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.2}} className="card w-[13%] bg-zinc-900 h-60 rounded-3xl text-white p-5 relative overflow-hidden mt-20 flex-shrink-0 ml-5">
        < FaRegFileAlt />
        <p className='mt-2 leading-[17px] font-semibold'>{data.desc}</p>
        <footer className='  bg-green-300/2 w-[100%] absolute bottom-0 left-0  '>
            <div className='flex items-center justify-between w-[100%] h-10 px-5 mb-5'>
            <p className='font-bold'>{data.fileSize}</p>
            <span className='bg-zinc-500 p-1 rounded-[50%]'>
              {data.close ? <IoMdClose/> : <AiOutlineDownload/>}           
            </span>
            </div>
            {
              data.tag.tagOpen ? (<div className={`tag w-full ${data.tag.tagColor === "red" ? "bg-red-600" : "bg-green-600"} h-10 flex items-center justify-center`}> 
                <h3 className='font-semibold'>{data.tag.tagDetails}</h3>
              </div>) : null
            }
            

        </footer>
    </motion.div>
    </>
  )
}

export default Card