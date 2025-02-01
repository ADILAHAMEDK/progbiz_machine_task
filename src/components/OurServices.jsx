import React from 'react'
import button4 from '../assets/images/button4.png';
import button5 from '../assets/images/button5.png';
import ac1 from '../assets/images/ac1.png';
import knowMore from '../assets/images/knowmore.png';
import arrowUp from '../assets/images/arrowup.png';

const OurServices = () => {
  return (
    <div className='px-3 sm:px-8 mt-6 md:mt-20 lg:mt-25'>
        <div className=' md:flex justify-between gap-2 xl:gap-20'>
            <div className=''>
                <h4 className='text-[rgba(57,125,168,1)] font-sans font-medium text-[20px] leading-[34px]'>OUR SERVICES</h4>
                <h1 className='sm:mt-1 lg:mt-2 font-sans font-medium text-[30px] leading-[30px] xl:text-[60px] xl:leading-[60px] text-[rgba(30,40,49,1)]'>Professional<span className='block'>Services Tailored</span><span className='block'>for You</span></h1>
                <p className='mt-2 sm:mt-3 md:mt-5 lg:mt-8 text-[rgba(84,84,113,1)] font-sans font-light text-[16px] sm:text-[18px] leading-[26.6px] sm:leading-[30.6px] max-w-[543px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an</p>
                <div className='mt-2 sm:mt-3 md:mt-5 lg:mt-8 flex items-center gap-3'>
                    <img src={button4} alt="img" className='w-[180px] lg:w-[238px] xl:w-[338px]' />
                    <img src={button5} alt="img" className='w-[100px] lg:w-[138px] xl:w-[189px]' />
                </div>
            </div>

            <div className='mt-6 sm:mt-3'>
                <div className='sm:flex items-center xl:items-start  gap-3'>
                    <img src={ac1} alt="img" className='w-full sm:w-[280px] md:w-[200px] xl:w-[272px] h-[303px]' />
                    <div className='mt-2 sm:mt-0 xl:mt-5'>
                        <h2 className='font-sans font-medium text-[24px] leading-[32.11px] text-[rgba(30,40,49,1)]'>Window Air Conditioning</h2>
                        <p className='mt-1 sm:mt-3 text-[rgba(84,84,113,1)] font-sans font-light text-[16px] sm:text-[18px] leading-[26.6px] sm:leading-[30.6px] sm:max-w-[266px] xl:w-[250px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply </p>
                        <div className='mt-2 sm:mt-0 xl:mt-15 flex items-center'>
                            <img src={knowMore} alt="img" className='w-[103px] object-contain' />
                            <img src={arrowUp} alt="img" className='w-[20px]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurServices