import React from 'react'

function Header() {
    return (
        <header id="header" className='relative pt-5 pb-2 z-[100]'>

            <div className="container">
                <img className='absolute top-0 left-0 z-10' src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/img-top-slider.png" alt="" />

                <div className="site-header-inner flex justify-between items-center bg-transparent">


                    <div className="logo">
                        <img className='w-[150px] h-[79px] p-2' src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/logo2.svg" alt="" />
                    </div>

                    <ul className="main-menu flex gap-x-10">
                        <li className='hover:text-[#1562B7] text-[#fff] transition-all delay-100 relative'><a className='after:content-[""] after:absolute after:w-full after:left-0 after:bottom-[-9px] after:bg-[#0069df] after:h-[3px]' href="/">ANASAYFA</a></li>
                        <li className='hover:text-[#1562B7] transition-all delay-100 text-[#fff]'><a href="#">KURUMSAL</a></li>
                        <li className='hover:text-[#1562B7] transition-all delay-100 text-[#fff]'><a href="#">HİZMETLER</a></li>
                        <li className='hover:text-[#1562B7] transition-all delay-100 text-[#fff]'><a href="#">PROJELER</a></li>
                        <li className='hover:text-[#1562B7] transition-all delay-100 text-[#fff]'><a href="#">İHALELER</a></li>
                        <li className='hover:text-[#1562B7] transition-all delay-100 text-[#fff]'><a href="#">KARİYER</a></li>
                        <li className='hover:text-[#1562B7] transition-all delay-100 text-[#fff]'><a href="#">İLETİŞİM</a></li>
                    </ul>
                    <div className="profile">
                        <img className='bg-[#0069DF] w-[220px] h-auto p-2' src="https://www.izmirteknoloji.com.tr/Content/iztekContent/images/izmirim-kart.png" alt="" />
                    </div>

                </div>
            </div>

            <span className='absolute h-[2px] bg-[#898D8E] w-full left-0 -bottom-1 -z-10 opacity-5'></span>

        </header>

    )
}

export default Header