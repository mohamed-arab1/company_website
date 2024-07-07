const InputAuth = ({placeholder,name,type,errors,register,required,...inputProps}) => {

  return(

    <input 
    className="block mt-[20px] w-[500px] h-[40px] hover:border-[#002f69] focus:outline-none border rounded-lg	border-[#ccc] p-6"
    placeholder={placeholder}
    name={name}
    type={type}
     {...register(name, { required, ...inputProps })}
    ></input>
  )
}

export default InputAuth;