"use client"
import React, { useState } from 'react'
import data from '../Data'

const Projects = () => {
    const [projects, setProjects] = useState<any>(data)

  return (
    <section className=" grid grid-cols-1 w-full ">
        {projects.projects.map((site: {id:number, pic:string, title:string, date:string, disc:string, React:string, Next:string, Javascript:string, Typescript:string, Tailwind:string, Sanity:string, Vercel:string, Link:string}) =>{
          const {id, pic, title, disc, date, React, Next, Javascript, Typescript, Tailwind, Sanity, Vercel, Link} = site
          return (
            <div className=" ">
              <a href={site.Link} className=' cursor-pointer'>
              <img src={site.pic} className=' h-full' />

              </a>
            </div>
          )
          })}
    </section>
  )
}

export default Projects