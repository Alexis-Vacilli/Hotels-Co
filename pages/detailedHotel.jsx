import { useRouter } from "next/router";
import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import data from "../data";

function DetailedHotel() {
  const router = useRouter();
  const { id } = router.query;
  const slide = data[id - 1].slides;
  console.log(id, data[id]);

  return (
    <div>
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
          <div className="grid grid-cols-3 mt-5">    
              {slide?.map((item, index) => (
                <Image
                  src={item}
                  key={index}
                  alt={item}
                  objectFit="cover"
                  height={300}
                  width={150}
                />
              ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default DetailedHotel;
