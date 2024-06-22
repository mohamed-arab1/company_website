import Contact from './../components/Contact';
import Home from '../components/Home';
import Testimonials from '../components/Testimonials';
import Why_us from '../components/Why_us';

const LandingPage = () => {
  return (
    <main>
      <Home/>
      <Testimonials/>
      
        <Contact />
        <Why_us/>
    </main>
  )
}

export default LandingPage