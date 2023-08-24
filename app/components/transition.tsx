"use client"
import { motion } from "framer-motion"
import App from "next/app";
import React from "react";


const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const Transition = (OgComponent:any) => {
    return () => (
        <>
        <OgComponent/>
        <motion.div
            variants={animationConfiguration}
            initial ="initial"
            animate = "animate"
            exit = "exit"
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1]}}
        >
            
        </motion.div>
         
        </>
    )
}



export default Transition