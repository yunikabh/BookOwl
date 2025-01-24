"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function CartPage() {
  const cartItems = [
        {
          id: 1,
          name: "Desil A Magazine",
          image: "/photos/cursed.jpeg",
           author: "B. Simmons",
          price: "12.00 USD",
           quantity:2
        },
        {
          id: 2,
          name: "Better Reading",
          image: "/photos/cursed.jpeg",
          author: "Floyd Mila",
          price: "12.00 USD",
          quantity:1
        
        },
        {
          id: 3,
          name: "Breaking Barriers",
          image: "/photos/cursed.jpeg",
          author: "Emma Roberts",
          price: "18.00 USD",
          quantity:2
        
          
        },
        {
          id: 4,
          name: "Legends of the Sky",
          image: "/photos/cursed.jpeg",
         author: "Andrew Miles",
          price: "19.50 USD",
          quantity:1
        
         
        },
        {
          id:5,
          image: "/photos/cursed.jpeg",
         name: "Voices of the Sea",
          author: "Clara Johnson",
          price: "20.00 USD",
          quantity:3
        
          
        },

  ];

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#E6D4B9] flex flex-col items-center py-10 px-4">
      {/* Page Container */}
      <Card className="max-w-4xl w-full bg-white p-6 rounded-lg shadow-md">
        {/* Page Header */}
        <h1 className="text-3xl font-bold  font-serif text-center mb-6 text-[#B83214]">
          Your Cart
        </h1>

        {/* Cart Items */}
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between gap-4 p-4 border-b border-gray-200"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-28 object-cover rounded-md"
              />
              <div className="flex-1">
                <h2 className="font-medium text-gray-700">{item.name}</h2>
                <p className="text-sm text-gray-700">By {item.author}</p>
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" className="px-3 py-1">
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button variant="outline" className="px-3 py-1">
                  +
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Total and Checkout */}
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-xl font-bold text-gray-800">
            Total: ${totalPrice}
          </h2>
          <Button className="bg-[#AF886B] text-white hover:bg-[#bb9679]">
            Proceed to Checkout
          </Button>
        </div>
      </Card>
    </div>
  );
}
