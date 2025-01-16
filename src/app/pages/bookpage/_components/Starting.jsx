"use client";

import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Starting() {
  // Example rating value (you can pass this dynamically later)
  const rating = 4.5;

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white shadow rounded-md flex gap-8">
      {/* Left Column: Book Cover */}
      <div className="flex flex-col items-center w-1/2">
        <img
          src="/photos/cursed.jpeg"
          alt="Book"
          className="w-60 h-80 object-cover mb-4"
        />
      </div>

      {/* Right Column: Book Details */}
      <div className="flex flex-col w-1/2">
        <p className="text-gray-500 text-sm italic">By Eryn Brooks</p>
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Cursed By the Black Heart
        </h1>

        <p className="text-lg font-semibold text-green-600 mb-4">$12.00</p>

        <p className="text-gray-600 mb-6">
          The story explores themes of lies, the blurring of lines between
          heroes and villains, and the search for peace with the past.
        </p>

        {/* Rating Section */}
        <div className="flex items-center mb-4">
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

        {/* Add to Cart Section */}
        <div className="flex items-center gap-4 mb-6">
          <input
            type="number"
            min="1"
            defaultValue="1"
            className="w-16 p-2 border border-gray-300"
          />
          <Button className="rounded-full bg-[#265073]">Add to Cart</Button>
        </div>

        {/* Share Options */}
        <div className="flex items-center gap-4">
          <p className="text-gray-600 font-medium">Share:</p>
          <Facebook className="h-6 w-6 text-blue-600 cursor-pointer" />
          <Twitter className="h-6 w-6 text-blue-400 cursor-pointer" />
          <Instagram className="h-6 w-6 text-pink-500 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
