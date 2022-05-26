import React from 'react'
import Portfolio from './Portfolio';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Services() {
    const theme = createTheme({
        palette: {
            primary: {

                main: '#0069DF',
            },
        },
    });

    return (
        <div id='services' className='bg-[#F3F3F4] p-12'>
            <div className="container">
                <h3 className="services-title mb-5 text-[18px] leading-8 font-light tracking-[10px] uppercase text-[#0069DF]">
                    Hizmetlerimiz
                </h3>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-3'>
                    <div className="service bg-[#FFFFFF] flex py-10 px-8 items-center border-none rounded-sm hover:shadow-lg transition-all delay-100">
                        <ThemeProvider theme={theme}>
                            <AutoGraphIcon color='primary' fontSize='large' />
                        </ThemeProvider>
                        <h4 className='text-[#11161e] pl-2'>Yazilim Gelistirme</h4>
                    </div>
                    <div className="service bg-[#FFFFFF] flex py-10 px-8 items-center border-none rounded-sm hover:shadow-lg transition-all delay-100">
                        <ThemeProvider theme={theme}>
                            <AutoGraphIcon color='primary' fontSize='large' />
                        </ThemeProvider>
                        <h4 className='text-[#11161e] pl-2'>Yazilim Gelistirme</h4>
                    </div>
                    <div className="service bg-[#FFFFFF] flex py-10 px-8 items-center border-none rounded-sm hover:shadow-lg transition-all delay-100">
                        <ThemeProvider theme={theme}>
                            <AutoGraphIcon color='primary' fontSize='large' />
                        </ThemeProvider>
                        <h4 className='text-[#11161e] pl-2'>Yazilim Gelistirme</h4>
                    </div>
                    <div className="service bg-[#FFFFFF] flex py-10 px-8 items-center border-none rounded-sm hover:shadow-lg transition-all delay-100">
                        <ThemeProvider theme={theme}>
                            <AutoGraphIcon color='primary' fontSize='large' />
                        </ThemeProvider>
                        <h4 className='text-[#11161e] pl-2'>Yazilim Gelistirme</h4>
                    </div>
                    <div className="service bg-[#FFFFFF] flex py-10 px-8 items-center border-none rounded-sm hover:shadow-lg transition-all delay-100">
                        <ThemeProvider theme={theme}>
                            <AutoGraphIcon color='primary' fontSize='large' />
                        </ThemeProvider>
                        <h4 className='text-[#11161e] pl-2'>Yazilim Gelistirme</h4>
                    </div>
                    <div className="service bg-[#FFFFFF] flex py-10 px-8 items-center border-none rounded-sm hover:shadow-lg transition-all delay-100">
                        <ThemeProvider theme={theme}>
                            <AutoGraphIcon color='primary' fontSize='large' />
                        </ThemeProvider>
                        <h4 className='text-[#11161e] pl-2'>Yazilim Gelistirme</h4>
                    </div>
                    <div className="service bg-[#FFFFFF] flex py-10 px-8 items-center border-none rounded-sm hover:shadow-lg transition-all delay-100">
                        <ThemeProvider theme={theme}>
                            <AutoGraphIcon color='primary' fontSize='large' />
                        </ThemeProvider>
                        <h4 className='text-[#11161e] pl-2'>Yazilim Gelistirme</h4>
                    </div>
                    <div className="service bg-[#FFFFFF] flex py-10 px-8 items-center border-none rounded-sm hover:shadow-lg transition-all delay-100">
                        <ThemeProvider theme={theme}>
                            <AutoGraphIcon color='primary' fontSize='large' />
                        </ThemeProvider>
                        <h4 className='text-[#11161e] pl-2'>Yazilim Gelistirme</h4>
                    </div>

                </div>

            </div>
            <Portfolio/>
        </div>
    )
}

export default Services