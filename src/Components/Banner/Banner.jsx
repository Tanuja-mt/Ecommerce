import React from 'react'
import BannerImg from '../../assets/4547829.jpg'
import {GrSecure} from "react-icons/gr"
import {IoFastFood} from "react-icons/io5"
import {GiFoodTruck} from "react-icons/gi"

const Banner = () => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
        <div className='container'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
                <div data-aos="zoom-in">
                    <img className='max-w-[400px] h-[350px] w-full mx-auto ' src={BannerImg} alt='banner img'/>
                </div>
                <div className='flex flex-col justify-center gap-6 sm:pt-0'>
                    <h1 data-aos="fade-up" className='text-3xl sm:text-4xl font-bold'></h1>
                    <p data-aos="fade-up" className='text-sm text-grey-500 tracking-wide leading-5'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque quis recusandae, cupiditate accusantium qui sapiente facere iusto pariatur maxime ab! Excepturi voluptates, aliquid nemo pariatur ratione impedit. Voluptatibus, mollitia? Laudantium.
                    </p>
                      <div className='flex flex-cold gap-4  col-span-2 flex-wrap lg:colo-span-4'>
                          <div data-aos="fad-up" className='flex flex-col items-center gap-4 p-[15px] w-[47%] h-[118px] lg:w-[200px] shadow: 0px 0px 44px 0px rgba(0, 0, 0, 0.08), bg-[#ECF1F9] rounded-lg'>
                              <GrSecure className='text-4xl h-12 w-12 shaow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400' />
                              <p>Quality Products</p>
                          </div>
                          <div data-aos="fade-up" className='flex flex-col  items-center gap-4 p-[15px] w-[47%] h-[118px] lg:w-[200px] shadow: 0px 0px 44px 0px rgba(0, 0, 0, 0.08) bg-[#ECF1F9] rounded-lg'>
                              <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                              <p>Fast Delivery</p>
                          </div>
                           <div data-aos="fade-up" className='flex flex-col  items-center gap-4 p-[15px] w-[47%] h-[118px] lg:w-[200px] shadow: 0px 0px 44px 0px rgba(0, 0, 0, 0.08) bg-[#ECF1F9] rounded-lg'>
                              <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                              <p>Easy Payment Method</p>
                          </div>
                           <div data-aos="fade-up" className='flex flex-col items-center gap-4 p-[15px] w-[48%] h-[118px] lg:w-[200px] shadow: 0px 0px 44px 0px rgba(0, 0, 0, 0.08) bg-[#ECF1F9] rounded-lg'>
                              <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400' />
                              <p>Get Offer</p>
                          </div>
                      </div>
                  </div>
              </div>
        </div>
    </div>
  )
}
export default Banner