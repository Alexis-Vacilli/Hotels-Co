import { useRouter } from "next/router";
import React, { useState,useEffect } from "react";
import Header from "../components/Header";
import Image from "next/image";
import data from "../data";
import Footer from "../components/Footer";
import Head from "next/head";
import { IoMdClose } from "react-icons/io";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function DetailedHotel() {
  const router = useRouter();
  const {id}  = router.query;
  // useEffect(() => {
  //   if (router.isReady) return 
  // }, [router.isReady])
  const slide = data[id - 1].slides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [open, setOpen] = useState(false);

  

  const handleOpen = (index) => {
    setCurrentIndex(index);
    setOpen(!open);
  };


  const goToNextSlide = () => {
    const isLastSlide = slide.length - 1 === currentIndex;
    const newSlide = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newSlide)
  }

  const goToPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newSlide = isFirstSlide ? slide.length - 1: currentIndex - 1;
    setCurrentIndex(newSlide)
  }

  return (
    <div>
      <Head>
        <title>Detailed</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {open && (
        <div className="sticky h-screen w-screen top-0 left-0 z-50 bg-black">
          <div className="absolute border-2 text-white top-10 right-10 bg-transparent bg-opacity-60 rounded-full p-2">
            <IoMdClose
              className="cursor-pointer font-bold"
              onClick={handleOpen}
            />
          </div>
          <div className="text-white font-semibold absolute top-10 left-1/2">{currentIndex + 1} / {slide.length}</div>
          <div className="w-full h-full flex justify-center items-center space-x-44">
            <div className="bg-transparent border-2  bg-opacity-60 cursor-pointer p-2 rounded-full hover:bg-gray-700">
              <AiOutlineLeft className=" font-bold text-white" onClick={goToPreviousSlide}/>
            </div>
            <div>
              <Image src={slide[currentIndex]} alt="image-slide" className="rounded-sm transition duration-300 ease-in-out" />
            </div>
            <div className="bg-transparent border-2  bg-opacity-60 cursor-pointer p-2 rounded-full hover:bg-gray-700">
              <AiOutlineRight className=" font-bold text-white" onClick={goToNextSlide} />
            </div>
          </div>
        </div>
      )}
      <Header />
      <main className="max-w-9xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h1 className="text-2xl font-semibold text-gray-800">
            Classic family rooms
          </h1>
          <div className="flex space-x-2 mt-2">
            <h2 className="text-gray-600 font-light">Superhost</h2>
            <h2>Stellerbonch, Cape Town, South Africa</h2>
          </div>
          <div className="grid grid-cols-4 gap-2 mt-5 mb-5">
            {slide?.map((item, index) =>
              index === 0 ? (
                <div
                  key={index}
                  className="w-full col-span-2 row-span-2 cursor-pointer"
                >
                  <Image
                    src={item}
                    alt={item}
                    objectFit="cover"
                    className="w-full rounded-l-lg"
                    onClick={() => handleOpen(index)}
                  />
                </div>
              ) : (
                <div key={index} className="w-full cursor-pointer">
                  <Image
                    src={item}
                    alt={item}
                    objectFit="cover"
                    className="w-full rounded-r-lg"
                    onClick={() => handleOpen(index)}
                  />
                </div>
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default DetailedHotel;
