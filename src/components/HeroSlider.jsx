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
        <div className='relative mt-[-110px] '>

            <Slider {...settings}>

                <div className=''>
                    <img src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/slider/bg-slide-4.jpg" className='w-full relative' alt="slider" />
                    <div className="slider-content absolute top-[30%] pl-40 ">
                        <h1 className='text-[#0B64C6] text-2xl'>Elektronik Ücret Toplama Sistemi</h1>
                        <p className='text-white text-7xl'>Ulaşım Kartlarında <br /> Yeni Bir Dönem</p>
                        <p className='text-white mb-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias!</p>
                        <a href="" className='text-white p-5 bg-blue-500 text-center'>Online İşlemler</a>
                    </div>
                    
                </div>

                <div className=''>
                    <img src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/slider/bg-slide-3.jpg" className='w-full ' alt="slider" />
                    <div className="slider-content absolute top-[30%] pl-40 ">
                        <h1 className='text-[#0B64C6] text-2xl'>Elektronik Ücret Toplama Sistemi</h1>
                        <p className='text-white text-7xl'>Ulaşım Kartlarında <br /> Yeni Bir Dönem</p>
                        <p className='text-white mb-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias!</p>
                        <a href="" className='text-white p-5 bg-blue-500 text-center'>Online İşlemler</a>
                    </div>
                </div>
                <div className=''>
                    <img src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/slider/bg-slide-2.jpg" className='w-full ' alt="slider" />
                    <div className="slider-content absolute top-[30%] pl-40 ">
                        <h1 className='text-[#0B64C6] text-2xl'>Elektronik Ücret Toplama Sistemi</h1>
                        <p className='text-white text-7xl'>Ulaşım Kartlarında <br /> Yeni Bir Dönem</p>
                        <p className='text-white mb-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias!</p>
                        <a href="" className='text-white p-5 bg-blue-500 text-center'>Online İşlemler</a>
                    </div>
                </div>
                <div className=''>
                    <img src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/slider/bg-slide-1.jpg" className='w-full ' alt="slider" />
                    <div className="slider-content absolute top-[30%] pl-40 ">
                        <h1 className='text-[#0B64C6] text-2xl'>Elektronik Ücret Toplama Sistemi</h1>
                        <p className='text-white text-7xl'>Ulaşım Kartlarında <br /> Yeni Bir Dönem</p>
                        <p className='text-white mb-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, alias!</p>
                        <a href="" className='text-white p-5 bg-blue-500 text-center'>Online İşlemler</a>
                    </div>
                </div>

            </Slider>
        </div>
    )
}

export default HeroSlider