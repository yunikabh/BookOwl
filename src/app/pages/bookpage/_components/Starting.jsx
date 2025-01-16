"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Starting() {
  // Example rating value (you can pass this dynamically later)
  const rating = 4.5;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow rounded-md flex flex-col lg:flex-row gap-8 lg:mt-20">
      {/* Left Column: Book Cover */}
      <div className="flex flex-col items-center w-full lg:w-1/2">
        <img
          src="/photos/cursed.jpeg"
          alt="Book"
          className="w-60 h-96 object-cover mb-4"
        />
      </div>

      {/* Right Column: Book Details */}
      <div className="flex flex-col mt-24 lg:mt-3 w-full lg:w-1/2">
        <p className="text-gray-500 text-lg italic">By Eryn Brooks</p>
        <h1 className="text-2xl font-bold text-[#b68a6a] mb-2">
          Cursed By the Black Heart
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

        <p className="text-lg font-semibold text-green-600 mb-3">Price: 400</p>
        <p className="text-gray-600 mb-3">
          The story explores themes of lies, the blurring of lines between
          heroes and villains, and the search for peace with the past.
        </p>
        <p className="text-gray-500">Genre: Fantasy</p>
        <p className="text-gray-500">Pages: 157</p>
        <p className="text-gray-500">Published Date: October 3, 2024</p>
        <p className="text-gray-500">Language:English</p>
        <p className="text-gray-500">ISBN:9781501110368</p>
        <p className="text-gray-500">Published By: Darkstone Publishing House</p>
        <p className="text-gray-500">Mood:[Intense,Suspenseful,Emotional,Mysterious]</p>
        

        <div className="flex gap-4 mt-6">
          <Button className="rounded-full bg-[#265073]">Buy Now</Button>
          <Button className="rounded-full bg-[#265073]">Add To Cart</Button>
        </div>
      </div>
    </div>

    
  );
}
