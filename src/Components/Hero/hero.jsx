import React from 'react'
import  Image1 from '../../assets/hero/women.png'
import  Image2 from '../../assets/hero/shopping.png'
import  Image3 from '../../assets/hero/sale.png'
// import  Image1 from '../../assets/hero/'
// import  Image1 from '../../assets/hero/'
import Slider from 'react-slick'

 const ImageList = [
        {
            id: 1,
            img: Image1,
            title: "Upto 50% off on all Men's Wear",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorem tempora consequuntur perspiciatis iste doloremque. Sint est, at non laborum expedita similique hic quia explicabo, in eum deleniti, sit cum.',
        },
         {
            id: 2,
            img: Image2,
            title: "Upto 70% off on all Men's Wear",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorem tempora consequuntur perspiciatis iste doloremque. Sint est, at non laborum expedita similique hic quia explicabo, in eum deleniti, sit cum.',
        },
         {
            id: 3,
            img: Image3,
            title: "Upto 80% off on all Men's Wear",
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, dolorem tempora consequuntur perspiciatis iste doloremque. Sint est, at non laborum expedita similique hic quia explicabo, in eum deleniti, sit cum.',
        },

]
const Hero = (handleOrderPopup) => {
    var setting= {
        // dots : false,
        // arrow: false,
        // infinite: true,
        // speed: 800,
        // slideTOScroll:1,
        // autoplay:true,
        // autoplaySpeed:4000,
        // cssEase:"ease-in-out",
        // pauseonhover:false,
        // pauseOnFocus:true,
    }
  return (
    <div className='relative overflow-hidden min-h-[600px] max-h-[600px] lg:min-h-[600px] lg:max-h-[600px] bg-green-100 flex justify-center items-center dark:bg-slate-950 dark:text-white duration-300 '>
       <div className='min-h-[600px] w-[100%] lg:w-[800px] bg-primary/40 top-0 absolute lg:-top-1/4 lg:rotate-45 pt-10 lg:rounded-3xl -z[8] flex items-center justify-center'>
         <div className='container lg:-rotate-45 pb-8 sm:pb-0 disabled:flex items-center justify-center'>
                  <Slider {...setting} >
                      {ImageList.map((data) => (
                          <div >
                              <div className='grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 items-center justify-center'>
                                  <div className='flex flex-col justify-center align-middle gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10'>
                                      <h1 data-aos="zoom-out" data-aos-duration="500" data-aos-once="true" className='text-3xl text-center sm:text-6xl lg:text-5xl font-bold'>
                                          {data.title}
                                      </h1>
                                      <p data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" className='text-sm text-center'>
                                          {data.description}
                                      </p>
                                      <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" className='flex flex-col items-center justify-center'>
                                          <button onClick={() => {
                                              handleOrderPopup;
                                          }} className='bg-gradient-to-r from-primary to-secondry hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'> Order Now</button>
                                      </div>
                                  </div>
                                  <div className='order-1 sm:-order-2'>
                                      <div data-aos="zoom-in" data-aos-once="true" className='relative z-10' >
                                          <img src={data.img} alt="slider-img" className='w-[200px] h-\[200px] md:w-[250px] h-]\[250px]  sm:scale-105 lg:scale-120 object-contain mx-auto' />
                                      </div>
                                  </div>
                              </div>
                          </div>
                        )
                    )}
                  </Slider>
         </div>
       </div>
    </div>
  )
}

export default Hero