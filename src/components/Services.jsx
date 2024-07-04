import React, { useState } from 'react'
import { Servicesdata } from '../data/data';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
const Services = () => {

///////////////////data////////////////////////////////
  const[title]=useState("Our Services");
  const[paragraph]=useState("Write a paragraph that talks about your construction company here. Convince your prospective clients to choose you and your team for their construction needs by talking about your unique services, as well as your commitment to getting the job done.");
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  ///////////////////////////////////////////////////////

        return (
          <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 0 }}
          transition={{ duration: 0.6 }}
          ref={ref}
           className='w-full bg-alter text-white text-center'>
            <div className='container flex flex-col py-20 lg:flex-row lg:justify-evenly mx-auto'>
                <motion.div 
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -500 }}
            transition={{ duration: 1.3 }}
             className="text lg:max-w-72">
                    <h1 className='text-3xl md:text-4xl font-bold mb-7'>{title}</h1>
                    <p className='text-xl md:text-xl mb-7 text-left px-8'>{paragraph}</p>
                </motion.div>
                <motion.div 
                      ref={ref}
                      initial={{ opacity: 0, x: 500 }}
                      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 500 }}
                      transition={{ duration: 1.3 }}
                      className="grid gap-12 lg:grid-cols-3 md:grid-cols-2">
                  {Servicesdata.map((item) => (
                    <>
                        <div className="servicesimg mx-auto">
                          <img src={item.img} alt="" className={`${item.height} 'w-[100%] border-y-[30px] border-solid border-b-main border-t-white' `} />
                          <h1 className='text-2xl md:text-3xl font-bold text-center mt-5'>{item.capture}</h1>
                        </div>
                    </>
                  ))}
                </motion.div>
              </div>
          </motion.div>
        )
      }

export default Services