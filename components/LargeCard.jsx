import React from "react";
import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image src={img} fill objectFit="cover" className="rounded-xl" alt={title} />
      </div>
      <div className="absolute top-32 left-12">
        <h2 className="text-4xl text-green-50 font-semibold mb-3 w-64">{title}</h2>
        <h3 className="text-white">{description}</h3>
        <button className="text-sm text-white py-2 px-4 bg-gray-900 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </section>
  );
}

export default LargeCard;
