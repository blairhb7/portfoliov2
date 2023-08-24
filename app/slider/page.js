"use client"
import React, { useEffect, useState } from 'react'
import data, { slides } from '../Data'
import { features } from 'process'

const page = () => {

const [pic, setPic] = useState(slides)
const [index, setIndex] = useState(0)



const next = () => {
    setIndex((newSlide) => {
        const result = (newSlide + 1) % pic.length;
        return result
    })
}

const prev = () => {
    setIndex((newSlide) => {
        const result = (newSlide - 1 ) % pic.length;
        return result
    })
}


  return (
   <div className=" overflow-hidden relative h-screen bg-blue-500 ">
    {pic.map((slide, slideIndex) =>{
        const {id, pic, title, disc, link} = slide
        return (
            <div key={id} style={{transform:`translateY(${100 * (slideIndex - index)}%)`}} className=" transition-all ease-linear duration-500 overflow-hidden flex flex-col  h-screen absolute w-screen justify-center items-center">
                <div className="text-9xl text-white">{title}</div>
                <div className=" gap-5 m-1">
                    <button onClick={next} className="bg-black w-[200px] mx-1 text-white">next</button>
                    <button onClick={prev} className="bg-black w-[200px] text-white">back</button>
                </div>
            </div>
        )
    })}
   </div>
  )
}

export default page