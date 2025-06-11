import React from 'react'
import Img1 from "../../assets/women/women.png"
import Img2 from "../../assets/women/women2.jpg"
import Img3 from "../../assets/women/women3.jpg"
import Img4 from "../../assets/women/women4.jpg"
import { FaStar } from "react-icons/fa6"


const Products = () => {
    const ProductsData = [
        {
            id: 1,
            img: Img1,
            title: "women ethnic",
            rating: 5.0,
            color: 'white',
            aosDelay: "0"
        },
        {
            id: 2,
            img: Img2,
            title: "Goggles",
            rating: 4.0,
            color: 'red',
            aosDelay: "200"
        },
        {
            id: 3,
            img: Img3,
            title: "Childern Wear",
            rating: 3.0,
            color: 'black',
            aosDelay: "400"
        },
        {
            id: 4,
            img: Img4,
            title: "women ethnic",
            rating: 3.0,
            color: 'grey',
            aosDelay: "600"
        },
       
    ]
    return (
        <div className='mt-14 mb-12 !px-[15px]'>
            <div className='conatiner'>
                <div className='text-cente mb-10 max-w-[600px] mx-auto'>
                    <p data-aos="fade-up" className='text-center text-sm text-primary'>Top Selling Product For You</p>
                    <h1 data-aos="fade-up" className='mt-[5px] text-center text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className='mt-[5px] text-center text-[14px] text-grey-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />Voluptate voluptates sequi ipsa dolorem quo quam deserunt maxime ut quia facere repudiandae quisquam ullam vero ab ducimus, eveniet iste eligendi commodi.</p>
                </div>
                <div>
                    <div className='flex items-center flex-wrap place-items gap-5 justify-center'>
                        {ProductsData.map((data) => (
                            <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className='space-y-3 w-[100%] p-[15px] border border-[#ddd] rounded-[12px]'>
                                <img src={data.img} alt='Cover Image' className='w-[100%] md:h-[330px] md:w-[200px] object-cover rounded-md' />
                                <div className='font-semibold'>{data.title}</div>
                                <p className='text-sm text-green-600'>{data.color}</p>
                                <div className='flex items-center gap-1'>
                                    <FaStar className='text-yellow-400' />
                                    <span>{data.rating}</span>
                                </div>

                            </div>
                        ))}
                    </div>
                    <div className='flex justify-center'>
                        <button className='text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md'>View All Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products