import React from 'react'
import { Numbersdata } from '../data/data'
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const Numbers = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  return (
    <motion.section
    initial={{ opacity: 0, y: -500 }}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -500 }}
    transition={{ duration: 1.3 }}
    ref={ref}>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 h-96 text-center">
          {Numbersdata.map((item) => (
            <>
              <div className={`${item.color}  relative`}>
                <h1 className='text-2xl lg:text-4xl  font-bold max-w-[140px]  
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{item.details}</h1>
              </div>
            </>
            ))}
        </div>
      </motion.section>
  )
}

export default Numbers