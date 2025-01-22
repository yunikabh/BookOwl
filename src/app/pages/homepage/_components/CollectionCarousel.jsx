"use client";
import { useRouter } from 'next/navigation';// Import useRouter
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
} from "lucide-react";



// const handleNavigation = () => {
//   router.push("/pages/categorypage"); // Replace with your target route
// }

// const categories = [
//   { name: "Fiction", icon: <BookOpen size={24} />, route: "/pages/categorypage" },
//   { name: "Thriller", icon: <Feather size={24} />, route: "/pages/categorypage" },
//   { name: "Non-fiction", icon: <ClipboardList size={24} />, route: "/pages/categorypage" },
//   { name: "Fantasy", icon: <Heart size={24} />, route: "/pages/categorypage" },
//   { name: "Biography", icon: <User size={24} />, route: "/pages/categorypage" },
//   { name: "Romance", icon: <BookHeart size={24} />, route: "/pages/categorypage" },
//   { name: "Mystery", icon: <Mail size={24} />, route: "/pages/categorypage" },
//   { name: "Historical", icon: <History size={24} />, route: "/pages/categorypage" },
// ];
const categories = [
  { name: "Fiction", icon: <BookOpen size={24} />, route: "/pages/categorypage?category=Fiction" },
  { name: "Thriller", icon: <Feather size={24} />, route: "/pages/categorypage?category=Thriller" },
  { name: "Non-fiction", icon: <ClipboardList size={24} />, route: "/pages/categorypage?category=Non-fiction" },
  { name: "Fantasy", icon: <Heart size={24} />, route: "/pages/categorypage?category=Fantasy" },
  { name: "Biography", icon: <User size={24} />, route: "/pages/categorypage?category=Biography" },
  { name: "Romance", icon: <BookHeart size={24} />, route: "/pages/categorypage?category=Romance" },
  { name: "Mystery", icon: <Mail size={24} />, route: "/pages/categorypage?category=Mystery" },
  { name: "Historical", icon: <History size={24} />, route: "/pages/categorypage?category=Historical" },
];



const CollectionCarousel = () => {
  const router = useRouter(); // Initialize useRouter

  const handleCategoryClick = (route) => {
    router.push(route);
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
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div
              className="flex flex-col items-center space-y-2 cursor-pointer"
              onClick={() => handleCategoryClick(category.route)} // Attach click handler
            >
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
