import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <div>
    <div className="w-full px-[5%] grid sm:grid-cols-4 grid-col-1 m-auto gap-11 z-40  border-2 border-[#265073] py-5 bg-[#f5dac7]">
      <div className="">
        <img src="/photos/logo.png"></img>
        <p>
          BookOwl: Guiding You to Your Next Great Adventure, One Page at a Time!
        </p>
      </div>
      <div className="text-gray-600">
        <p className="font-bold pb-4 text-xl text-black">Contact</p>
        <h1>About us</h1>
        <h1>Contact us</h1>
        <h1>Home</h1>
      </div>
      <div className="text-gray-600 ">
        <p className="font-bold pb-4 text-xl text-black">Quick Links</p>
        <h1>Books</h1>
        <h1>Wishlist</h1>
        <h1>Authors</h1>
      </div>

      <div className="text-gray-600 ">
        <p className="font-bold pb-4 text-xl text-black">Contact us</p>
        <h1> <Phone /> +977 9843987416</h1>
        <h1><Mail />alishashrestha7777@gmail.com </h1>
        <h1>Authors</h1>
      </div>
    </div>
    <div className="w-full px-[5%] bg-[#265073] flex justify-between text-white">
      <h1>@ 2024 BookOwl. All rights reserved</h1>
      <h2>Nepal College Of Information Technology</h2>

    </div>
    </div>
  );
}
