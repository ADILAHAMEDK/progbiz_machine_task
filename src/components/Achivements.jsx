import React from 'react'
import arrowLeft from '../assets/images/arrowleft.png';
import arrowRight from '../assets/images/arrowright.png';
import line from '../assets/images/line.png';
import line2 from '../assets/images/line2.png';


const Achivements = () => {
  return (
    <div className=' mt-3 sm:mt-5 md:mt-20 bg-[rgba(243,243,243,1)]'>
        <div className='px-3 py-4 md:py-8 sm:px-8'>
            <div>
                <h3 className='text-[rgba(57,125,168,1)] font-sans font-medium text-[18px]  sm:text-[20px] leading-[18px]'>Achievements</h3>
                <div className='mt-3 sm:mt-4 flex justify-between gap-2'>
                <h1 className='font-sans font-medium text-[24px] sm:text-[29px]  md:text-[60px] leading-[26px] md:leading-[65px] text-[rgba(30,40,49,1)]'>Highlights of Our<span className='block'>Journey</span></h1>
                <div className='flex gap-5'>
                    <img src={arrowLeft} alt="img" className='w-[36px] sm:w-[38px] md:w-[48px] h-[36px] sm:h-[38px] md:h-[48px] object-cover' />
                    <img src={arrowRight} alt="img" className='w-[36px] sm:w-[38px] md:w-[48px] h-[36px] sm:h-[38px] md:h-[48px] object-cover' />
                </div>
                </div>
            </div>

        </div>

        <div className='pl-3 sm:pl-8 mt-15 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 '>
            <div className='px-5 py-10  sm:py-16 border rounded-[15px] relative'>
                <span className='absolute -top-16 sm:-top-20 -left-1 font-sans font-[600] text-[20px] leading-[33px] text-[rgba(0,0,0,1)]'>2012</span>
                <div className='relative'>
                    <div className='flex items-center'>
                    <img src={line} alt="img" className='absolute -top-18 sm:-top-28 h-[100px] sm:h-auto' />
                    <h4 className='ml-9 text-[rgba(9,8,8,1)] font-sans font-medium text-[23.73px] leading-[29.01px]'>Established</h4>
                    </div>
                    <p className='mt-2 text-[rgba(33,30,30,1)] font-sans font-normal text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, conse tetur sadip 
                    Aliquam laoreet sed neque ac vehicula natus.</p>
                </div>
            </div>

            <div className='mt-13 sm:mt-0 px-5 py-10  sm:py-16 border rounded-[15px] relative bg-[rgba(21,33,45,1)] '>
                <span className='absolute -top-16 sm:-top-20 -left-1 font-sans font-[600] text-[20px] leading-[33px] text-[rgba(0,0,0,1)]'>2014</span>
                <div className='relative'>
                    <div className='flex items-center'>
                    <img src={line2} alt="img" className='absolute -top-18 sm:-top-28 h-[100px] sm:h-auto' />
                    <h4 className='ml-9 text-[rgba(255,255,255,1)] font-sans font-medium text-[23.73px] leading-[29.01px]'>Introduced Cooltech - Brand Water Cooler and Chillers</h4>
                    </div>
                    <p className='mt-2 text-[rgba(217,217,217,1)] font-sans font-normal text-[16px] leading-[24px]'>Dealership : WHIRLPOOL , FRIGIDAIRE , MABE , BEKON , IGMA , BLUE STAR , GREE</p>
                </div>
            </div>

            <div className='mt-13 sm:mt-0 px-5 py-10  sm:py-16 border rounded-[15px] relative bg-[rgba(21,33,45,1)] '>
                <span className='absolute -top-16 sm:-top-20 -left-1 font-sans font-[600] text-[20px] leading-[33px] text-[rgba(0,0,0,1)]'>2015</span>
                <div className='relative'>
                    <div className='flex items-center'>
                    <img src={line} alt="img" className='absolute -top-18 sm:-top-28 h-[100px] sm:h-auto' />
                    <h4 className='ml-9 text-[rgba(255,255,255,1)] font-sans font-medium text-[23.73px] leading-[29.01px]'>Started doing HVAC Projects - Labour Campus,Villas etc</h4>
                    </div>
                    <p className='mt-2 text-[rgba(217,217,217,1)] font-sans font-normal text-[16px] leading-[24px]'>Dealership : SUPER GENARAL LG , AKAI , AUX ,WESTPOINT</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Achivements 








