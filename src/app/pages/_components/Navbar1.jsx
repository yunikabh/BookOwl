"use client";
import React from 'react';
import {
    NavigationMenu,
    NavigationMenuList,
    NavigationMenuItem,
  } 
  from "@/components/ui/navigation-menu";
  const navItems = [
    { id: 1, name: "Home", href: "/" },
    // { id: 2, name: "My Reviews", href: "/review" },
    // { id: 3, name: "My Library", href: "/" },
    { id: 2, name: "About us", href: "/about-us" },
    { id: 3, name: "Contact us", href: "/" },
    { id: 4, name: "Wishlist", href: "/" },
    { id: 5,
        name: "Profile", 
        href: "/" ,},
    ];

    export default function Navbar1() {
        return (
    <div className="w-[100%]  flex justify-between items-center mt-[-40] mb-[50]">
        
        <div className="">
          <img src="/photos/logo.png" alt="Logo"></img>
        </div>
  
        <NavigationMenu className="text-[#5d768a] gap-10 px-[5%] mr-52">
          <NavigationMenuList className="flex  gap-24 ">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.id}>
                <a href={item.href}>{item.name}</a>
              
              
            
  
              </NavigationMenuItem>
              
            ))}
             </NavigationMenuList>
        </NavigationMenu>
      </div>
        )
    }