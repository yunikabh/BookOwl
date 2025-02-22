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
import { ChevronDown, ShoppingCart, Menu } from "lucide-react";
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
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const userName = localStorage.getItem("name");
    if (userName) {
      setUserInitial(userName.charAt(0).toUpperCase());
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Change style after scrolling 50px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = async () => {
    const confirmLogout = confirm("Are you sure you want to logout?");
    if (!confirmLogout) return;
    try {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("id");
      localStorage.removeItem("role");
      localStorage.removeItem("Book_cart");
      localStorage.removeItem("email");
      await $axios.post("/auth/logout");
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#E6D4B9] shadow-lg text-[#5d768a]" : "bg-white text-[#5d768a]"
      }`}
    >
      <div className="flex justify-between items-center py-2 px-[5%]">
        {/* Logo */}
        <Link href="/pages/homepage">
          <img
            src="/photos/logo.png"
            alt="Logo"
            className="h-16 sm:h-12 object-contain"
          />
        </Link>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Navigation Menu */}
        <NavigationMenu
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row lg:items-center lg:gap-10 gap-4 absolute lg:static top-full left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 shadow-lg lg:shadow-none`}
        >
          <NavigationMenuList className="flex flex-col lg:flex-row gap-6 lg:gap-12 items-center">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <a
                  href={item.href}
                  className="hover:text-gray-900 block text-lg lg:text-base"
                >
                  {item.name}
                </a>
              </NavigationMenuItem>
            ))}

            {/* Add to Cart */}
            <div>
              <Link href="/pages/addtocart">
                <ShoppingCart className="w-6 h-6 hover:text-gray-900" />
              </Link>
            </div>

            {/* Profile Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center font-medium">
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
                    href="/pages/userdashboard"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Account
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/pages/purchasehistory"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Purchase History
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/pages/myorder"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Orders
                  </a>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <a
                    href="/pages/review"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    My Reviews
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
    </div>
  );
}
