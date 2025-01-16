"use client";
import React from 'react';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
  } 
  from "@/components/ui/navigation-menu";
  import { Menu, MenuButton,  MenuItems, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
  const navItems = [
    { id: 1, name: "Home", href: "/" },
    // { id: 2, name: "My Reviews", href: "/review" },
    // { id: 3, name: "My Library", href: "/" },
    { id: 2, name: "About us", href: "/about-us" },
    { id: 3, name: "Contact us", href: "/" },
    { id: 4, name: "Wishlist", href: "/" },
  ];

    export default function Navbar1() {
        return (
    <div className="w-[100%]  flex justify-between items-center mt-[-40] mb-[50]"
    data-aos="fade in">
        
        <div className="ml-20">
          <img src="/photos/logo.png" alt="Logo"></img>
        </div>
  
        <NavigationMenu className="text-[#5d768a] gap-10 px-[5%] mr-52">
          <NavigationMenuList className="flex  gap-24 ">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <a href={item.href}>{item.name}</a>
              
              
            
  
              </NavigationMenuItem>
              
            ))}
             <Menu as="div" className="relative ">
          <MenuButton className="flex items-center  font-medium text-[#5d768a]  px-[5%]">
            <span>Profile</span>
            <ChevronDownIcon className="w-5 h-5 ml-1" />
          </MenuButton>

          <Transition
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <MenuItems className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg focus:outline-none">
              <div className="py-1">
                <MenuItems>
                  {({ active }) => (
                    <a
                      href="/profile"
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      My Profile
                    </a>
                  )}
                </MenuItems>
                <MenuItems>
                  {({ active }) => (
                    <a
                      href="/settings"
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block px-4 py-2 text-sm text-gray-700`}
                    >
                      Settings
                    </a>
                  )}
                </MenuItems>
                <MenuItems>
                  {({ active }) => (
                    <button
                      onClick={() => alert("Logout clicked")} // Replace with logout logic
                      className={`${
                        active ? "bg-gray-100" : ""
                      } block w-full text-left px-4 py-2 text-sm text-gray-700`}
                    >
                      Logout
                    </button>
                  )}
                </MenuItems>
              </div>
            </MenuItems>
          </Transition>
        </Menu>
             </NavigationMenuList>
        </NavigationMenu>
       
      </div>
        )
    }