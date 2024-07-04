import React from "react";
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
export default function Testimonials(){
    const ref = useRef(null);
    const inView = useInView(ref, { once: false });
    return(
        <motion.section
        initial={{ opacity: 0}}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 0 }}
        transition={{ duration: 0.6 }}
        ref={ref}>
        <section id="testimonials" className=" w-full h-full bg-[#d9dcde]">
            <motion.h2
                initial={{ opacity: 0, x: -500 }}
                animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -500 }}
                transition={{ duration: 1.3 }}
             className=" text-[38px] font-bold text-[#002f69] pl-10 pt-4">Client Testimonials</motion.h2>
            <motion.div
                initial={{ opacity: 0, y: 500 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 500 }}
                transition={{ duration: 1.3 }}
            className="grid grid-cols-3 test_sec gap-3 pt-20 pl-20 ">
                <div>
                    <div className="h-1 w-20 bg-[#002f69]"> </div>
                    <p className="pt-10 title_test text-[#002f69] text-[20px]">
                        Boost your product and <br/> service's credibility by adding <br/> testimonials from your clients. <br/>
                        people love recommendations <br/> so feedback from others who've <br/> tried it is invaluable.
                    </p>
                    <p className="pt-5 high_test text-[#002f69] font-bold text-[25px]">
                        Tristan clousso,shutter <br/> club NY
                    </p>
                </div>
                <div>
                <div className="h-1 w-20 bg-[#002f69]"> </div>
                    <p className="pt-10 title_test text-[#002f69] text-[20px]">
                        Boost your product and <br/> service's credibility by adding <br/> testimonials from your clients. <br/>
                        <p className="pt-3">
                            people love recommendations <br/> so feedback from others who've <br/> tried it is invaluable.
                        </p>
                    </p>
                    <p className="pt-5  high_test text-[#002f69] font-bold text-[25px]">
                        Shani Mensah, Vivarily
                    </p>
                </div>
                <div>
                <div className="h-1 w-20 bg-[#002f69]"> </div>
                    <p className="pt-10 title_test text-[#002f69] text-[20px]">
                        Boost your product and <br/> service's credibility by adding <br/> testimonials from your clients. <br/>
                        people love recommendations <br/> so feedback from others who've <br/> tried it is invaluable.
                        <p className="pt-3">
                            add them here!
                        </p>
                         
                    </p>
                    <p className="pt-5  high_test text-[#002f69] font-bold text-[25px] pb-10">
                        Paisley Finwood
                    </p>
                </div>

            </motion.div>

            

        </section>
        </motion.section>
    )
}