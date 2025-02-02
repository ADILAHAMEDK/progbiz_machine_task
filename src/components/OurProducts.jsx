import React from 'react';
import { motion } from 'framer-motion';
import o1 from '../assets/images/o1.png';
import o2 from '../assets/images/o2.png';
import o3 from '../assets/images/o3.png';
import o4 from '../assets/images/o4.png';
import o5 from '../assets/images/o5.png';
import o6 from '../assets/images/o6.png';
import arrow2 from '../assets/images/arrow2.png';

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const OurProducts = () => {
  return (
    <div className='px-3 sm:px-8 mt-3 sm:mt-5 md:mt-8 lg:mt-14 xl:mt-20'>
      <div>
        <h4 className='text-[rgba(57,125,168,1)] font-sans font-medium text-[20px] leading-[34px]'>OUR PRODUCTS</h4>
        <h1 className='font-sans font-medium text-[22px] sm:text-[40px] lg:text-[50px] xl:text-[60px] leading-[26px] sm:leading-[36px] lg:leading-[47px] xl:leading-[57px] text-[rgba(11,24,38,1)]'>
          Explore Our Top <span className='sm:block'>Categories</span>
        </h1>
        <p className='mt-1 sm:mt-3 md:w-[490.86px] font-sans font-light text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30.6px] text-[rgba(84,84,113,1)]'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      <div className='mt-4 sm:mt-5 md:mt-10 sm:flex sm:justify-between sm:gap-8'>
        <motion.div 
          className='sm:w-[50%]'
          variants={fadeInLeft} 
          initial='hidden' 
          whileInView='visible' 
          viewport={{ once: true }}
        >
          {[{ img: o1, title: 'Air Conditioner' }, { img: o3, title: 'Chillers' }, { img: o5, title: 'Ice Makers' }].map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.title} className='w-full h-[250px] sm:h-[300px] md:h-[372.79px]' />
              <div className='mt-2 sm:mt-3 md:mt-8 mb-5 sm:mb-7 md:mb-20 flex items-center gap-2'>
                <h3 className='font-sans font-medium text-[18px] md:text-[24px] leading-[33.6px] text-[rgba(34,31,29,1)]'>{item.title}</h3>
                <img src={arrow2} alt='arrow' className='w-[16px] h-[16px] object-contain mt-1 md:mt-2' />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div 
          className='sm:w-[50%]'
          variants={fadeInRight} 
          initial='hidden' 
          whileInView='visible' 
          viewport={{ once: true }}
        >
          {[{ img: o2, title: 'Air Cooler' }, { img: o4, title: 'Appliances' }, { img: o6, title: 'Water Coolers' }].map((item, index) => (
            <div key={index}>
              <img src={item.img} alt={item.title} className='w-full h-[250px] sm:h-[300px] md:h-[543.79px]' />
              <div className='mt-2 sm:mt-3 md:mt-8 mb-5 sm:mb-7 md:mb-20 flex items-center gap-2'>
                <h3 className='font-sans font-medium text-[18px] md:text-[24px] leading-[33.6px] text-[rgba(34,31,29,1)]'>{item.title}</h3>
                <img src={arrow2} alt='arrow' className='w-[16px] h-[16px] object-contain mt-1 md:mt-2' />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default OurProducts;