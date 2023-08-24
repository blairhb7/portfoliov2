"use client"
import React, { useEffect, useState } from 'react'
import data, { slides } from '../Data'
import { link } from 'fs'
import { url } from 'inspector'
import { title } from 'process'
import Nav from '../components/Nav'
import Link from 'next/link'
import transition from '../components/transition'
import { motion } from "framer-motion"
import Image from 'next/image'





const Page = () => {
  const [featureProjects, setFeatureProjects] = useState<any>(slides)
  const [index, setIndex] = useState(0)

  const next = () => {
    setIndex((newSlide) => {
        const result = (newSlide + 1) % featureProjects.length;
        return result
    })
}

const prev = () => {
    setIndex((newSlide) => {
        const result = (newSlide - 1 + featureProjects.length) % featureProjects.length;
        return result
    })
}




useEffect(() => {
  let slider = setInterval(() => {
    setIndex((oldIndex) => {
      const result = (oldIndex + 1) % featureProjects.length;
      return result;
    });
  }, 11000);
  return () => {
    clearInterval(slider);
  };
}, [index]);


  return (
    <>
    <motion.main initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} className=" relative h-full ">
      
      <Nav/>
      <div className=" xl:hidden s w-full pb-10 bg-black">
          <ul className=" flex p-2 fixed z-50 bg-black bg-opacity-50 font-headline w-full gap-6 text-[0.7em] sm:text-sm md:text-base">
            <Link href={'/'}><li className=" text-white">Experience</li></Link>
            <Link href={'/ProjectPage'}><li className=" text-white">Featured Projects</li></Link>
            <Link href={'/Archive'}><li className=" text-white">Project Archive</li></Link>
            <Link href={'/Contact'}><li className=" text-white">Contact</li></Link>
          </ul>
      </div>
   
        {featureProjects.map(( feature: {color:string, pic:string, firstline:string, secondline:string, thirdline:string, forthline:string, length:number, id:number, vid:string, title:string, date:string, disc:string, React:string, Next:string, Javascript:string, Typescript:string, Tailwind:string, Sanity:string, Vercel:string, Linksite:string}, slideIndex:number) =>{
          const {id, color, vid, pic, title, firstline, secondline, thirdline, forthline, date, React, Next, Javascript, Typescript, Tailwind, Sanity, Vercel, Linksite} = feature

          let postion = 'nextSlide'
          if (slideIndex === index) {
            postion = 'activeSlide'
          }
          if (slideIndex === index -1 || (index === 0 && slideIndex === featureProjects.length -1)){
            postion = 'lastSlide'
          }


          return (
            <div  key={slideIndex}   className="grid grid-cols-1 lg:grid-cols-2  absolute transition-all ease-linear duration-700   ">
              <div  style={{ opacity: slideIndex === index ? 1 : 0, visibility: slideIndex === index ? 'visible' : 'hidden',}} className="  flex justify-center transition-all ease-linear duration-1000 h-full  ">
              <motion.h1  initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} className="flex  justify-center absolute pt-[4%] text-3xl uppercase text-title text-white  z-50">{title}</motion.h1>
              <motion.h2  initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} className="flex text-xs justify-center absolute text-white pt-[12%] z-50 lg:hidden">Scroll Down For More</motion.h2>
              <video src={vid} autoPlay loop muted className="LandingVid  "></video>
              </div>
              
              <div  style={{ opacity: slideIndex === index ? 1 : 0, visibility: slideIndex === index ? 'visible' : 'hidden'}} className=" h-full grid grid-cols-1 justify-between transition-all ease-linear duration-1000   ">
              <div className=" flex  items-end gap-2 justify-end absolute opacity-90 hover:opacity-90  z-30 px-14 py-4  ">
                  <div onClick={next} className=" cursor-pointer    duration-1000 flex justify-center items-center">
                    <motion.img  initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 10, ease: [0.22, 1, 0.36, 1]}} src={"/down.png" } alt={""} className=" w-8 h-8" />
                    
                  </div>
                  <div onClick={prev} className="cursor-pointer   duration-1000 flex justify-center items-center">
                    <motion.img  initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 10, ease: [0.22, 1, 0.36, 1]}} src="/up.png" alt="" className=" w-8 h-8" />
                  </div>
              </div>
                <div  className="flex-col flex  bg-black text-[#fff] h-[890px] md:h-fits 2xl:h-screen  lg:pt-10 lg:pb-64 2xl:pt-80 pt-10 overflow-y-scroll scrollbar-hide   px-6 lg:px-8">
                    <motion.h1 initial={{y:-100}} animate={{y: 10}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} style={{color}} className=" text-4xl xl:text-8xl py-5 font-serif uppercase font-semibold">{title}</motion.h1>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} className=" text-sm lg:text-base  lg:font-normal lg:w-[90%] 2xl:w-[65%] py-2">{firstline}</motion.p>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} className=" text-sm lg:text-base  lg:font-normal  lg:w-[90%] 2xl:w-[65%] py-2">{secondline}</motion.p>
                    <motion.p initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} className=" text-sm lg:text-base  lg:font-normal  lg:w-[90%] 2xl:w-[65%] py-2">{thirdline}</motion.p>
                    <motion.hr initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} className="w-[85%] my-5" />
                    <a href={Linksite} style={{color}} className=" z-50 cursor-pointer"><h2 className=" cursor-pointer text-2xl py-5 lg:py-8 font-semibold duration-500 hover:underline underline-offset-8 hover:translate-x-3">Visit Site</h2></a>
                    <motion.a initial={{y:100}} animate={{y: -10}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} href={Linksite} className=' cursor-pointer z-50'><img src={pic} alt="" className="  cursor-pointer w-[74%] lg:max-w-[75%] 2xl:w-[55%] overflow-hidden " /></motion.a>
                </div>
                  
              </div>
              
            </div>
          )
          })
        }
    </motion.main>
    </>
  )
}

export default transition (Page)