"use client"; // Enable client-side rendering

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const books = [
  {
    id: 1,
    title: "Caaele Bipin",
    author: "Floyd Mila",
    price: "$12.00 USD",
    image: "", // Replace with your image paths
  },
  {
    id: 2,
    title: "A Novel Designer",
    author: "Robert Fox",
    price: "$14.00 USD",
    image: "", // Replace with your image paths
  },
  {
    id: 3,
    title: "Desi A Magazine",
    author: "B. Simmons",
    price: "$12.00 USD",
    image: "", // Replace with your image paths
  },
  {
    id: 4,
    title: "Better Reading",
    author: "Floyd Mila",
    price: "$12.00 USD",
    image: "", // Replace with your image paths
  },

  {
    id: 5,
    title: "Better Reading",
    author: "Floyd Mila",
    price: "$12.00 USD",
    image: "", // Replace with your image paths
  },

  {
    id: 6,
    title: "Better Reading",
    author: "Floyd Mila",
    price: "$12.00 USD",
    image: "", // Replace with your image paths
  },

  {
    id: 7,
    title: "Better Reading",
    author: "Floyd Mila",
    price: "$12.00 USD",
    image: "", // Replace with your image paths
  },
];

export default function DealsCarousel() {
  useEffect(() => {
    AOS.init(); // Initialize AOS for scroll animations
  }, []);

  return (
    <div className="bg-white py-8 px-4  rounded-lg shadow-md border mx-[5%] -mt-3">
      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {books.map((book) => (
          <SwiperSlide key={book.id}>
            {/* Book Card with AOS Animation */}
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="flex flex-col items-center -mt-5 p-4 space-y-4 bg-gray-50 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              {/* Book Image */}
              <img
                src="/photos/cursed.jpeg"
                alt={book}
                className="w-40 h-60 object-cover rounded-md"
              />
              {/* Book Info */}
              <div className="text-center">
                <p className="text-gray-600 text-sm">By {book.author}</p>
                <h3 className="text-lg font-bold">{book.title}</h3>
                <p className="text-gray-800 text-sm">{book.price}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
