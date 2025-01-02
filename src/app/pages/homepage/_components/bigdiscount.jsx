// pages/index.jsx
import Link from "next/link";

export default function Bigdiscount() {
  return (
    <div>
      {/* Aesthetic Big Discount Section (just below the navbar) */}
      <section className="relative bg-gradient-to-r from-blue-50 via-white to-blue-50 py-16 px-6 text-center overflow-hidden mt-4 ">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          
        ></div>

        {/* Discount Content */}
        <div className="relative z-10 max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold text-gray-800 mb-4 animate-slide-in">
            📚 Up to <span className="text-blue-600">50% OFF</span> on All Books! 🎉
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Dive into a world of stories, knowledge, and adventure. Limited-time
            deals you don’t want to miss!
          </p>
          <Link href="/">
            <button className="bg-blue-500 text-white py-3 px-8 rounded-md shadow-md hover:bg-blue-400 transition duration-300">
              Grab Now
            </button>
          </Link>
        </div>

        {/* Decorative Animations */}
        <div className="absolute top-16 left-8 w-32 h-32 bg-blue-200 rounded-full opacity-70 animate-glow"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-300 rounded-full opacity-70 animate-glow"></div>
        <div className="absolute -top-10 right-20 text-[12rem] font-extrabold text-blue-100 opacity-5 animate-float">
          SALE
        </div>
      </section>
    </div>
  );
}
