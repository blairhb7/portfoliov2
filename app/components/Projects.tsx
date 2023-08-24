"use client"
import React, { useState } from 'react'
import data from '../Data'
import Image from 'next/image';

const Projects = () => {
    const [projects, setProjects] = useState<any>(data)

  return (
    <section className=" grid grid-cols-1 w-full ">
        {projects.projects.map((site: {id:number, pic:string, title:string, date:string, disc:string, React:string, Next:string, Javascript:string, Typescript:string, Tailwind:string, Sanity:string, Vercel:string, Link:string}) =>{
          const {id, pic, title, disc, date, React, Next, Javascript, Typescript, Tailwind, Sanity, Vercel, Link} = site
          return (
            <div key={id} className=" ">
              <a key={id}  href={site.Link} className=' cursor-pointer'>
              <Image width={40} height={40} key={id} src={site.pic} className=' h-full' alt={''} />

              </a>
            </div>
          )
          })}
    </section>
  )
}

export default Projects