"use client"
import Image from 'next/image'
import Experience from './components/experience'
import Projects from './components/Projects'
import Link from 'next/link'
import { motion } from "framer-motion"
import transition from './components/transition'


export default transition (function Home() {
  return (
   <>
    <main className=" lg:overflow-none  ">
    <div className=" xl:hidden s w-full bg-black">
          <ul className=" flex p-2 fixed z-50 bg-black  font-headline w-full gap-4 text-xs sm:text-sm md:text-base">
            <Link href={'/'}><li className=" text-white">Experience</li></Link>
            <Link href={'/ProjectPage'}><li className=" text-white">Featured Projects</li></Link>
            <Link href={'/Archive'}><li className=" text-white">Project Archive</li></Link>
            <Link href={'/Contact'}><li className=" text-white">Contact</li></Link>
          </ul>
      </div>
      <section className="  grid grid-cols-1 lg:grid-cols-2 h-full lg:h-[1100px] 2xl:h-[2000px] bg-[url('/background-img.svg')] lg:bg-[url('/orangeWave.svg')]  lg:bg-center bg-cover  ">
        <motion.div initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 6, ease: [0.22, 1, 0.36, 1]}} className=" hidden lg:flex container-3d lg:pt-[10%] ml-[15%] 2xl:pl-[20%] h-[500px] lg:h-screen flex-col justify-center w-full  ">
        <div className="px-3 pt-20 pb-5 2xl:pt-80 2xl:pb-6 flex flex-col justify-center  ">
            <h1 className=" text-5xl lg:text-6xl xl:text-8xl Name  text-orange-600 ">Blair Chappell</h1>
            <h3 className=" text-3xl   ">Frontend Developer</h3>
            <div className="flex gap-1 z-50 py-3 lg:pb-[2%] ">
            <Link href={`https://github.com/blairhb7`}><Image width={40} height={40} src="github-square.svg" alt="github" className=" w-6 h-6" /></Link>
            <Link href={`https://www.linkedin.com/in/blair-chappell-23818420a/`}><Image width={40} height={40}  src="Linkedin-square.svg" alt="linkedin" className=" w-6 h-6" /></Link>
            </div>
          </div>
          <ul className=" z-50 gap-1 md:gap-3 w-full ">
            <Link href={''}><li className="md:py-2"><div className="box-3d text-stroke font-serif ease-in-out  duration-200"><h1 className=" text-2xl lg:text-3xl hover:text-7xl duration-700 font-extrabold">Experience</h1></div></li></Link>
            <Link href={'/ProjectPage'}><li className="md:py-2"><div className="box-3d text-stroke font-serif ease-in-out duration-200"><h1 className=" text-2xl lg:text-4xl hover:text-6xl ease-in-out duration-700 font-extrabold">Featured Projects</h1></div></li></Link>
            <Link href={'/Archive'}><li className="md:py-2"><div className="box-3d text-stroke font-serif ease-in-out duration-200"><h1 className=" text-2xl lg:text-3xl hover:text-7xl ease-in-out duration-700 font-extrabold">Project Archive</h1></div></li></Link>
            <Link href={'/Contact'}><li className="md:py-2"><div className="box-3d text-stroke font-serif ease-in-out duration-200"><h1 className=" text-2xl lg:text-3xl hover:text-7xl duration-700 font-extrabold">Contact</h1></div></li></Link>
          </ul>
          <p className=" lg:pt-[5%] 2xl:pt-[4%] 2xl:text-black  lg:w-[40%] w-[70%] lg:text-[#00000085] text-xs lg:text-sm flex">Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with Next.js and Tailwind CSS, deployed with Vercel</p>
          
        </motion.div>
        <div className="lg:hidden h-[200px] px-3 pt-40 flex flex-col justify-center  ">
            <h1 className=" text-5xl lg:text-7xl Name  text-orange-600 ">Blair Chappell</h1>
            <h3 className=" text-2xl   ">Frontend Developer</h3>
            <h4 className=" text-sm text-orange-500">For best experience view on a Desktop</h4>
            <p className=" text-xs py-2 w-60">I build accessible, inclusive products and digital experiences for the web.</p>
            <div className="flex gap-1 z-50 lg:pb-[35%] ">
            <Link href={`https://github.com/blairhb7`}><Image width={40} height={40} src="github-square.svg" alt="github" className=" w-6 h-6" /></Link>
            <Link href={`https://www.linkedin.com/in/blair-chappell-23818420a/`}><Image width={40} height={40}  src="Linkedin-square.svg" alt="linkedin" className=" w-6 h-6" /></Link>
            </div>
          </div>
        <div  className=" lg:bg-[url('/Orange.svg')]  z-20 h-full lg:bg-right bg-cover py-3 lg:overflow-y-scroll lg:scrollbar-hide    ">
          <div className="   gap-2">
            <h2 className=" hidden lg:flex uppercase text-xs text-orange-500  font-medium animate-bounce">scroll down for more</h2>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 6, ease: [0.22, 1, 0.36, 1]}} id='about' className=" w-[95%] lg:mr-8 mt-20 lg:mt-20 lg:hover:bg-white duration-700 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
            <div className=" py-10 ">
              <h2 className=" text-4xl py-4  px-2 md:text-black text-white ">About</h2>
              <hr className="mx-2 w-[90%]" />
            </div>
              <p className=" text-sm lg:text-sm 2xl:text-base  font  font-sans mb-3 px-8 lg:w-[89%] font-medium flex-wrap">Back in 2013, I decided to try my hand at learning how to code and create websites,
              and tumbled head first into the rabbit hole of coding and web development. After many books, online coding program's, and lots of trial & error, 
              I started to get a good feel for web development. 
              But I knew the journey was just beginning!</p>
              <p className=" text-sm lg:text-sm 2xl:text-base  font-sans mb-4 px-8 lg:w-[89%]   font-semibold flex-wrap">
              Fast-forward to today, I've been diving into more complex technologies like React, Tailwind, Next-js, and Typescript. As this field continues to change, I am always still learning. 
              Which I enjoy because I like to continually get better at whatever I set my heart and mind too!
              </p>
              <p className=" text-sm lg:text-sm 2xl:text-base  font-sans mb-4 px-8 lg:w-[89%]   font-semibold flex-wrap">
              When I’m not at the computer, I’m usually watching the Golden State Warriors, 
              exploring the wild backpacking, or deep into video editing for <span className=' text-lg font-extrabold text-orange-600 z-20'><a className=' z-20' href="">FilmDUO.</a></span> 
              </p>
              <Link href={'/Archive'}><h2 className=" text-lg lg:text-lg uppercase px-6 py-5 lg:pt-20 hover:text-orange-500 duration-500 hover:underline underline-offset-8 hover:translate-x-3">View Full Project Archive</h2></Link>
            </motion.div>
            <motion.div initial={{opacity: 0}} animate={{opacity: 1}}  transition={{ duration: 8, ease: [0.22, 1, 0.36, 1]}} className=" py-10 w-[95%] lg:mr-8 mt-20 lg:mt-20 lg:hover:bg-white duration-700 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg">
              <h2 className=" text-3xl py-4 px-2 md:text-black text-white">Experience</h2>
              <hr className="mx-2 w-[90%]" />
              <Experience/>
            </motion.div>
            
          </div>
        </div>
      </section>
     
    </main>
   </>
  )
}
)

