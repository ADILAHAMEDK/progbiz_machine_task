// import React from 'react'
// import button2 from '../assets/images/button2.png';
// import button3 from '../assets/images/button3.png';
// import section from '../assets/images/section.png';

// const Hero = () => {
//   return (
//     <div className='px-3 sm:px-8 mt-9'>
//         <div>
//             <h1 className='font-sans font-semibold text-[44px] md:text-[64px] md:leading-[76px] text-[rgba(11,24,38,1)]'>Your Trusted Partner In<span className='block'>Cooling Solution</span></h1>
//             <p className='max-w-[720.2px] font-sans font-light text-[18px] leading-[30.6px] text-[rgba(84,84,113,1)] mt-5'>Lorem Ipsum is simply dummy text of the printing and typese tting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
//             <div className='flex items-center gap-5 mt-10'>
//                 <img src={button2} alt="img" className='w-[169.33px] h-[59.2px]' />
//                 <img src={button3} alt="img" className='w-[292px] h-[59px]' />
//             </div>
//             <img src={section} alt="img" className='mt-12 w-full h-[600px]' />
//         </div>
//     </div>
//   )
// }

// export default Hero

//-------------------------------------------------------------------- 2

// import React from 'react'
// import button2 from '../assets/images/button2.png';
// import button3 from '../assets/images/button3.png';
// import section from '../assets/images/section.png';

// const Hero = () => {
//   return (
//     <div className='px-3 sm:px-8 mt-9'>
//         <div>
//             <h1 className='font-sans font-semibold text-[36px] md:text-[44px] lg:text-[64px] md:leading-[76px] text-[rgba(11,24,38,1)]'>
//               Your Trusted Partner In<span className='block'>Cooling Solution</span>
//             </h1>
//             <p className='max-w-full sm:max-w-[720px] font-sans font-light text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30.6px] text-[rgba(84,84,113,1)] mt-5'>
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//             </p>
//             <div className='flex flex-wrap items-center gap-5 mt-10'>
//                 <img src={button2} alt="img" className='w-[140px] sm:w-[169.33px] h-[45px] sm:h-[59.2px]' />
//                 <img src={button3} alt="img" className='w-[240px] sm:w-[292px] h-[45px] sm:h-[59px]' />
//             </div>
//             <img src={section} alt="img" className='mt-12 w-full h-auto max-h-[600px]' />
//         </div>
//     </div>
//   )
// }

// export default Hero;





import React from 'react';
import { motion } from 'framer-motion';
import button2 from '../assets/images/button2.png';
import button3 from '../assets/images/button3.png';
import section from '../assets/images/Section.png';

const Hero = () => {
  return (
    <div className='px-3 sm:px-8 mt:5 md:mt-9'>
      <div>
        <motion.h1
          className='font-sans font-semibold text-[36px] md:text-[44px] lg:text-[64px] md:leading-[76px] text-[rgba(11,24,38,1)]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          Your Trusted Partner In<span className='block'>Cooling Solution</span>
        </motion.h1>
        <motion.p
          className='max-w-full sm:max-w-[720px] font-sans font-light text-[16px] sm:text-[18px] leading-[28px] sm:leading-[30.6px] text-[rgba(84,84,113,1)] mt-3 md:mt-5'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </motion.p>
        <div className='flex flex-wrap items-center gap-5 mt-6 md:mt-10'>
          <motion.img
            src={button2}
            alt="img"
            className='w-[140px] sm:w-[169.33px] h-[45px] sm:h-[59.2px]'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          />
          <motion.img
            src={button3}
            alt="img"
            className='w-[240px] sm:w-[292px] h-[45px] sm:h-[59px]'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
        </div>
        <motion.img
          src={section}
          alt="img"
          className='mt-6 md:mt-12 w-full h-auto max-h-[600px]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, ease: 'easeInOut' }}
        />
      </div>
    </div>
  );
};

export default Hero;