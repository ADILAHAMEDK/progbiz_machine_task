import React from "react";
import arrowLeft from "../assets/images/arrowleft.png";
import arrowRight from "../assets/images/arrowright.png";
import man from "../assets/images/man.png";
import man2 from "../assets/images/man2.png";
import man3 from "../assets/images/man3.png";
import star from "../assets/images/star.png";
import ReactPlayer from "react-player";

const Testimonials = () => {
  const testimonials = [
    {
      img: man,
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.",
      name: "David Anderson",
      company: "Health Services Group",
      rating: star,
    },
    {
      img: man2,
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever",
      name: "Daniel Harris",
      company: "Medical Solutions",
      rating: star,
    },
    {
      img: man3,
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever.",
      name: "James Clark",
      company: "Health Management",
      rating: star,
    },
  ];

  return (
    <div className="px-4 sm:px-8 border">
      <div className="text-start sm:text-left">
        <h4 className="text-[rgba(57,125,168,1)] font-sans font-medium text-lg sm:text-[20px] leading-[34px]">
          TESTIMONIALS
        </h4>
        <h1 className="font-sans font-bold text-2xl sm:text-4xl lg:text-5xl xl:text-[60px] lg:leading-[62.4px] text-[rgba(11,24,38,1)] lg:mt-1 xl:mt-2">
          Client Stories
        </h1>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 sm:mt-1 xl:mt-5">
        <p className="text-start sm:text-left font-sans text-base sm:text-lg text-[rgba(113,97,84,1)] leading-relaxed max-w-full sm:max-w-md md:max-w-[544.86px]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry standard dummy text.
        </p>

        <div className="flex items-center gap-4">
          <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center  rounded-full transition">
            <img
              src={arrowLeft}
              alt="Previous"
              className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
            />
          </button>
          <button className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full transition">
            <img
              src={arrowRight}
              alt="Next"
              className="w-[40px] h-[40px] md:w-[48px] md:h-[48px]"
            />
          </button>
        </div>
      </div>

      <div className="mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((item, index) => (
          <div key={index} className="bg-[rgba(4,111,226,0.05)] p-6">
            <p className="text-[rgba(113,97,84,1)] font-normal text-[16px] sm:text-[18px] leading-[26px] sm:leading-[30.6px] mb-4">
              {item.p}
            </p>
            <div className="flex items-center gap-4 mb-3">
              <img
                src={item.img}
                alt="img"
                className="w-[60px] h-[60px] sm:w-[68px] sm:h-[68px] rounded-full object-cover"
              />
              <h5 className="text-[16px] font-medium text-[rgba(11,24,38,1)]">
                {item.name}
              </h5>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-[rgba(72,72,104,1)]">
                {item.company}
              </span>
              <img
                src={item.rating}
                alt="rating"
                className="w-[120px] sm:w-[140px] h-[20px] sm:h-[24px]"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-5 md:mt-16 h-[200px] sm:h-[300px] md:h-[482px] shadow-lg rounded-lg overflow-hidden">
        <ReactPlayer
          url="https://youtu.be/nMDV58OjAbg?si=PzFDGTS4X2_ZQATj"
          width="100%"
          height="100%"
          controls
          playing={true}
          muted={true}
          onError={(e) => console.error("Error:", e)}
        />
      </div>
    </div>
  );
};

export default Testimonials;
