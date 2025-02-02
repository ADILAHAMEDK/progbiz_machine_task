// import React from 'react'
// import arrowLeft from '../assets/images/arrowleft.png';
// import arrowRight from '../assets/images/arrowright.png';
// import line from '../assets/images/line.png';
// import line2 from '../assets/images/line2.png';


// const Achivements = () => {
//   return (
//     <div className=' mt-3 sm:mt-5 md:mt-20 bg-[rgba(243,243,243,1)]'>
//         <div className='px-3 py-4 md:py-8 sm:px-8'>
//             <div>
//                 <h3 className='text-[rgba(57,125,168,1)] font-sans font-medium text-[18px]  sm:text-[20px] leading-[18px]'>Achievements</h3>
//                 <div className='mt-3 sm:mt-4 flex justify-between gap-2'>
//                 <h1 className='font-sans font-medium text-[24px] sm:text-[29px]  md:text-[60px] leading-[26px] md:leading-[65px] text-[rgba(30,40,49,1)]'>Highlights of Our<span className='block'>Journey</span></h1>
//                 <div className='flex gap-5'>
//                     <img src={arrowLeft} alt="img" className='w-[36px] sm:w-[38px] md:w-[48px] h-[36px] sm:h-[38px] md:h-[48px] object-cover' />
//                     <img src={arrowRight} alt="img" className='w-[36px] sm:w-[38px] md:w-[48px] h-[36px] sm:h-[38px] md:h-[48px] object-cover' />
//                 </div>
//                 </div>
//             </div>

//         </div>

//         <div className='px-3 sm:px-8 mt-15 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6 '>
//             <div className='px-5 py-8  sm:py-13  md:py-16 border rounded-[15px] relative'>
//                 <span className='absolute -top-17 sm:-top-22 md:-top-20 -left-1 font-sans font-[600] text-[20px] leading-[33px] text-[rgba(0,0,0,1)]'>2012</span>
//                 <div className='relative'>
//                     <div className='flex items-center'>
//                     <img src={line} alt="img" className='absolute -top-18 sm:-top-28 h-[100px] sm:h-auto' />
//                     <h4 className='ml-9 text-[rgba(9,8,8,1)] font-sans font-medium text-[18px] md:text-[23.73px] leading-[20px] md:leading-[29.01px]'>Established</h4>
//                     </div>
//                     <p className='mt-2 text-[rgba(33,30,30,1)] font-sans font-normal text-[15px] sm:text-[16px] leading-[24px]'>Lorem ipsum dolor sit amet, conse tetur sadip 
//                     Aliquam laoreet sed neque ac vehicula natus.</p>
//                 </div>
//             </div>

//             <div className='mt-13 sm:mt-0 px-5 py-8  sm:py-13  md:py-16 border rounded-[15px] relative bg-[rgba(21,33,45,1)] '>
//                 <span className='absolute -top-17 sm:-top-22 md:-top-20 -left-1 font-sans font-[600] text-[20px] leading-[33px] text-[rgba(0,0,0,1)]'>2014</span>
//                 <div className='relative'>
//                     <div className='flex items-center'>
//                     <img src={line2} alt="img" className='absolute -top-18 sm:-top-28 h-[100px] sm:h-auto' />
//                     <h4 className='ml-9 text-[rgba(255,255,255,1)] font-sans font-medium text-[18px] md:text-[23.73px] leading-[20px] md:leading-[29.01px]'>Introduced Cooltech - Brand Water Cooler and Chillers</h4>
//                     </div>
//                     <p className='mt-2 text-[rgba(217,217,217,1)] font-sans font-normal text-[15px] sm:text-[16px] leading-[24px]'>Dealership : WHIRLPOOL , FRIGIDAIRE , MABE , BEKON , IGMA , BLUE STAR , GREE</p>
//                 </div>
//             </div>

