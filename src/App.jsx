import './App.css'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect, useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/hero'
import Products from './Components/Products/products'
import TopProducts from './Components/TopProducts/topProducts'
import Banner from './Components/Banner/Banner'
import Subscribe from './Components/Subscribe/subscribe'
import Testimonial from './Components/Testimonials/testimonial'
import Footer from './Components/Footer/footer'

function App() {
  const [orderPopup, setOrderPopup] = useState(false)

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  }
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100
    });
    AOS.refresh();
  }, []);
  return (
    <div className='bg-white dark:bg-grey-900 dark:tect-white duration-200'>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Banner />
      <Subscribe />
      <Testimonial />
      <Footer />

    </div>
  )
}

export default App;
