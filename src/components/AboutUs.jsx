import React from "react";
import Slider from "react-slick";
import arrow from "../assets/images/arrow.png";
import a from "../assets/images/a.png";
import a2 from "../assets/images/a2.png";
import a3 from "../assets/images/a3.png";
import a4 from "../assets/images/a4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AboutUs = () => {
  const settings = {
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    draggable: true,
    arrows: true,
    pauseOnHover: true,
    swipeToSlide: true,
    touchMove: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-8">
      <div className="px-3 sm:px-8">
        <h3 className="text-[rgba(57,125,168,1)] font-sans font-medium text-[20px] leading-[27.2px]">
          ABOUT US
        </h3>
        <div className="md:flex justify-between gap-10">
          <h1 className="font-sans font-medium text-[30px] md:text-[60px] md:leading-[62.4px] text-[rgba(11,24,38,1)]">
            Cool<span className="md:block">Technologies</span>
          </h1>
          <p className="w-full max-w-[820px] font-sans font-light text-[18px] leading-[28px] md:text-[24px] md:leading-[45px] text-[rgba(84,84,113,1)]">
            Founded in the Emirate of Abu Dhabi in 2012,
            <span className="xl:block">
              Cool Technologies have emerged to be one of the leading
            </span>
            suppliers of industrial cooling equipment in the UAE for the past
            <span className="xl:block">10 years.</span>
          </p>
        </div>
        <div className="flex justify-end mt-2">
          <img src={arrow} alt="img" className="w-[187px]" />
        </div>
      </div>

      {/* Image Slider */}
      <div className="overflow-hidden mt-8">
        <Slider {...settings} className="px-2">
          {[a2, a, a3, a4].map((image, index) => (
            <div key={index} className="px-2">
              <img
                src={image}
                alt={`img-${index}`}
                className="w-full h-auto max-w-[392px] max-h-[200px] xl:max-h-[380px] mx-auto aspect-square shadow-md"
                // className='w-full max-w-[392px] h-auto max-h-[200px] xl:max-h-[380px] aspect-square mx-auto rounded-md shadow-md'
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default AboutUs;
