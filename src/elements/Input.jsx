import React from 'react';

const Input = ({colStyle, type, label, placeholder, name, register, error, required, ...inputProps }) => {
  return (
    <div className={`flex items-center ${colStyle? ' flex-col items-baseline gap-2 ':'gap-2'} `}>
      <label>{label}</label>
      <input 
        className={`${colStyle && 'w-full'} rounded-2xl text-[#002f69] px-3 py-1`}
        name={name}
        type={type}
        placeholder={placeholder}
        {...register(name, { required, ...inputProps })}
      />
    </div>
  );
};

export default Input;

