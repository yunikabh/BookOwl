"use client"; // For client-side rendering
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
// import {
//   BookOpen,
//   Feather,
//   ClipboardList,
//   Heart,
//   User,
//   Mail,
//   History,
//   BookHeart,
// } from "lucide-react";
import { useEffect, useState } from "react";
import $axios from "@/lib/axios.instance";
// import { Heart } from "lucide-react";

// const categories = [
//   { name: "Fiction", icon: <BookOpen size={24} /> },
//   { name: "Thriller", icon: <Feather size={24} /> },
//   { name: "Non-fiction", icon: <ClipboardList size={24} /> },
//   { name: "Fantasy", icon: <Heart size={24} /> },
//   { name: "Biography", icon: <User size={24} /> },
//   { name: "Romance", icon: <BookHeart  size={24}/>},
//   { name: "Mystery", icon: <Mail size={24} /> },
//   { name: "Historical", icon: <History size={24} /> },
// ];


const CollectionCarousel = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

const getData = async () => {
    try {
      const response = await $axios.get("/category/getCategory");

      // Check if the response has the expected structure
      if (response && response.data && response.data.data) {
        setData(response.data.data);
      } else {
        setError("Unexpected response structure");
      }
    } catch (err) {
      // If an error occurs during the API call, set the error state
      setError(`Error fetching data: ${err.message}`);
    }
  };
  return (
    <div className="bg-white py-8 px-4 mt-16 h-52 rounded-full ml-10 mr-10 border border-black">
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
        {data.map((category) => (
          <SwiperSlide key={category._id}>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 mt-7 text-white flex items-center justify-center rounded-full bg-slate-400 text-xl">
                {/* {category.icon} */}
                {/* <Heart  size={24} />  */}
               <img src= {category.categoryIcon} className="p-2" />
              </div>
              <h3 className="text-lg font-bold">{category.categoryName}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionCarousel;
