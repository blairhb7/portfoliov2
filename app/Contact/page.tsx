"use client"
import Link from 'next/link'
import React from 'react'
import ContactForm from '../components/ContactForm'
import Nav from '../components/Nav'
import transition from '../components/transition'
import { m } from 'framer-motion'
import { motion } from "framer-motion"


const page = () => {
  return (
    <>
    <Nav/>
    <motion.main initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} exit={{opacity: 0}} className="grid grid-cols-1 lg:grid-cols-2  ">
    <div className=" lg:hidden  w-full bg-black">
          <ul className=" flex p-2 fixed z-50 bg-black bg-opacity-50 font-headline w-full gap-4 text-xs sm:text-sm md:text-base">
            <Link href={'/'}><li className=" text-gray-300">Experience</li></Link>
            <Link href={'/ProjectPage'}><li className=" text-gray-300">Featured Projects</li></Link>
            <Link href={'/Archive'}><li className=" text-gray-300">Project Archive</li></Link>
            <Link href={'/Contact'}><li className=" text-gray-300">Contact</li></Link>
          </ul>
      </div>
        <section className=" bg-cover relative  h-full overflow-hidden ">
            <div className="absolute  flex justify-center items-center w-full h-full container-3d   ">
                <motion.ul initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 14, ease: [0.22, 1, 0.36, 1]}} className=" hidden lg:flex flex-col lg:gap-44 gap-2 opacity-50  z-50 w-full xl:px-[10%] 2xl:px-[35%]">
                    <li className="z-50 "><div className="box-3d ease-in-out   duration-200"><h1 className=" text-4xl lg:text-[12em] font-sans  text-white font-extrabold">Say</h1></div></li>
                    <li className="z-50 "><div className="box-3d ease-in-out  duration-200"><h1 className=" text-4xl lg:text-[12em] font-sans  text-white  font-extrabold">Hello</h1></div></li>
                </motion.ul>
            </div>
            <video autoPlay loop muted className="LandingVid" src="/phone-call.mp4"></video>
        </section>
        <section className="bg-black  lg:overflow-y-scroll scrollbar-hide overflow-hidden">
            <div className="">
                <motion.ul initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 14, ease: [0.22, 1, 0.36, 1]}} className=" flex  gap-10 lg:gap-24  text-white uppercase justify-center  w-full px-6 py-20 ">
                    <li className=""><div className="hover:text-orange-600 duration-200  font-serif ease-in-out "><h1 className=" text-xl xl:text-[2em] lg:leading-10  duration-100 font-extrabold">Call <br/>Me</h1></div></li>
                    <li className=""><div className="hover:text-orange-600 duration-200  font-serif ease-in-out "><h1 className=" text-xl xl:text-[2em] lg:leading-10    duration-100 font-extrabold">Email<br/> Me</h1></div></li>
                    <li className=""><div className="hover:text-orange-600 duration-200 font-serif ease-in-out "><h1 className=" text-xl xl:text-[2em]  lg:leading-10   duration-100 font-extrabold">Message<br/> Me</h1></div></li>
                </motion.ul>
            </div>
            <div  className="flex flex-col justify-center  bg-[#ffffff]    ">
                <div className="  font-serif ease-in-out lg:p-10   duration-200">
                <hr className=" text-3xl bg-black text-black my-6" />
                <motion.div initial={{y:-100}} animate={{y: 10}}   transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} className=" drop-cap p-10 xl:pt-16 xl:px-16 xl:w-[99%] 2xl:px-[12%] leading-relaxed lg:text-lg">
                    Thank you for taking the time to explore my profile and learn more about my skills and experience. 
                    If you have any inquiries, project proposals, or would like to discuss potential collaborations, 
                    I am excited to connect with you. Please feel free to reach out to me via email at <span  className=' text-orange-600 uppercase'><a href="mailto:blairhb7@yahoo.com">Blairhb7@gmail.com</a></span>. 
                    I am looking forward to hearing from you and exploring how we can work together to achieve our mutual goals.
                    </motion.div>
                    
                    <motion.div  className="">
                        <ContactForm/>
                    </motion.div>
                    <div className=" h-[270px] xl:h-[300px] 2xl:px-[25%] px-3 w-full flex justify-center items-center gap-2 ">
                        <Link href={'tel:17073154173'} ><h2 className=" text-black flex  items-center text-sm lg:text-xl h-20 pr-6 border-r-2 lg:border-r-4 border-black ">+7073154173</h2></Link>
                        <Link href={'mailto:blairhb7@yahoo.com'} ><h2 className=" text-black flex  items-center uppercase text-sm lg:text-xl h-20">Blairhb7@gmail.com</h2></Link>
                        <div className="w-full flex gap-3 justify-center py-1 ">
                            <Link href={`https://github.com/blairhb7`}><img src="github-square.svg" alt="github" className=" lg:w-10 lg:h-10" /></Link>
                            <Link href={`https://www.linkedin.com/in/blair-chappell-23818420a/`}><img src="Linkedin-square.svg" alt="linkedin" className=" lg:w-10 lg:h-10" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </motion.main>
    </>
  )
}

export default transition(page)