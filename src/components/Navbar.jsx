import React, { useState } from 'react'
import Button from '../elements/Button'
import { Link } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
export default function Navbar() {
    const Links = [
      { id: 1, link: "Home", href: "/#home" },
      { id: 2, link: "Contact", href: "/#contact" },
      { id: 3, link: "Testimonials", href: "/#testimonials" },
      { id: 4, link: "Our Philosophy", href: "/#ourPhilosophy" },
      { id: 5, link: "Services", href: "/#services" },
      { id: 6, link: "Why Us", href: "/#whyUs" },
    ];
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className=' text-[#002f69] bg-[#f5f4f4] w-full fixed pt-0 '>
      <section className='container mx-auto min-h-12 px-2 flex-col sm:flex-row flex items-center justify-between'>
        {/* Responsive Menu */}
      {menuOpen && (
        <section className="absolute top-32 pb-10  sm:top-16 w-full md:hidden flex flex-col sm:flex-row gap-3 justify-center items-center bg-[#002f69] ">
          {Links.map(({ id, link, href }) => (
            <Link to={href} key={id} className="hover:text-[#0087ff] " onClick={() => setMenuOpen(false)} >
              {link}
            </Link>
          ))}
        </section>
      )}
      <div className="">
        <Button>
        <FaRegUserCircle size={25} />
          <Link to="/login">Login</Link>
        </Button>
      </div>
      <div className="hidden md:flex flex-col sm:flex-row  items-center gap-3">
      {Links.map(({ id, link, href }) => (
            <Link to="/" key={id} onClick={() => window.location.replace(href)} className='hover:text-[#0087ff]
            border-transparent hover:border-b-2 hover:border-white'>
              {link}
            </Link>
          ))}
         </div>
          
         <Link to="/book-service" className='animate-bounce hover:text-[#0087ff]'>
         <Button>Book a service</Button> 
          </Link>
          <RxHamburgerMenu size={30} className='block md:hidden cursor-pointer z-10 mt-48 sm:mt-0'  onClick={() => setMenuOpen(!menuOpen)}/>
      </section>
    </section>
  )
}
