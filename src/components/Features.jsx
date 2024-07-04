import React, { useState } from 'react'
import { Featuredata } from '../data/data'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const Features = () => {

////////////////info///////////////////////////////
    const[title]=useState("Count on vandemar construction to look after your building needs")
    const[description]=useState("Share your services or product offerings here.List them down as bullet points for easy reading, even for people on mobile. You can also use this spase for other purposes where the information is best presentes as concise bullet pointed lists")
    
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });

        return (
                <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 0 }}
                transition={{ duration: 0.6 }}
                ref={ref}
                 className='w-full bg-main text-center text-white'>
                    <div className='container flex flex-col gap-6 max-w-[1224px] mx-auto py-16 px-10 md:gap-12'>
                        <motion.h2
            initial={{ opacity: 0, y: -500 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -500 }}
            transition={{ duration: 1.3 }}
                             className='lg:text-5xl md:text-4xl text-3xl font-bold'>{title}</motion.h2>
                        <motion.p
                                initial={{ opacity: 0, y: -500 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -500 }}
                                transition={{ duration: 1.3 }}
                                 className='text-xl md:text-2xl max-w-[880px] mx-auto'>{description}</motion.p>
                        <motion.div
                                initial={{ opacity: 0, y: 500 }}
                                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 500 }}
                                transition={{ duration: 1.3 }}
                                 className="cards grid  gap-8 lg:grid-cols-4 md:grid-cols-2">
                            {Featuredata.map((item)=> (
                                <>
                                <div className='bg-[#eeeef0] text-alter font-bold text-center py-16 relative '>
                                    <div className='md:mb-12 mb-8 text-4xl md:text-6xl'><i className='absolute left-[50%] top-8 -translate-x-1/2'>{item.icon}</i></div>
                                    <h2 className='text-2xl'>{item.text}</h2>
                                </div>
                                </>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
                )
}

export default Features