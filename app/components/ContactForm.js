'use client'
import { useState, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import emailjs from '@emailjs/browser';
import { useToast } from '@chakra-ui/react';
import { motion } from "framer-motion"

const ContactForm = () => {
  const toast = useToast()
  const form = useRef();
  const  [input, setInput] = useState('')
  const  [message, setMessage] = useState('')
  const  [name, setName] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();


    

    emailjs.sendForm('service_34cekjv', 'template_3dn9cbn', form.current, '2g70Hv8yw5B7bxStr')
      .then((result) => {
          console.log(result.text);
          toast({
            title: "Message sent",
            status: 'success',
            duration: 2000,
            position: 'top'
          })
      }, (error) => {
          console.log(error.text);
      });
      setInput('')
      setName('')
      setMessage('')
    }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',

    }, 
    // validate Form

    validationSchema: Yup.object({
      name: Yup.string().max(30, 'Name must be at least 30 characters or less').required("Name is required"),
      email: Yup.string().email( 'Invalid email address').required("Email is required"),
    }),

  })

  return (
    <motion.form initial={{y:100}} animate={{y: -10}}  transition={{ duration: 4, ease: [0.22, 1, 0.36, 1]}} onSubmit={sendEmail} ref={form}  method='POST' className=' bg-orange-600 py-10 px-3 2xl:mx-[10%] justify-center gap-3 '  >
        <div className="flex justify-center gap-5">
            <div className=' w-full'>
                <label className='text-white uppercase p-2 text-xl font-headline' htmlFor="name">{formik.touched.email && formik.errors.name ? formik.errors.name : "Name"}</label>
                <input className='w-full px-3'
                placeholder='Name'
                type="text"
                name='name'
               
                value={name}
                onChange={(e)=>{setName(e.target.value)}}
                onBlur={formik.handleBlur}
                required
                />
            </div>
            <div className=' w-full'>
                <label  className='text-white uppercase p-2 text-xl font-headline' htmlFor="user_email">{formik.touched.email && formik.errors.email ? formik.errors.email : "Email"}</label>
                <input className='w-full px-3'
                 placeholder='Email'
                type="email"
                name='email'
                
                value={input}
                onChange={(e)=>{setInput(e.target.value)}}
                required
                onBlur={formik.handleBlur}
                />
            </div>
        </div>
      <div className="flex py-6 justify-center ">
        <div className=' flex flex-col w-full'>
            <label className='flex justify-center text-white uppercase py-2 text-xl font-headline' htmlFor="message">Message</label>
            <textarea className='w-full h-40 p-3'
             placeholder='Message'
            id="message"
            name='message'
            value={message}
            onChange={(e)=>{setMessage(e.target.value)}}
            required
            ></textarea>
            <input type="submit" value="Send"  className=' text-orange-600 w-full uppercase py-6 bg-black hover:bg-gray-200 hover:text-black duration-500 text-4xl font-headline' />
        </div>
        
      </div>
      
    </motion.form>
  );
};

export default ContactForm;
