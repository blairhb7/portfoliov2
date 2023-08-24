"use client"
import { motion } from "framer-motion"


const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

const transition = (OgComponent:any) => {
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

export default transition