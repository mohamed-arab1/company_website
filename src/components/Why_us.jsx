import React from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function Why_us(){
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });
    return(
        <motion.section
        initial={{ opacity: 0}}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 0 }}
        transition={{ duration: 0.6 }}
        ref={ref}>
        <section id="whyUs" className=" w-full h-full bg-[#d9dcde] ">
            <div className=" grid grid-rows-2 mx-auto">
            <motion.div
             initial={{ opacity: 0, x: -500 }}
             animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -500 }}
             transition={{ duration: 1.3 }}
              className=" mt-28 ml-20 why_dist">
                <div className="h-1 w-1/6 bg-[#002f69] "> </div>
                <p className="text-[43px] title_why font-bold mt-5 text-[#002f69]">
                    Vandemar is built on our <br/>
                    founders' uniqe <br/>
                    outlook on construcrion
                </p>
            </motion.div>
            <motion.div
            ref={ref}
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 500 }}
            transition={{ duration: 1.3 }}
                className=" flex justify-end mr-20 mt-5 text-[20px] why_content text-[#002f69]">
            Write a paragraph that talks about your company here.<br/>
             You can talk about your company's background,<br/>
              history, mission, vision, or philosophy. Anything that <br/>
              will introduce your brand's persona to your clients.<br/>
             This will help build a connection between you and <br/>
             them, that hopefully leads to a working relationship.
   
            </motion.div>

            </div>
        </section>
        </motion.section>
    )
}