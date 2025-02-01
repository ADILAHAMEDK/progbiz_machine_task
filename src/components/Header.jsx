// import React from 'react'
// import logo from '../assets/images/logo.png'
// import button from '../assets/images/button.png'

// const Header = () => {
//   return (
//     <div className='px-3 sm:px-8 py-2 border'>
//         <div className='flex items-center justify-between'>
//             <img src={logo} alt="logo" className='mr-2 w-[120px] h-[30px] md:w-[140px] md:h-[55.45px] bg-cover' />
//             <div className='flex items-center gap-3 sm:gap-8'>
//                 <div className='flex items-center gap-2 sm:gap-5 font-sans font-medium text-[16px] leading-[27.2px] text-black'>
//                     <a>HOME</a>
//                     <a>ABOUT</a>
//                     <a>SERVICES</a>
//                     <a>PRODUCTS</a>
//                     <a>BLOG</a>
//                     <a>CONTACT</a>
//                 </div>
//                 <img src={button} alt="img" className='w-[120px] md:w-[169.34px] md:h-[59.2px]' />

//             </div>
//         </div>
//     </div>
//   )
// }

// export default Header






import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/images/logo.png';
import button from '../assets/images/button.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="px-3 sm:px-8 py-2 mx-auto sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between">
        <img src={logo} alt="logo" className="w-[120px] h-[30px] md:w-[140px] md:h-[55px] mr-2" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-5 font-sans font-medium text-[16px] text-[rgba(34,31,29,1)]">
            <a href="#" className="hover:text-blue-500">HOME</a>
            <a href="#" className="hover:text-blue-500">ABOUT</a>
            <a href="#" className="hover:text-blue-500">SERVICES</a>
            <a href="#" className="hover:text-blue-500">PRODUCTS</a>
            <a href="#" className="hover:text-blue-500">BLOG</a>
            <a href="#" className="hover:text-blue-500">CONTACT</a>
          </nav>
          <img src={button} alt="button" className="w-[120px] lg:w-[169px] h-[50px] lg:h-[59px] cursor-pointer" />
        </div>

        {/* Mobile Icon */}
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white rounded-b-lg mt-2 p-4 space-y-4">
          <nav className="flex flex-col gap-4 font-sans font-medium text-[rgba(34,31,29,1)]">
            <a href="#" className="hover:text-blue-500">HOME</a>
            <a href="#" className="hover:text-blue-500">ABOUT</a>
            <a href="#" className="hover:text-blue-500">SERVICES</a>
            <a href="#" className="hover:text-blue-500">PRODUCTS</a>
            <a href="#" className="hover:text-blue-500">BLOG</a>
            <a href="#" className="hover:text-blue-500">CONTACT</a>
          </nav>
          <img src={button} alt="button" className="w-[100px] h-auto cursor-pointer" />
        </div>
      )}
    </div>
  );
};

export default Header;
