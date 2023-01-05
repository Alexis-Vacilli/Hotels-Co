import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineHeart } from "react-icons/ai";
import { MdOutlineChevronLeft, MdOutlineChevronRight } from "react-icons/md";
import { useRouter } from "next/router";


function Card({ slides, location, owner, price, id }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPreviousIndex = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNextIndex = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const goToDetailedPage = () => {
    router.push({
      pathname:"/detailedHotel",
      query: {
        id,
        location,
        owner,
      }
    })
  }
  const router = useRouter();
  return (
    <div className="cursor-pointer relative">
      <AiOutlineHeart className="h-7 w-7 z-10 absolute top-5 right-3 bg-transparent text-white" />
      <div className="relative h-80 w-80">
        <div className="absolute z-10 bg-white p-2 rounded-full top-1/2 left-3 hover:scale-95">
          <MdOutlineChevronLeft onClick={goToPreviousIndex} />
        </div>
        <div className="absolute z-10 bg-white p-2 rounded-full top-1/2 right-3 hover:scale-95">
          <MdOutlineChevronRight onClick={goToNextIndex} />
        </div>
        <Image
          src={slides[currentIndex]}
          fill
          objectFit="cover"
          className="rounded-xl "
          alt="image"
          onClick={goToDetailedPage}
        />
        <div className="absolute bottom-3 w-full flex space-x-1 justify-center">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="z-10 text-xs font-bold text-gray-300 rounded-full"
              onClick={() => goToSlide(slideIndex)}
            >
              ●
            </div>
          ))}
        </div>
      </div>
      <p className="mt-3 text-gray-900 font-semibold">{location}</p>
      <h2 className="text-gray-400 font-thin">{`Hosted by ${owner}`}</h2>
      <h2 className="">{`$${price} night`}</h2>
    </div>
  );
}

export default Card;
