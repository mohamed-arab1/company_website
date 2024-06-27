import React from 'react';

const Input = ({colStyle, type, label, placeholder, name, register, error, required, ...inputProps }) => {
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

