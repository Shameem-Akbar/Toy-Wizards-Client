import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './Slider.css'

import img1 from '../../../assets/upcoming/img1.jpg'
import img2 from '../../../assets/upcoming/img2.jpg'
import img3 from '../../../assets/upcoming/img3.jpg'
import img4 from '../../../assets/upcoming/img4.jpg'
import img5 from '../../../assets/upcoming/img5.jpg'
import img6 from '../../../assets/upcoming/img6.jpg'
import img7 from '../../../assets/upcoming/img7.jpg'
import img8 from '../../../assets/upcoming/img8.jpg'

const UpcomingToys = () => {
    return (
        <div className='bg-[#0B1320] py-2 md:py-8 md:px-12'>
            <div>
                <h2 className='text-4xl text-white md:text-5xl font-bold text-center'>UPCOMING TOYS</h2>
            </div>
            <div className='md:mb-8'>
                <p className='text-gray-400 md:px-60 text-center my-3 md:my-4'>
                    Unleash your imagination with our upcoming toys, where iconic characters and thrilling adventures await. Stay tuned for the latest releases that will elevate your action figure collection to new heights, only at Toys Wizards.
                </p>
            </div>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img1} alt="" />
                        <div className='absolute bottom-4 right-8 text-white  '><button className='btn btn-primary btn-sm px-4'>Pre Order Now</button></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img2} alt="" />
                        <div className='absolute bottom-4 right-8 text-white  '><button className='btn btn-primary btn-sm px-4'>Pre Order Now</button></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img3} alt="" />
                        <div className='absolute bottom-4 right-8 text-white  '><button className='btn btn-primary btn-sm px-4'>Pre Order Now</button></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img4} alt="" />
                        <div className='absolute bottom-4 right-8 text-white  '><button className='btn btn-primary btn-sm px-4'>Pre Order Now</button></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img5} alt="" />
                        <div className='absolute bottom-4 right-8 text-white  '><button className='btn btn-primary btn-sm px-4'>Pre Order Now</button></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img6} alt="" />
                        <div className='absolute bottom-4 right-8 text-white  '><button className='btn btn-primary btn-sm px-4'>Pre Order Now</button></div>
                    </div></SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img7} alt="" />
                        <div className='absolute bottom-4 right-8 text-white  '><button className='btn btn-primary btn-sm px-4'>Pre Order Now</button></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <img src={img8} alt="" />
                        <div className='absolute bottom-4 right-8 text-white  '><button className='btn btn-primary btn-sm px-4'>Pre Order Now</button></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default UpcomingToys;