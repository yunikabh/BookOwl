"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { ShoppingCart } from "lucide-react"; // Import the ShoppingCart icon from Lucide
import $axios from "@/lib/axios.instance";

export default function CartPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const userId = localStorage.getItem("id");
    try {
      const response = await $axios.get(`/cart/getCartDetails/${userId}`);
      console.log("Cart", response);
      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      setData(response?.data.data.items);
    } catch (error) {
      console.error("Error fetching cart details:", error);
    } finally {
      setLoading(false);
    }
  };

  // Handle backend interaction for increasing quantity (Increase by 1)
  const handleIncreaseQuantity = async (bookId) => {
    const userId = localStorage.getItem("id");

    try {
      const response = await $axios.put(`/cart/updateCart/${userId}`, {
        bookId,
        quantity: 1, // Increase by 1
      });

      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Quantity Increased:", response);
      getData(); // Refresh cart data
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  // Handle backend interaction for decreasing quantity (Decrease by 1)
  const handleDecreaseQuantity = async (bookId) => {
    const userId = localStorage.getItem("id");

    try {
      const response = await $axios.put(`/cart/updateCart/${userId}`, {
        bookId,
        quantity: -1, // Decrease by 1
      });

      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Quantity Decreased:", response);
      getData(); // Refresh cart data
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  // Handle backend interaction for removing a particular item from the cart
  const handleDeleteItem = async (bookId) => {
    const userId = localStorage.getItem("id");

    try {
      const response = await $axios.put(`/cart/removeFromCart/${userId}`, {
        bookId,
      });

      if (!response) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      console.log("Book Removed from Cart:", response);
      getData(); // Refresh cart data
    } catch (error) {
      console.error("Error removing book from cart:", error);
    }
  };

  // Handle backend interaction for deleting all items from the cart
  const handleDeleteAll = async () => {
    const userId = localStorage.getItem("id");
    const confirmDelete = confirm("Are you sure you want to remove all items?");
    if (!confirmDelete) return;

    try {
      await $axios.put(`/cart/deleteCart/${userId}`);
      setData([]); // Clear data locally as well
    } catch (error) {
      console.error("Error deleting all items:", error);
    }
  };

  const findQuantity = (itemId) => {
    const item = data.find((q) => q._id === itemId);
    return item ? item.quantity : 1;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#E6D4B9] flex items-center justify-center">
        Loading...
      </div>
    );
  }

  // Add conditional rendering for empty cart
  if (data.length === 0) {
    return (
      <div className="min-h-screen bg-[#E6D4B9] flex flex-col items-center justify-center py-10 px-4 mt-16">
        <Card className="max-w-6xl w-full bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold font-serif text-center mb-6 text-[#B83214]">
            <ShoppingCart size={32} className="text-[#B83214] mr-2" />
            My Cart
          </h1>
          <p className="text-lg text-gray-700 text-center">
            Your cart is empty, nothing to show here.
          </p>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E6D4B9] flex flex-col items-center py-10 px-4 mt-16">
      <Card className="max-w-6xl w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold font-serif text-center mb-6 text-[#B83214]">
          <ShoppingCart size={32} className="text-[#B83214] mr-2" />
          My Cart
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((item) => (
            <div
              key={item._id}
              className="relative flex flex-col items-center justify-between p-4 border rounded-lg shadow-sm bg-white"
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-red-600"
                onClick={() => handleDeleteItem(item._id)}
              >
                <X size={20} />
              </button>
              <img
                src={item.bookId.coverImage}
                alt={item.bookId.bookName}
                className="w-40 h-60 object-cover rounded-md mb-4"
              />
              <h2 className="font-medium text-gray-700 text-center">
                {item.bookId.bookName}
              </h2>
              <p className="text-sm text-gray-500 text-center">
                Price: Rs {item.bookId.price.toFixed(2)}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Button
                  variant="outline"
                  className="px-3 py-1"
                  onClick={() => handleDecreaseQuantity(item._id)}
                >
                  -
                </Button>
                <span>{findQuantity(item._id)}</span>
                <Button
                  variant="outline"
                  className="px-3 py-1"
                  onClick={() => handleIncreaseQuantity(item._id)}
                >
                  +
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-between items-center mt-6">
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
