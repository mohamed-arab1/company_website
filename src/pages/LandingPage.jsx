import Contact from './../components/Contact';
import Home from '../components/Home';
import Testimonials from '../components/Testimonials';
import Why_us from '../components/Why_us';
import Features from "../components/Features"
import Numbers from "../components/Numbers"
import Services from "../components/Services"

const LandingPage = () => {
  return (
    <main className='overflow-hidden'>
           <Home/>
           <Why_us/>
           <Features />
           <Services />
           <Numbers />
           <Testimonials/>
           <Contact />
    </main>
  )
}

export default LandingPage