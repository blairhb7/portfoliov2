"use client"
import React, { useState } from 'react'
import projectArchive from '../ProjectData'
import Nav from '../components/Nav'
import { type } from 'os'
import { link } from 'fs'
import Link from 'next/link'
import transition from '../components/transition'
import {motion} from 'framer-motion'

 

const Archive = () => {

  const [archive, setSrchive] = useState(projectArchive)


  return (
    <>
    <Nav/>
    <motion.main initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} className=" flex flex-col h-full ">
      <div className=" xl:hidden s w-full bg-black">
          <ul className=" flex p-2 fixed z-50 bg-black bg-opacity-80 font-headline w-full gap-4 text-xs sm:text-sm md:text-base">
            <Link href={'/'}><li className=" text-white">Experience</li></Link>
            <Link href={'/ProjectPage'}><li className=" text-white">Featured Projects</li></Link>
            <Link href={'/Archive'}><li className=" text-white">Project Archive</li></Link>
            <Link href={'/Contact'}><li className=" text-white">Contact</li></Link>
          </ul>
      </div>
      <motion.section initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 7, ease: [0.22, 1, 0.36, 1]}} className="">
        <h1 className=" text-4xl md:text-7xl w-full uppercase Name text-orange-500 lg:text-black  p-10 sm:p-28">Project Archive</h1>
        <h4 className=" text-xs text-black uppercase lg:hidden lg:text-black  p-10 sm:p-8">For best experience view on a Desktop</h4>
      </motion.section>
      <section className="  lg:px-[4%] ">
        <div className=" grid grid-cols-3 lg:grid-cols-4 px-8  gap-6 h-full pb-6 ">
          <h2 className=" lg:text-3xl font-semibold">Year</h2>
          <h2 className=" lg:text-3xl font-semibold">Project</h2>
          <h2 className=" lg:text-3xl hidden md:flex font-semibold">Built With</h2>
          <h2 className=" lg:text-3xl font-semibold">Link</h2>
          
        </div>
        {
          archive.map((Projects) => {
            const {year, project, techstack, Link, id, color } = Projects
            return (
              <>
              <div key={id} className=" grid grid-cols-3 lg:grid-cols-4 px-8 lg:px-8  py-6 gap-4 lg:gap-8  hover:text-white hover:bg-black duration-500 hover:rounded-lg">
                <h2  className=" text-sm lg:text-lg font-medium">{year}</h2>
                <h2   className={` text-xs  lg:text-lg font-medium uppercase  `}>{project}</h2>
                <ul className="  hidden md:visible lg:grid grid-cols-1 xl:inline-flex  w-[70%] xl:w-full flex-wrap items-center text-[.7em]  px-8 2xl:text-sm gap-3">
                      <li  className=" bg-cyan-500 text-white px-2 mb-1  rounded-lg">{techstack[0]}</li>
                      <li className=" bg-black text-white px-2 mb-1  rounded-lg">{techstack[1]}</li>
                      <li className=" bg-cyan-600 text-white px-2 mb-1  rounded-lg">{techstack[2]}</li>
                      <li className=" bg-blue-500 text-white px-2  mb-1  rounded-lg">{techstack[3]}</li>
                      <li className= {`bg-[#f55142] text-white px-2 mb-1  rounded-lg ${id === 5  ? 'hidden' : 'visble'}`}>{techstack[4]}</li>
                </ul>
                <a href={Link}><h2 className=" flex flex-wrap w-fit font-bold text-[.5em] xl:text-sm lg:pl-4">{Link}</h2></a>
              </div>
              <hr className=" " />
              </>
            )
          })
        }
      </section>
    </motion.main>
    </>
  )
}

export default transition(Archive)