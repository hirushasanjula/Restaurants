import React from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'
import Hero from './components/Navbar/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
import Service from './components/Service/Service'
import Testimonial from './components/Testimonial/Testimonial'
import AOS from "aos";
import "aos/dist/aos.css";

function App() {

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
   <>
      <Navbar />
      <Hero />
      <Service />
      <Banner />
      <Testimonial />
      <Footer />
   </>
  )
}

export default App
