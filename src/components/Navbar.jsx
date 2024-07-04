import  {  useState } from 'react'
import Button from '../elements/Button'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { Links } from '../data/data';
import { motion } from 'framer-motion'
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();
    const handleButtonClick = () => {
      navigate('/login');
    }
  return (
    <motion.section
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
     className=' text-[#002f69] bg-[#f5f4f4] w-full fixed pt-0 z-40  md:text-[14px] lg:text-[16px]'>
      <section className={`container mx-auto min-h-12 px-2 sm:flex-row flex items-center  justify-between transition-all duration-700`}>
      {menuOpen && (
        <section className="absolute top-16 left-0 pb-2 sm:top-16 w-full md:hidden flex flex-col sm:flex-row gap-3 justify-center items-center bg-[#f5f4f4]  ">
          {Links.map(({ id, link, href }) => (
                 <Link to="/" key={id} onClick={() => {window.location.replace(href); setMenuOpen(false)}} className='hover:text-[#0087ff]' >
              {link}
            </Link>
          ))}
        </section>
      )}
      <div className="" onClick={handleButtonClick}>
        <Button style=''>        
        <FaRegUserCircle size={25} />
          <p>Login</p>
        </Button>
      </div>
      <div className="hidden md:flex flex-col sm:flex-row  items-center gap-6 lg:gap-10">
      {Links.map(({ id, link, href }) => (
            <Link to="/" key={id} onClick={() => window.location.replace(href)} className='hover:text-[#0087ff]
            border-transparent hover:border-b-2 hover:border-[#002f69]'>
              {link}
            </Link>
          ))}
         </div>
         <div className="flex items-center gap-5">
         <Link to="/book-service" className='xl:animate-bounce hover:text-[#0087ff]'>
         <Button>Book a service</Button> 
          </Link>
          <RxHamburgerMenu size={30} className={`${!menuOpen && ""} block md:hidden cursor-pointer z-10 `}  onClick={() => setMenuOpen(!menuOpen)}/>
         </div>
      </section>
    </motion.section>
  )
}
