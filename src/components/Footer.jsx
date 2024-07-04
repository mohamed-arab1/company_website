import React from 'react'
import { FaFacebook, FaLinkedin, FaPinterest, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <section className=' text-[#002f69] bg-[#f5f4f4] w-full px-2 py-10 '>
    <section className='container mx-auto  flex flex-wrap  justify-between'>
      <article className="flex flex-col gap-5 max-w-[500px]">
        <Link to="/" className='font-semibold text-[40px] hover:text-[#0087ff] cursor-pointer animate-pulse'>CSG</Link>
        <p>
        Our booking services streamline scheduling and management for web,
        mobile, and desktop applications, providing seamless user experiences.
        Optimize your appointments with intuitive interfaces and automated notifications.
        Enhance efficiency and user satisfaction across all platforms.
        </p>
        <div className="flex gap-3">
        <FaFacebook size={25} className='hover:text-[#0087ff] animate-pulse cursor-pointer'/>
        <FaTwitter size={25} className='hover:text-[#0087ff] animate-pulse cursor-pointer'/>
        <FaLinkedin size={25} className='hover:text-[#0087ff] animate-pulse cursor-pointer'/>
        <FaPinterest size={25} className='hover:text-[#0087ff] animate-pulse cursor-pointer'/>
        </div>
      </article>
      <article className="flex flex-col gap-5">
        <h4 className='text-[20px] font-semibold'>Navigation</h4>
        <Link to="/" className='hover:underline hover:text-[#0087ff] '>Home</Link>
        <Link to="/login" className='hover:underline hover:text-[#0087ff] '>Login</Link>
        <Link to="/registration" className='hover:underline hover:text-[#0087ff] '>register</Link>
        <Link to="/book-service" className='hover:underline hover:text-[#0087ff] '>Book A Service</Link>
        <Link to="/" className='hover:underline hover:text-[#0087ff] '>Contact</Link>
      </article>
      <article className="flex flex-col gap-5">
      <h4 className='text-[20px] font-semibold'>Services</h4>
        <Link to="/book-service" className='hover:underline hover:text-[#0087ff] '>Web Application</Link>
        <Link to="/book-service" className='hover:underline hover:text-[#0087ff] '>Mobile Application</Link>
        <Link to="/book-service" className='hover:underline hover:text-[#0087ff] '>Desktop Application</Link>
      </article>
      <article className="flex flex-col gap-5">
      <h4 className='text-[20px] font-semibold'>Contact Us</h4>
        <p>76/A, Green Lane, Dhanmondi, NYC</p>
        <p>+02 123 456 789</p>
      </article>
    </section>
    <p className='text-center pt-8'>Copyright ©{year} All rights reserved <span className='font-semibold'>CSG</span> </p>
  </section>
  )
}
