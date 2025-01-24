"use client";

import UserSidebar from "./_components/UserSidebar";
import BPurchased from "./_components/BPurchased";
import BReviewed from "./_components/BReviwed";
import BFavorites from "./_components/BFavorites";

export default function StatsPage() {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-[#bd9d86]">
          <UserSidebar />
        </div>
  
        {/* Main Content Area */}
        <div className="flex-1 -mt-11 pt-16 pb-4 overflow-auto min-h-screen">
          <h1 className="text-5xl font-bold mb-6 text-center font-serif text-[#8B3623]">
            Stats Overview
          </h1>
  
          {/* Displaying the charts in a grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            <BPurchased />
            <BReviewed />
            <BFavorites />
          </div>
        </div>
      </div>
    );
  }