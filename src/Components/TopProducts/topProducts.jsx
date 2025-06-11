import React from 'react'
import Img1 from '../../assets/shirt/shirt.png'
import Img2 from '../../assets/shirt/shirt2.png'
import Img3 from '../../assets/shirt/shirt3.png'
import { FaStar } from 'react-icons/fa6'


const ProductData = [
        {
            id: 1,
            img: Img1,
            title: 'Casual Wear',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non blanditiis quas cumque quod id dolorum reprehenderit velit reiciendis modi cum porro ea voluptatem ipsam natus ut adipisci, recusandae quia.'

        },
        {
            id: 2,
            img: Img2,
            title: 'Casual Wear',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non blanditiis quas cumque quod id dolorum reprehenderit velit reiciendis modi cum porro ea voluptatem ipsam natus ut adipisci, recusandae quia.'

        },
        {
            id: 3,
            img: Img3,
            title: 'Casual Wear',
            Description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non blanditiis quas cumque quod id dolorum reprehenderit velit reiciendis modi cum porro ea voluptatem ipsam natus ut adipisci, recusandae quia.'

        }
    ]
const TopProducts = (handleOrderPopup) => {

    return (
        <div className='conatiner'>
            <div className='text-left mg-24'>
                <p data-aos="fade-up" className='text-sm text-primary text-center'>
                    Top Rated Products for You
                </p>
                <h1 data-aos="fade-up" className='mt-[5px] text-3xl font-bold text-center'>
                    Best Products
                </h1>
                <p data-aos="fade-up" className='mt-[5px] text-[16px] text-gray-400 text-center'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor repellendus laudantium <br /> laboriosam illum recusandae iste tenetur obcaecati ullam error minima. Iure non porro, asperiores dignissimos hic earum nemo provident molestias.
                </p>
                <div>
                    <div className='mt-[100px] flex justify-center flex-wrap gap-20 md:gap-5 place-items-center'>
                        {ProductData.map((data) => (
                            <div data-aos="zoom-in" className='p-5 rounded-2xl text-center bg-white dark:bg-green-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 gropu max-w-[300px] cursor-pointer '>
                                <div>
                                    <img src={data.img} alt="" className='max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md' />
                                </div>
                                <div className='w-fill flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                                <h1 className='text-xl font-bold'>{data.title}</h1>
                                <p className='text-green-500 group-hover:text-white duration-300 text-sm line-clamp-2'>{data.Description}</p>
                                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary' onClick={handleOrderPopup}>Order Now</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopProducts;