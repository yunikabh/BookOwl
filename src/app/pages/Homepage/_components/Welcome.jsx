"use client";

import React from 'react';

  import Link from 'next/link';
  // import Layout from "../Homepage /Layout";
  


export default function Welcome() {
  return (
   
      <main className="p-6">
        <h1 className="text-3xl font-bold  text-[#6d433d] mb-6">Welcome to BookOwl</h1>
        <p className="text-[#942372] text-2xl font-semibold">Here are some recommendations for you!</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {/* Example Book Cards */}
          <div className=" p-4 rounded-lg shadow-md text-center mb-[50]">
            <img 
              src="/photos/user.png" 
              alt="Book Cover" 
              className="w-70 h-65 object-cover rounded-md mb-4" 
            />
            <div className="space-x-2">
              <button className="bg-[#5d768a] text-white py-2 px-4 rounded  hover:bg-blue-400">
                Buy Now
              </button>
              <Link href="/review">
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                Review
              </button>
              </Link>
            </div>
          </div>

          <div className="p-4 rounded-lg shadow-md text-center mb-[50]">
            <img 
          
             src="/photos/user.png" 
             alt="Book Cover" 
             className="w-70 h-65 object-cover rounded-md mb-4" 
           />
            <div className="space-x-2">
              <button className="bg-[#5d768a] text-white py-2 px-4 rounded hover:bg-blue-400">
                Buy Now
              </button>
              <Link href="/review">
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                Review
              </button>
              </Link>
            </div>
          </div>

          <div className="p-4 rounded-lg shadow-md text-center mb-[50]">
            <img 
          
             src="/photos/user.png" 
             alt="Book Cover" 
             className="w-70 h-65 object-cover rounded-md mb-4" 
           />
            <div className="space-x-2">
              <button className="bg-[#5d768a] text-white py-2 px-4 rounded hover:bg-blue-400">
                Buy Now
              </button>
              <Link href="/review">
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                Review
              </button>
              </Link>
            </div>
          </div>

          <div className="p-4 rounded-lg shadow-md text-center mb-[50]">
            <img 
          
             src="/photos/user.png" 
             alt="Book Cover" 
             className="w-70 h-65 object-cover rounded-md mb-4" 
           />
            <div className="space-x-2">
              <button className="bg-[#5d768a] text-white py-2 px-4 rounded hover:bg-blue-400">
                Buy Now
              </button>
              <Link href="/review">
              <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                Review
              </button>
              </Link>
            </div>
          </div>

          {/* Add more book cards dynamically here */}
        </div>

         {/* Notifications */}
         <section className="mb-20">
          <h2 className="text-xl text-[#6d433d] ] font-bold mb-4">Notifications</h2>
          <div className="bg-yellow-100 p-4 rounded-lg">
            <p className="text-gray-800">New arrivals and special discounts are available!</p>
            <button className="mt-2 bg-[#265073] text-white px-4 py-2 rounded-lg hover:bg-blue-400">
              Shop Now
            </button>
          </div>
        </section>

                
      </main>
    
  );
}
