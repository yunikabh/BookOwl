"use client";

import UserSidebar from "./_components/UserSidebar";
import Profile from "./_components/Profile";

export default function UserDashboard() {
  return (
    <div className="flex">
      {/* Sidebar on the left */}
  
        <UserSidebar />
  

      {/* Profile on the right */}
      <div className="w-3/4 ">
        <Profile />
      </div>
    </div>
  );
}
