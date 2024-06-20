import React from 'react'

export default function Button({children,type}) {
  return (
    <button
     type={type}
      className='
      my-4 p-2 bg-[#f5f4f4]  text-[#002f69] mx-auto rounded-lg
      flex justify-center items-center w-[150px]  border-[1px]
      hover:bg-[#002f69] hover:text-[#f5f4f4] hover:hover:border-white
      transition-all duration-700
      '>{children}</button>
  )
}
