import React from 'react'
import Button from './Button'
import { useForm } from 'react-hook-form'
import { onSubmit } from '../Api/bookingApi'
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Input from './Input'

export default function PopUpModal({onClose}) {
  const { register,handleSubmit,  formState: { errors } } = useForm()
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-40 flex justify-center items-center">
      <div className="bg-[#002f69] text-white py-10 px-6 rounded-lg max-w-md relative">
        <button className="absolute top-2 right-3 text-white text-[25px] hover:text-red-500  p-1" onClick={onClose}>
          x
        </button>
        <div className="flex items-center justify-center gap-2">
        <h2 className="text-2xl mb-4">Select Service:</h2>
        <select className='text-2xl mb-4  bg-[#002f69] underline outline-none' draggable>
          <option value="Web" >Web Application</option>
          <option value="Mobile" >Mobile Application</option>
          <option value="Desktop" >Desktop Application</option>
        </select>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} action=""className='flex flex-col gap-3 text-black'>
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-3">

        <Input type='text' style='w-full px-3 py-2 border border-gray-300 rounded mb-0 focus:bg-gray-200 ' register={register} required="Project Name is required" 
               minLength={{ value: 3, message: "Last name must be at least 3 characters" }} name="projectName" placeholder="Type Your Project Name" />
              <div className='block sm:hidden'>{errors.projectName && <p className="text-red-500">{errors.projectName.message}</p>}</div>
              
              <Input type="number" style='w-full px-3 py-2 border border-gray-300 rounded mb-0 focus:bg-gray-200' register={register} required="Number of pages are required"
               name="pages" placeholder="How many pages?"/>
          </div>
          <div className="flex justify-between">
              <div className='block '>{errors.projectName && <p className="text-red-500">{errors.projectName.message}</p>}</div>
              <div className='hidden sm:block'>{errors.pages && <p className="text-red-500">{errors.pages.message}</p>}</div>
          </div>
          <textarea name="description" id="description" cols="30" rows="10" className='rounded' placeholder='write a description for the project'
           {...register('description', { required: 'Description is required',minLength:{value:10, message:"Description must be 10 letters at least"} })}
          ></textarea>
              <div className='block '>{errors.description && <p className="text-red-500">{errors.description.message}</p>}</div>
          <p className='text-start text-white'>Attach Image or figma file:</p>
          <input type="file" className='text-white'/>
        <Button type='' >
          Submit
        </Button>
        </form>
      </div>
      <ToastContainer 
        autoClose={1000} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
        className='text-white mt-20'/>
      </div>
  )
}
