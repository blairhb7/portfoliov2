'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Img } from '@chakra-ui/react';


const Nav = () => {

const easing = [0.6, -0.05, 0.01, 0.99]

const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };


const fadeInUp = {
    initial: {
        y: 60,
        opacity: 0,
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: .6,
            ease: easing
        }
    }
}


  return (
    <main>
        <div  className="bg-gray-400 z-30 backdrop-blur-lg bg-opacity-30  xl:flex flex-col justify-between  fixed backdrop-opacity-30 xl:w-12 h-full hidden w-10">
           <div className="flex flex-col justify-center items-center gap-4 mt-14">
            <div className="tooltip  flex-row"><Link href={'/'}><img src='/home.png' className='xl:w-6 xl:h-6 w-4 h-4 items-center justify-center flex text-black  icon' /></Link><span className='tooltiptext mx-3 bg-orange-600'>HOME</span></div>
            <div className="tooltip  flex-row"><Link href={'/ProjectPage'}><img src='/code.png' className='xl:w-6 xl:h-6 w-4 h-4 items-center justify-center flex text-black  icon' /></Link><span className='tooltiptext mx-3 uppercase  bg-orange-600'>Projects</span></div>
            <div className="tooltip  flex-row"><Link href={'/Archive'}><img src='/archive.png' className='xl:w-6 xl:h-6 w-4 h-4 items-center justify-center flex text-black  icon' /></Link><span className='tooltiptext mx-3 uppercase  bg-orange-600'>Projects Archives</span></div>
            <div className="tooltip  flex-row"><Link href={'/Contact'}><img src='/email.png' className='xl:w-6 xl:h-6 w-4 h-4 items-center justify-center flex text-black  icon' /></Link><span className='tooltiptext mx-3 bg-orange-600'>CONTACT</span></div>
           </div>
          
           <div className=" flex flex-col py-2 justify-center items-center gap-3  ">
                            <Link href={`https://github.com/blairhb7`}><Image width={40} height={40}  src={"github-square.svg"} alt={"github"} className="flex lg:w-6 lg:h-6 hover:animate-bounce duration-300" /></Link>
                            <Link href={`https://www.linkedin.com/in/blair-chappell-23818420a/`}><Image width={40} height={40} src={"Linkedin-square.svg"} alt={"linkedin"} className="flex justify-center lg:w-6 lg:h-6 hover:animate-bounce duration-300" /></Link>
             </div>
        </div>
    </main>
  )
}

export default Nav