import React from 'react'
import { Numbersdata } from '../data/data'


const Numbers = () => {
  return (
    <div>
        <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 h-96 text-center border-t-[2px] border-solid border-gray-500">
          {Numbersdata.map((item) => (
            <>
              <div className={`${item.color}  relative`}>
                <h1 className='text-3xl lg:text-5xl font-bold max-w-[180px]  
                absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>{item.details}</h1>
              </div>
            </>
            ))}
        </div>
    </div>
  )
}

export default Numbers