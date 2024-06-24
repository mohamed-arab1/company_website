import React from 'react'

export default function Button({style,children,type}) {
  const defaultStyle = `
  my-4 p-2 bg-[#f5f4f4] text-[#002f69] mx-auto rounded-lg
  flex justify-center items-center w-[150px] border-[1px] gap-3
  hover:bg-[#002f69] hover:text-[#f5f4f4] hover:border-white
  transition-all duration-700
`;
  return (
    <button
     type={type} className={`${defaultStyle} ${style}`}>{children}
      </button>
  )
}
