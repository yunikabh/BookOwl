// import logo from "../../../lib/photos/logo.png";
"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu, SquareX } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "About us", href: "/about-us" },
  { id: 3, name: "Contact us", href: "/" },
];
const navDarkItems = [
  {
    id: 4,
    name: "Browse",
    href: "/",
  },
];
export default function Navbar() {
  return (
    <div className="">
      <MobileNav />
      <div
        className="hidden fixed w-[100%]  lg:flex justify-between items-center ml-[5%] bg-transparent z-50 "
        data-aos="fade-down"
      >
        <div className="">
          <Link href="/">
            <img src="/photos/logo.png" alt="Logo"></img>
          </Link>
        </div>

        <NavigationMenu className="flex gap-10 text-[#945F39] px-[5%] mr-[5%]">
          <NavigationMenuList className="flex gap-24">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <a href={item.href}>{item.name}</a>
              </NavigationMenuItem>
            ))}
            {navDarkItems.map((item) => (
              <NavigationMenuItem className="text-white" key={item.id}>
                <a href={item.href}>{item.name}</a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
          <Button
            variant="outline"
            className="flex text-white ml-16 bg-transparent"
          >
            Login
          </Button>
        </NavigationMenu>
      </div>
    </div>
  );
}
function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="lg:hidden bg-[#f5dac7]">
      {/* Navbar container */}
      <div className="fixed w-[100%] flex justify-between px-[10px] bg-transparent z-40">
        {/* Logo */}
        <div>
          <img src="/photos/logoBird.png" alt="Logo" />
        </div>

        {/* Toggle Button */}
        <Menu className="size-8 cursor-pointer" onClick={toggleMenu}>
          {isOpen ? "Close Menu" : "Open Menu"}
        </Menu>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu} // Clicking the overlay closes the menu
        ></div>
      )}

      {/* Menu Items */}
      {isOpen && (
        <div className="absolute  right-0 w-[70%] h-full bg-[#945F39] z-50 p-4 shadow-lg flex flex-col ">
          
          <div className="flex justify-end"> <SquareX className="size-8 cursor-pointer  text-white" onClick={toggleMenu}>
          {isOpen ? "Close Menu" : "Open Menu"}
       </SquareX></div>
          <NavigationMenu className="text-white block">
            <NavigationMenuList className="flex flex-col gap-y-5 items-start ">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id} className="">
                  <h1 className=""  >
                    <a href={item.href}>{item.name}</a>
                  </h1>
                  
                </NavigationMenuItem>
              ))}
              {navDarkItems.map((item) => (
              <NavigationMenuItem className="text-white" key={item.id}>
                <a href={item.href}>{item.name}</a>
              </NavigationMenuItem>
            ))}

            </NavigationMenuList>
            {/* <Link href="/login"></Link> */}
            <Button
            variant="outline"
            className=" text-white mt-5 bg-transparent "
          >
            Login
          </Button>
          </NavigationMenu>
        </div>
      )}
    </div>
  );
}
