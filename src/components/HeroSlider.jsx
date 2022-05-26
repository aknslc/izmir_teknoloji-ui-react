import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function HeroSlider() {

    const settings = {
        dots: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };
    return (
        <div id='slider' className='relative mt-[-110px] '>

            <Slider {...settings}>

                <div className=''>
                    <img src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/slider/bg-slide-4.jpg" className='w-full relative h-[550px] md:h-[700px] lg:h-[950px]' alt="slider" />
                    <div className="slider-content absolute top-[30%] pl-10 md:pl-20 lg:pl-30 xl:pl-40 ">
                        <h1 className='text-[#0B64C6] text-base mt-5 md:mt-0 md:text-2xl my-6'>Elektronik Ücret Toplama Sistemi</h1>
                        <p className='text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl my-6'>Ulaşım Kartlarında <br /> Yeni Bir Dönem</p>
                        <p className='text-white mb-[25px] text-[10px] md:text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias!</p>
                        <a href="" className='text-white p-5 bg-blue-500 text-center hidden md:inline my-6'>Online İşlemler</a>
                    </div>
                    
                </div>

                <div className=''>
                    <img src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/slider/bg-slide-3.jpg" className='w-full relative h-[550px] md:h-[700px] lg:h-[950px]' alt="slider" />
                    <div className="slider-content absolute top-[30%] pl-10 md:pl-20 lg:pl-30 xl:pl-40">
                        <h1 className='text-[#0B64C6] text-base mt-5 md:mt-0 md:text-2xl my-6'>Elektronik Ücret Toplama Sistemi</h1>
                        <p className='text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl my-6'>Ulaşım Kartlarında <br /> Yeni Bir Dönem</p>
                        <p className='text-white mb-[25px] text-[10px] md:text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias!</p>
                        <a href="" className='text-white p-5 bg-blue-500 text-center hidden md:inline my-6'>Online İşlemler</a>
                    </div>
                </div>
                <div className=''>
                    <img src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/slider/bg-slide-2.jpg" className='w-full relative h-[550px] md:h-[700px] lg:h-[950px] ' alt="slider" />
                    <div className="slider-content absolute top-[30%] pl-10 md:pl-20 lg:pl-30 xl:pl-40 ">
                        <h1 className='text-[#0B64C6] text-base mt-5 md:mt-0 md:text-2xl my-6'>Elektronik Ücret Toplama Sistemi</h1>
                        <p className='text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl my-6'>Ulaşım Kartlarında <br /> Yeni Bir Dönem</p>
                        <p className='text-white mb-[25px] text-[10px] md:text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias!</p>
                        <a href="" className='text-white p-5 bg-blue-500 text-center hidden md:inline my-6'>Online İşlemler</a>
                    </div>
                </div>
                <div className=''>
                    <img src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/slider/bg-slide-1.jpg" className='w-full relative h-[550px] md:h-[700px] lg:h-[950px] ' alt="slider" />
                    <div className="slider-content absolute top-[30%] pl-10 md:pl-20 lg:pl-30 xl:pl-40 ">
                        <h1 className='text-[#0B64C6] text-base mt-5 md:mt-0 md:text-2xl my-6'>Elektronik Ücret Toplama Sistemi</h1>
                        <p className='text-white text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl my-6'>Ulaşım Kartlarında <br /> Yeni Bir Dönem</p>
                        <p className='text-white mb-[25px] text-[10px] md:text-base my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias!</p>
                        <a href="" className='text-white p-5 bg-blue-500 text-center hidden md:inline my-6'>Online İşlemler</a>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default HeroSlider