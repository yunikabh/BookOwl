"use client";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Starting({ data }) {

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration as needed
  }, []);

  // Example rating value (you can pass this dynamically later)
  const rating = data.averageRating || 0;

  console.log(data);
  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow  flex flex-col lg:flex-row gap-8 ">
      {/* Left Column: Book Cover */}
      <div className="flex flex-col items-center w-full lg:w-1/2"
      data-aos="fade-right">
        <img
          src={
            data?.coverImage
              ? data.coverImage.replace(/\\/g, "/") // Replace backslashes with forward slashes
              : "/images/default-cover.jpg" // Fallback to default cover image
          }
          alt="Cover Image"
          className="w-full h-full object-contain rounded-sm"
        />
      </div>

      {/* Right Column: Book Details */}
      <div className="flex flex-col mt-24 lg:mt-3 w-full lg:w-1/2"
      data-aos="fade-left">
        <p className="text-gray-500 text-lg italic">
          By {data.author.authorName}
        </p>
        <h1 className="text-2xl font-bold text-[#b68a6a] mb-2">
          {data.bookName}
        </h1>
        <div className="flex items-center mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-6 w-6 ${
                i < Math.floor(rating) || (i < rating && rating % 1 !== 0)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
              fill={i < Math.floor(rating) ? "currentColor" : "none"}
            />
          ))}
          <span className="ml-2 text-gray-600">({rating})</span>
        </div>

        <p className="text-lg font-semibold text-green-600 mb-3">
          Price: Rs {data.price}
        </p>
        <p className="text-gray-600 mb-3">{data.bookSummary}</p>
        <p className="text-gray-500">
          {" "}
          Category:{" "}
          {data.category.length > 0
            ? data.category.map((cat) => cat.categoryName).join(", ")
            : "N/A"}
        </p>
        <p className="text-gray-500">Pages: {data.pages}</p>
        <p className="text-gray-500">Published Date: {data.publishedDate}</p>
        <p className="text-gray-500">Language: {data.language}</p>
        <p className="text-gray-500">ISBN: {data.ISBN}</p>
        <p className="text-gray-500">Published By: {data.publisher}</p>
        <p className="text-gray-500">
          Mood: {data.mood.length > 0 ? data.mood.join(", ") : "N/A"}
        </p>
        <div className="flex gap-4 mt-6">
          <Button className="rounded-full bg-[#265073]">Buy Now</Button>
          <Button className="rounded-full bg-[#265073]">Add To Cart</Button>
        </div>
      </div>
    </div>
  );
}
