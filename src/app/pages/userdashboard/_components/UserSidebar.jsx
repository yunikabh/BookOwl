"use client";

import { useRouter } from "next/navigation";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Home, History, Heart, MessageSquare } from "lucide-react";
import Link from "next/link";

const UserSidebar = () => {
  const router = useRouter();

  const menuItems = [
    { label: "Home", icon: <Home size={18} />, href: "/pages/userdashboard" },
    { label: "Purchase History", icon: <History size={18} />, href: "/purchase-history" },
    { label: "My Favorites", icon: <Heart size={18} />, href: "/favorites" },
    { label: "My Reviews", icon: <MessageSquare size={18} />, href: "/my-reviews" },
    { label: "Login And Security", icon: <MessageSquare size={18} />, href: "/pages/userdashboard/editaccount" },
  ];

  return (
    <div className="h-screen w-64 bg-[#bd9d86] left-0 top-20 flex flex-col">
      {/* Profile Section */}
      <div className="p-4 flex flex-col items-center border-b border-gray-700">
        <Avatar className="w-16 h-16 bg-purple-600">
          <img
            src="/photos/user.jpg"
            alt="Profile Picture"
            className="w-full h-full rounded-full object-cover"
          />
        </Avatar>

        {/* User Info */}
        <div className="text-center mt-2">
          <h1 className="text-lg font-bold text-[#8B3623]">neupaneaisha45</h1>
          <p className="text-sm text-gray-500">@neupaneaisha45</p>
        </div>

        {/* Edit Profile Button */}
        <Link href="/pages/userdashboard/editprofile">
          <Button variant="outline" className="mt-3 text-sm">
            Edit Profile
          </Button>
        </Link>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 mt-4 overflow-y-auto">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Button
                variant="ghost"
                className="w-full justify-start text-left text-[#8B3623] text-lg hover:bg-lime-200"
                onClick={() => router.push(item.href)}
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default UserSidebar;
