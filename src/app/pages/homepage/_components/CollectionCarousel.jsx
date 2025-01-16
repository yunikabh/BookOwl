"use client"; // For client-side rendering
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import {
  BookOpen,
  Feather,
  ClipboardList,
  Heart,
  User,
  Mail,
  History,
  BookHeart,
  Link,
} from "lucide-react";

const categories = [
  { name: "Fiction", icon: <BookOpen size={24} /> },
  { name: "Thriller", icon: <Feather size={24} /> },
  { name: "Non-fiction", icon: <ClipboardList size={24} /> },
  { name: "Fantasy", icon: <Heart size={24} /> },
  { name: "Biography", icon: <User size={24} /> },
  { name: "Romance", icon: <BookHeart  size={24}/>},
  { name: "Mystery", icon: <Mail size={24} /> },
  { name: "Historical", icon: <History size={24} /> },
];

const CollectionCarousel = () => {
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
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col items-center space-y-2">
              <div className="h-16 w-16 mt-7 text-white flex items-center justify-center rounded-full bg-black text-xl">
                {category.icon}
              </div>
              <h3 className="text-lg font-bold">{category.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CollectionCarousel;
