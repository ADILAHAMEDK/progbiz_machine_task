import React from 'react'
import o1 from '../assets/images/o1.png';
import o2 from '../assets/images/o2.png';
import o3 from '../assets/images/o3.png';
import o4 from '../assets/images/o4.png';
import o5 from '../assets/images/o5.png';
import o6 from '../assets/images/o6.png';
import arrow2 from '../assets/images/arrow2.png';


const OurProducts = () => {
  return (
    <div className='px-3 sm:px-8 mt-3 sm:mt-5 md:mt-8 lg:mt-14 xl:mt-20'>
        <div >
            <h4 className='text-[rgba(57,125,168,1)] font-sans font-medium text-[20px] leading-[34px]'>our Products</h4>
            <h1 className='font-sans font-medium text-[22px] sm:text-[40px] lg:text-[50px]  xl:text-[60px] leading-[26px] sm:leading-[36px]  lg:leading-[47px] xl:leading-[57px] text-[rgba(11,24,38,1)]'>Explore Our Top <span className='sm:block'>Categories</span></h1>
            <p className='mt-1 sm:mt-3 md:w-[490.86px] font-sans font-light text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30.6px] text-[rgba(84,84,113,1)]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply </p>
        </div>

        <div className='mt-4 sm:mt-5 md:mt-10 sm:flex sm:justify-between sm:gap-8'>
            <div className='sm:w-[50%]'>
                <div className=''>
                <img src={o1} alt="img" className='w-full h-[250px] sm:h-[300px] md:h-[372.79px]' />
                <div className='mt-2 sm:mt-3 md:mt-8 mb-5 sm:mb-7 md:mb-20 flex items-center gap-2'>
                    <h3 className='font-sans font-medium text-[18px] md:text-[24px] leading-[33.6px] text-[rgba(34,31,29,1)]'>Air Conditioner</h3>
                    <img src={arrow2} alt="img" className='w-[16px] h-[16px] object-contain mt-1 md:mt-2' />
                </div>

                </div>
                <div className=''>
                <img src={o3} alt="img" className='w-full h-[250px] sm:h-[300px] md:h-[372.79px]'/>
                <div className='mt-2 sm:mt-3 md:mt-8 mb-5 sm:mb-7 md:mb-20 flex items-center gap-2'>
                    <h3 className='font-sans font-medium text-[18px] md:text-[24px] leading-[33.6px] text-[rgba(34,31,29,1)]'>Chillers</h3>
                    <img src={arrow2} alt="img" className='w-[16px] h-[16px] object-contain mt-1 md:mt-2' />
                </div>
                </div>

                <div className=''>
                <img src={o5} alt="img" className='w-full h-[250px] sm:h-[300px] md:h-[372.79px]' />
                <div className='mt-2 sm:mt-3 md:mt-8 flex items-center gap-2'>
                    <h3 className='font-sans font-medium text-[18px] md:text-[24px] leading-[33.6px] text-[rgba(34,31,29,1)]'>Ice Makers</h3>
                    <img src={arrow2} alt="img" className='w-[16px] h-[16px] object-contain mt-1 md:mt-2' />
                </div>
                </div>
            </div>

            <div className=' sm:w-[50%]'>
            <div className=''>
            <img src={o2} alt="img" className='w-full h-[250px] sm:h-[300px] md:h-[543.79px]' />
                <div className='mt-2 sm:mt-3 md:mt-8 mb-5 sm:mb-7 md:mb-20 flex items-center gap-2'>
                    <h3 className='font-sans font-medium text-[18px] md:text-[24px] leading-[33.6px] text-[rgba(34,31,29,1)]'>Air Cooleer</h3>
                    <img src={arrow2} alt="img" className='w-[16px] h-[16px] object-contain mt-1 md:mt-2' />
                </div>
                </div>

                <div className=''>
                <img src={o4} alt="img" className='w-full h-[250px] sm:h-[300px] md:h-[543.79px]' />
                <div className='mt-2 sm:mt-3 md:mt-8 mb-5 sm:mb-7 md:mb-20 flex items-center gap-2'>
                    <h3 className='font-sans font-medium text-[18px] md:text-[24px] leading-[33.6px] text-[rgba(34,31,29,1)]'>Appliances</h3>
                    <img src={arrow2} alt="img" className='w-[16px] h-[16px] object-contain mt-1 md:mt-2' />
                </div>
                </div>

                <div className=''>
                <img src={o6} alt="img" className='w-full h-[250px] sm:h-[300px] md:h-[543.79px]' />
                <div className='mt-2 sm:mt-3 md:mt-8 flex items-center gap-2'>
                    <h3 className='font-sans font-medium text-[18px] md:text-[24px] leading-[33.6px] text-[rgba(34,31,29,1)]'>Water Coolers</h3>
                    <img src={arrow2} alt="img" className='w-[16px] h-[16px] object-contain mt-1 md:mt-2' />
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurProducts



// import React from 'react';
// import o1 from '../assets/images/o1.png';
// import o2 from '../assets/images/o2.png';
// import o3 from '../assets/images/o3.png';
// import o4 from '../assets/images/o4.png';
// import o5 from '../assets/images/o5.png';
// import o6 from '../assets/images/o6.png';
// import arrow2 from '../assets/images/arrow2.png';

// const products = [
//   { img: o1, title: 'Air Conditioner' },
//   { img: o2, title: 'Air Cooler' },
//   { img: o3, title: 'Chillers' },
//   { img: o4, title: 'Appliances' },
//   { img: o5, title: 'Ice Makers' },
//   { img: o6, title: 'Water Coolers' },
// ];

// const OurProducts = () => {
//   return (
//     <div className='px-4 sm:px-8 lg:px-16 xl:px-24 mt-6 sm:mt-10 lg:mt-16'>
//       <div className='text-center'>
//         <h4 className='text-blue-600 font-medium text-xl'>Our Products</h4>
//         <h1 className='text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900'>
//           Explore Our Top <span className='block sm:inline'>Categories</span>
//         </h1>
//         <p className='mt-2 sm:mt-4 max-w-xl mx-auto text-gray-600 text-base sm:text-lg'>
//           Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//         </p>
//       </div>

//       <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
//         {products.map((product, index) => (
//           <div key={index} className='overflow-hidden rounded-2xl shadow-md transition-transform transform hover:scale-105'>
//             <img src={product.img} alt={product.title} className='w-full h-64 object-cover' />
//             <div className='flex items-center justify-between px-4 py-3 bg-white'>
//               <h3 className='text-lg font-semibold text-gray-800'>{product.title}</h3>
//               <img src={arrow2} alt='arrow' className='w-4 h-4' />
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default OurProducts;