"use client";
import { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export default function FirstDesign() {

  return (
    <div
     className="relative bg-[#af886b] text-white p-8 flex items-center justify-between max-w-full rounded-lg  "
      data-aos="fade-down">
    
      {/* Left Section */}
      <div
        className="max-w-xl mr-14"
        data-aos="fade-right" // AOS animation for the left section
      >
        <h1 className="text-7xl font-bold font-serif ">
          DISCOVER OUR LATEST BOOK COLLECTIONS
        </h1>
        <p className="text-2xl font-serif mt-6">
          Dive into the pages, and let the story find you.
        </p>
        <div className="mt-6">
          <Button className="bg-[#5d768a]  text-lg w-40 h-12 text-white hover:scale-105  rounded-full">
            Explore Now
            
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div
      className="ml-14"
        data-aos="fade-left" // AOS animation for the right section
      >
        <Image
          src="/photos/ballad.jpeg"
          alt="Book"
          width={400}
          height={500}
          className="rounded-3xl shadow-lg"
        />
      </div>
    </div>
  );
}
