import React from 'react'
import { Numbersdata } from '../data/data'


const Numbers = () => {
  return (
    <div>
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
    </div>
  )
}

export default Numbers