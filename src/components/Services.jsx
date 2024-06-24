import React, { useState } from 'react'
import { Servicesdata } from '../data/data';

const Services = () => {

///////////////////data////////////////////////////////
  const[title]=useState("Our Services");
  const[paragraph]=useState("Write a paragraph that talks about your construction company here. Convince your prospective clients to choose you and your team for their construction needs by talking about your unique services, as well as your commitment to getting the job done.");
///////////////////////////////////////////////////////

        return (
          <div className='w-full bg-alter text-white text-center'>
            <div className='container flex flex-col py-20 lg:flex-row lg:justify-evenly'>
                <div className="text lg:max-w-72">
                    <h1 className='text-4xl md:text-5xl font-bold mb-7'>{title}</h1>
                    <p className='text-xl md:text-2xl mb-7 text-left px-4'>{paragraph}</p>
                </div>
                <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2">
                  {Servicesdata.map((item) => (
                    <>
                        <div className="servicesimg mx-auto">
                          <img src={item.img} alt="" className={`${item.height} 'w-[100%] border-y-[30px] border-solid border-b-main border-t-white' `} />
                          <h1 className='text-3xl md:text-4xl font-bold text-center mt-5'>{item.capture}</h1>
                        </div>
                    </>
                  ))}
                </div>
              </div>
          </div>
        )
      }

export default Services