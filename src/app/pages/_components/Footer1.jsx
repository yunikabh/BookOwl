import { Mail, Phone } from "lucide-react";
import Link from "next/link"; 

export default function Footer1() {
  return (
    <div>
      <div className="w-full px-[5%] grid sm:grid-cols-3 grid-cols-1 m-auto gap-11  bg-[#E6D4B9] z-40 border-2 border-[#265073] py-5">
        {/* Logo and Description */}
        <div>
          <img src="/photos/logo.png" alt="Book Owl Logo" />
          <p className="text-[#265073] font-serif text-lg">
            BookOwl: Guiding You to Your Next Great Adventure, One Page at a Time!
          </p>
        </div>

        {/* Quick Links, Contact Us, and Location in Grid */}
        <div className="grid grid-cols-3 gap-72 lg:grid-cols-3 w-full">
          {/* Quick Links Section */}
          <div className="text-gray-600 w-36">
            <p className="font-bold pb-4 text-xl text-[#B83214]">Quick Links</p>
            <Link href="/pages/about-us">
              <h1 className="cursor-pointer hover:underline">About us</h1>
            </Link>
            <Link href="/pages/contactus">
              <h1 className="cursor-pointer hover:underline">Contact us</h1>
            </Link>
            <Link href="/pages/homepage">
              <h1 className="cursor-pointer hover:underline">Home</h1>
            </Link>
            <Link href="/pages/categorypage">
              <h1 className="cursor-pointer hover:underline">Our Collections</h1>
            </Link>
          </div>

          {/* Contact Us Section */}
          <div className="text-gray-600 w-40">
            <p className="font-bold pb-4 text-xl text-[#B83214]">Contact us</p>
            <h1> <Phone /> +977 9843987416</h1>
            <h1> <Mail /> bookowl@gmail.com </h1>
          </div>

          {/* Location Section */}
          <div className="text-gray-600 flex flex-col w-64">
            <p className="font-bold pb-4 text-xl text-[#B83214]">Our Location</p>
            <p className="text-gray-600">Visit us at:</p>
            <p className="text-gray-600">
              Nepal College of Information Technology (NCIT), Balkumari, Lalitpur, Nepal.
            </p>
            <Link 
              href="https://www.google.com/maps?q=Nepal+College+of+Information+Technology"
              target="_blank"
              className="text-[#265073] hover:underline"
            >
              View on Google Maps
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full px-[5%] bg-[#265073] flex justify-between text-white">
        <h1>@ 2024 BookOwl. All rights reserved</h1>
        <h2>Nepal College Of Information Technology</h2>
      </div>
    </div>
  );
}
