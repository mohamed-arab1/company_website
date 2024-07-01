import React from 'react'

export default function Button({style,children,type,onClick}) {
  const defaultStyle = `
  my-4 p-2 bg-[#f5f4f4] text-[#002f69] mx-auto rounded-lg
  flex justify-center items-center lg:w-[150px] border-[1px] gap-3
  hover:bg-[#002f69] hover:text-[#f5f4f4] hover:border-white
  transition-all duration-700
`;
  return (
    <button onClick={onClick}   type={type} className={`${defaultStyle} ${style}`}>{children}</button>
  )
}
