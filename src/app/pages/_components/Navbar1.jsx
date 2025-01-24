"use client";
import React, { useEffect, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@radix-ui/react-dropdown-menu";
import {
  ChevronDown,
  Search,
  ShoppingCart,
  Bell,
} from "lucide-react";
import $axios from "@/lib/axios.instance";
import { useRouter } from "next/navigation";
import Link from "next/link";

const navItems = [
  { id: 1, name: "Home", href: "/pages/homepage" },
  { id: 2, name: "About us", href: "/pages/about-us" },
  { id: 3, name: "Contact us", href: "/pages/contactus" },
];

export default function Navbar1() {
  const router = useRouter();
  const [userInitial, setUserInitial] = useState("");
  useEffect(() => {
    const userName = localStorage.getItem("name");
    if (userName) {
      setUserInitial(userName.charAt(0).toUpperCase());
    }
  }, []);
  const logout = async () => {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("id");
      localStorage.removeItem("role");
      await $axios.post("/auth/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between py-2 px-[5%]">
      {/* Logo */}
      <Link href="/pages/homepage">
        <img src="/photos/logo.png" alt="Logo" className="h-16" />
      </Link>

      {/* Navigation Menu */}
      <NavigationMenu className="text-[#5d768a] gap-10">
        <NavigationMenuList className="flex gap-6 lg:gap-12 items-center">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              <a href={item.href} className="hover:text-gray-900">
                {item.name}
              </a>
            </NavigationMenuItem>
          ))}

          {/* Search Option */}
          <div className="flex items-center ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-md px-3 py-1 text-sm  max-w-xs pr-8"
              />
              <button className=" absolute right-2 -translate-y-2.5 top-1/2  text-gray-500 hover:text-gray-900">
                <Search className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <div>
            <ShoppingCart className="w-6 h-6 text-[#5d768a] hover:text-gray-900" />
          </div>

          {/* Notifications */}
          <div>
            <Bell className="w-6 h-6 text-[#5d768a] hover:text-gray-900" />
          </div>

          {/* Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center font-medium text-[#5d768a]">
                {/* <UserCircle className="w-6 h-6 text-[#5d768a]" /> */}
                <div className="w-8 h-8 flex items-center justify-center bg-[#af886b] rounded-full text-white cursor-pointer">
                  {userInitial}
                </div>
                <ChevronDown className="w-5 h-5 ml-1" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              className="bg-white border border-gray-200 rounded-md shadow-lg mt-2 w-40"
              align="end"
            >
              <DropdownMenuItem asChild>
                <a
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  My Profile
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a
                  href="/settings"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button
                  onClick={logout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