//             <div className='mt-13 sm:mt-0 px-5 py-8  sm:py-13  md:py-16 border rounded-[15px] relative bg-[rgba(21,33,45,1)] '>
//                 <span className='absolute -top-17 sm:-top-22 md:-top-20 -left-1 font-sans font-[600] text-[20px] leading-[33px] text-[rgba(0,0,0,1)]'>2015</span>
//                 <div className='relative'>
//                     <div className='flex items-center'>
//                     <img src={line} alt="img" className='absolute -top-18 sm:-top-28 h-[100px] sm:h-auto' />
//                     <h4 className='ml-9 text-[rgba(255,255,255,1)] font-sans font-medium text-[18px] md:text-[23.73px] leading-[20px] md:leading-[29.01px]'>Started doing HVAC Projects - Labour Campus,Villas etc</h4>
//                     </div>
//                     <p className='mt-2 text-[rgba(217,217,217,1)] font-sans font-normal text-[15px] sm:text-[16px] leading-[24px]'>Dealership : SUPER GENARAL LG , AKAI , AUX ,WESTPOINT</p>
//                 </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Achivements 











import React from 'react';
import { motion } from 'framer-motion';
import arrowLeft from '../assets/images/arrowleft.png';
import arrowRight from '../assets/images/arrowright.png';
import line from '../assets/images/line.png';
import line2 from '../assets/images/line2.png';

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
  }),
};

const Achievements = () => {
  return (
    <div className='mt-3 sm:mt-5 md:mt-20 bg-[rgba(243,243,243,1)]'>
      <div className='px-3 py-4 md:py-8 sm:px-8'>
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h3 className='text-[rgba(57,125,168,1)] font-sans font-medium text-[18px] sm:text-[20px] leading-[18px]'>Achievements</h3>
          <div className='mt-3 sm:mt-4 flex justify-between gap-2'>
            <h1 className='font-sans font-medium text-[24px] sm:text-[29px] md:text-[60px] leading-[26px] md:leading-[65px] text-[rgba(30,40,49,1)]'>
              Highlights of Our<span className='block'>Journey</span>
            </h1>
            <div className='flex gap-5'>
              <motion.img
                src={arrowLeft}
                alt='arrow left'
                className='w-[36px] sm:w-[38px] md:w-[48px] h-[36px] sm:h-[38px] md:h-[48px] object-cover cursor-pointer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
              <motion.img
                src={arrowRight}
                alt='arrow right'
                className='w-[36px] sm:w-[38px] md:w-[48px] h-[36px] sm:h-[38px] md:h-[48px] object-cover cursor-pointer'
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      <div className='px-3 sm:px-8 mt-2 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-6'>
        {[{
          year: '2012',
          title: 'Established',
          description: 'Lorem ipsum dolor sit amet, conse tetur sadip Aliquam laoreet sed neque ac vehicula natus.',
          img: line,
        }, {
          year: '2014',
          title: 'Introduced Cooltech - Brand Water Cooler and Chillers',
          description: 'Dealership: WHIRLPOOL, FRIGIDAIRE, MABE, BEKON, IGMA, BLUE STAR, GREE',
          img: line2,
          dark: true,
        }, {
          year: '2015',
          title: 'Started doing HVAC Projects - Labour Campus, Villas etc',
          description: 'Dealership: SUPER GENERAL, LG, AKAI, AUX, WESTPOINT',
          img: line,
          dark: true,
        }].map((item, i) => (
          <motion.div
            key={i}
            className={`mt-13 sm:mt-0 px-5 py-8 sm:py-13 md:py-16 border rounded-[15px] relative ${item.dark ? 'bg-[rgba(21,33,45,1)]' : ''}`}
            custom={i}
            initial='hidden'
            animate='visible'
            variants={cardVariants}
          >
            <span className='absolute -top-17 sm:-top-22 md:-top-20 -left-1 font-sans font-[600] text-[20px] leading-[33px] text-[rgba(0,0,0,1)]'>{item.year}</span>
            <div className='relative'>
              <div className='flex items-center'>
                <img src={item.img} alt='line' className='absolute -top-18 sm:-top-28 h-[100px] sm:h-auto' />
                <h4 className={`ml-9 font-sans font-medium text-[18px] md:text-[23.73px] leading-[20px] md:leading-[29.01px] ${item.dark ? 'text-white' : 'text-[rgba(9,8,8,1)]'}`}>{item.title}</h4>
              </div>
              <p className={`mt-2 font-sans font-normal text-[15px] sm:text-[16px] leading-[24px] ${item.dark ? 'text-[rgba(217,217,217,1)]' : 'text-[rgba(33,30,30,1)]'}`}>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;






