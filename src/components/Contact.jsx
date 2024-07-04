import logo from '../assets/logo.png'
import contactSection from '../assets/contactSection1.png'
import { FaFacebook,FaInstagram,FaTwitter} from "react-icons/fa";
import Button from '../elements/Button';
import Input from '../elements/Input';
import { useForm } from 'react-hook-form';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { onSubmit } from '../Api/contactApi';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const { register,handleSubmit,  formState: { errors } } = useForm()
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });
  return (
    <motion.section
    initial={{ opacity: 0}}
    animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 0 }}
    transition={{ duration: 0.6 }}
    ref={ref}
    id='contact' className='bg-[#002f69] text-[#f5f4f4] pt-20 pb-10 min-h-[100vh]'>
      <section className='container mx-auto '>
      <article className='flex justify-center gap-20 flex-wrap pb-2 '>
        <motion.div 
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -500 }}
            transition={{ duration: 1.3 }}
            >
          <div className="flex items-center gap-3">
            <img src={logo} alt=""  />
            <h3>Vandemar Construction</h3>
          </div>
          <img src={contactSection}  width={556} height={518}  alt=""className='pt-3' />
        </motion.div>
        <motion.form
            ref={ref}
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : 500 }}
            transition={{ duration: 1.3 }}
        onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center px-3  text-[18px] '>
            <div className="flex flex-wrap items-center sm:gap-2">
              <Input  style='sm:w-fit focus:bg-gray-200 ' register={register} required="First name is required" type="text"
               minLength={{ value: 3, message: "Last name must be at least 3 characters" }} name="firstName" placeholder="Enter your first-name" />
              <div className='block sm:hidden'>{errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}</div>
              
              <Input style='sm:w-fit focus:bg-gray-200' register={register} required="Last name is required" type="text"
               minLength={{ value: 3, message: "Last name must be at least 3 characters" }} name="lastName" placeholder="Enter your last-name"/>
            </div>
            <div className="flex justify-between">
                  <div className='hidden sm:block'>{errors.firstName && <p className="text-red-500">{errors.firstName.message}</p>}</div>
                  <div className=''>{errors.lastName && <p className="text-red-500">{errors.lastName.message}</p>}</div>
            </div>
            <Input style='focus:bg-gray-200' register={register} required="E-mail is required" type="email"
            name="email" placeholder="Enter your Email"
             pattern={{ value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
            message: "Enter a valid email Ex:(email@example.com)"
            }}
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            <textarea
              {...register('message', { required: 'Comments are required',minLength:{value:10, message:"Must be 10 letters at least"} })}
              cols="30"
              rows="5"
              className='outline-none focus:bg-gray-200 rounded-lg p-2 mb-2 text-[#002f69]'
              placeholder="Enter your Comments here..."
            ></textarea>
             {errors.message && <p className="text-red-500">{errors.message.message}</p>}
            <Button type="Submit">Submit</Button>
             </motion.form>
      </article>
      <motion.article
      ref={ref}
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 100 }}
                transition={{ duration: 1.3 }}
      className="flex flex-wrap lg:gap-36 justify-start px-2 sm:px-0 sm:justify-center">
        <div className="flex flex-col gap-5">
            <h2 className='font-semibold text-[24px] '>Headquarters</h2>
            <p>123 Anywhere St.</p>
            <p  className=''>Any City, ST 12345</p>
            <p>Tel. (123) 456-7890</p>
            <p>Email: hello@reallygreatsite.com</p>
          </div>
          <div className="flex flex-col gap-5">
            <h3 className='uppercase font-semibold text-[24px]'>office hours</h3>
            <p>Monday to Friday</p>
            <p  className=''>9:00 am to 5:00 pm</p>
            <p className=''>Weekends by appointment</p>
          </div>
          <div className="flex flex-col gap-5">
          <h3 className='uppercase font-semibold text-[24px]'>social media</h3>
          <div className="flex items-center gap-3">
          <FaFacebook size={30} className='hover:text-[#0087ff] cursor-pointer '/>
          <FaTwitter size={30} className='hover:text-[#0087ff] cursor-pointer '/>
          <FaInstagram size={30} className='hover:text-[#0087ff] cursor-pointer '/>
          </div>
          </div>
        </motion.article>
      </section>
      <ToastContainer 
        autoClose={1000} 
        closeOnClick 
        rtl={false} 
        pauseOnFocusLoss 
        draggable 
        pauseOnHover
        className='text-white mt-20 '/>
    </motion.section>
  )
}
