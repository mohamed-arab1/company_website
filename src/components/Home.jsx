import React from "react";
import logo from '../assets/logo.png'
import home_photo from "../assets/home.png"
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function Home(){
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

    return(
        <motion.section
        initial={{ opacity: 0}}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 0 }}
        transition={{ duration: 0.6 }}
        ref={ref}>
        <section id="home" className=" w-full h-screen bg-[#002f69] ">
        <dev   className=" home_grid  grid grid-cols-2 gap-2 mx-auto">
            <motion.dev 
              initial={{ opacity: 0, x: -500 }}
              animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -500 }}
              transition={{ duration: 1.3 }}
            className=" mt-20 ml-10"> 
                <img src={home_photo} className="home_photo mx-auto" height={590}  width={620} alt="home photo" />
            </motion.dev>
            <motion.dev
             ref={ref}
             initial={{ opacity: 0, x: 500 }}
             animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 500 }}
             transition={{ duration: 1.3 }}
              className=" mt-24 ml-10 animate__animated animate__fadeIn mx-auto">
            <dev className="flex items-center gap-3 ">
            <img src={logo} alt="logo"  />
            <h3 className="text-white" >Vandemar Construction</h3>
            </dev>

            <h2 className="home_title text-[84px] text-white font-bold">
                Let's make your vision come to life
            </h2>
            
            <button className="bg-[#387fd1] p-4 cursor-pointer btn font-bold text-[#ffffff]">Learn More</button>          
            </motion.dev>
        </dev>
        </section>
        </motion.section>

    )
}
