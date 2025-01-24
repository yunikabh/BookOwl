"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Trash2, X } from "lucide-react";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Desil A Magazine",
      image: "/photos/cursed.jpeg",
      author: "B. Simmons",
      price: 12.0,
      quantity: 2,
    },
    {
      id: 2,
      name: "Better Reading",
      image: "/photos/cursed.jpeg",
      author: "Floyd Mila",
      price: 12.0,
      quantity: 1,
    },
    {
      id: 3,
      name: "Breaking Barriers",
      image: "/photos/cursed.jpeg",
      author: "Emma Roberts",
      price: 18.0,
      quantity: 2,
    },
    {
      id: 4,
      name: "Legends of the Sky",
      image: "/photos/cursed.jpeg",
      author: "Andrew Miles",
      price: 19.5,
      quantity: 1,
    },
  ]);

  const handleDeleteItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleDeleteAll = () => {
    setCartItems([]);
  };

  const handleIncreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#E6D4B9] flex flex-col items-center py-10 px-4">
      {/* Page Container */}
      <Card className="max-w-6xl w-full bg-white p-6 rounded-lg shadow-md">
        {/* Page Header */}
        <h1 className="text-3xl font-bold font-serif text-center mb-6 text-[#B83214]">
          My Cart
        </h1>

        {/* Cart Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
            >
              {/* Delete Icon */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                onClick={() => handleDeleteItem(item.id)}
              >
                <X size={20} />
              </button>
              <img
                src={item.image}
                alt={item.name}
                className="w-40 h-60 object-cover rounded-md mb-4"
              />
              <h2 className="font-medium text-gray-700 text-center">{item.name}</h2>
              <p className="text-sm text-gray-700 text-center">By {item.author}</p>
              <p className="text-sm text-gray-500 text-center">Price: ${item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-4">
                <Button
                  variant="outline"
                  className="px-3 py-1"
                  onClick={() => handleDecreaseQuantity(item.id)}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>
                <span>{item.quantity}</span>
                <Button
                  variant="outline"
                  className="px-3 py-1"
                  onClick={() => handleIncreaseQuantity(item.id)}
                >
                  +
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Total and Actions */}
        <div className="flex justify-between items-center mt-6">
          <h2 className="text-xl font-bold text-gray-800">
            Total: ${totalPrice.toFixed(2)}
          </h2>
          <div className="flex gap-4">
            <Button
              className="bg-[#b83214] text-white hover:bg-[#e75433]"
              onClick={handleDeleteAll}
            >
              Delete All Items
            </Button>
            <Button className="bg-[#b83214] text-white hover:bg-[#e75433]">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
