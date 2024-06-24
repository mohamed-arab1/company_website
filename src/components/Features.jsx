import React, { useState } from 'react'
import { Featuredata } from '../data/data'

const Features = () => {

////////////////info///////////////////////////////
    const[title]=useState("Count on vandemar construction to look after your building needs")
    const[description]=useState("Share your services or product offerings here.List them down as bullet points for easy reading, even for people on mobile. You can also use this spase for other purposes where the information is best presentes as concise bullet pointed lists")
    

        return (
                <div className='w-full bg-main text-center text-white'>
                    <div className='container flex flex-col gap-6 max-w-[1224px] mx-auto py-16 px-10 md:gap-12'>
                        <h2 className='lg:text-5xl md:text-4xl text-3xl font-bold'>{title}</h2>
                        <p className='text-xl md:text-2xl max-w-[880px] mx-auto'>{description}</p>
                        <div className="cards grid  gap-8 lg:grid-cols-4 md:grid-cols-2">
                            {Featuredata.map((item)=> (
                                <>
                                <div className='bg-[#eeeef0] text-alter font-bold text-center py-16 relative '>
                                    <div className='md:mb-12 mb-8 text-4xl md:text-6xl'><i className='absolute left-[50%] top-8 -translate-x-1/2'>{item.icon}</i></div>
                                    <h2 className='text-2xl'>{item.text}</h2>
                                </div>
                                </>
                            ))}
                        </div>
                    </div>
                </div>
                )
}

export default Features