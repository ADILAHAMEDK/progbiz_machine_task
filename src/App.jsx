import './App.css'
import AboutUs from './components/AboutUs'
import Achivements from './components/Achivements'
import GetInTouch from './components/GetInTouch'
import Header from './components/Header'
import Hero from './components/Hero'
import OurProducts from './components/OurProducts'
import OurServices from './components/OurServices'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <>
    <div>
      <Header/>
      <Hero/>
      <AboutUs/>
      <OurServices/>
      <Achivements/>
      <OurProducts/>
      <Testimonials/>
      <GetInTouch/>
      
    </div>

    </>
  )
}

export default App
