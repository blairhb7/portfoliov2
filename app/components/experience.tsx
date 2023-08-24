"use client"
import React, { useState } from 'react'
import data from '../Data'


const Experience = () => {
    const [exp, setExp] = useState<any>(data)

  return (
    <section className=" ">
        {exp.experience.map((info: {id:number, name:string, title:string, date:string, disc:string, secondline:string }) =>{
          const {id, name, title, disc, date, secondline} = info
          return (
            <div className=" hover:text-black text-black flex-col  px-6 lg:px-2 lg:m-10 p-2 z-0  transition duration-700 motion-reduce:transition-none ">
              <div className=" text-sm w-full">{info.date}</div>
              <div className="">
                <h1 className=" font-bold text-2xl ">{info.name}</h1>
                <h3 className="  font-medium text-base 2xl:text-xl pb-4 ">{info.title}</h3>
                <p className=" text-sm  w-[90%] 2xl:w-[85%] lg:text-sm 2xl:text-base lg:leading-relaxed  font-sans mb-3   font-semibold ">{info.disc}</p>
                <p className=" text-sm  w-[90%] 2xl:w-[85%] lg:text-sm 2xl:text-base lg:leading-relaxed  font-sans mb-3   font-semibold ">{info.secondline}</p>
                <a href={''}><h2 className=" text-lg lg:text-lg uppercase px-6 py-3 lg:pt-10 hover:text-orange-500 duration-500 hover:underline underline-offset-8 hover:translate-x-3">Resume</h2></a>

              </div>
            </div>
          )
          })}
    </section>
  )
}

export default Experience