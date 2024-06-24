import React from 'react';

const Input = ({style, type, placeholder, name, register, required, ...inputProps }) => {
  const defaultStyle = `w-full rounded-2xl text-[#002f69] px-3 py-1`;
  return (
      <input 
        className={`${defaultStyle} ${style}`}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { required, ...inputProps })}
      />
  );
};

export default Input;

