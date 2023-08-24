
import { motion } from "framer-motion"
import App from "next/app";
import React from "react";




function Transition (OgComponent:any) {
    const animationConfiguration = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
    };


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

Transition.displayName = 'Transition'

export default Transition