"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function OrderForm() {
  return (
    <div className="min-h-screen bg-[#E6D4B9] flex items-start justify-center py-12 pt-[120px]">
      <div className="container max-w-2xl bg-white shadow rounded p-8">
        <h1 className="text-4xl font-bold font-serif text-[#8B3623] mb-4">Book Order Form</h1>

        <form>
          <div className="space-y-8">
            {/* Full Name */}
            <div className="space-y-4">
              <Label className="text-sm text-gray-500">Full Name</Label>
              <Input
                type="text"
                placeholder="Enter your full name"
                className="border-gray-300"
              />
            </div>

            {/* Email */}
            <div className="space-y-4">
              <Label className="text-sm text-gray-500">Email</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="border-gray-300"
              />
            </div>

            {/* Phone Number */}
            <div className="space-y-4">
              <Label className="text-sm text-gray-500">Phone Number</Label>
              <Input
                type="tel"
                placeholder="Enter your phone number"
                className="border-gray-300"
              />
            </div>

            {/* Shipping Address */}
            <div className="space-y-4">
              <Label className="text-sm text-gray-500">Street</Label>
              <Input
                type="text"
                placeholder="Enter your street address"
                className="border-gray-300"
              />
            </div>
            <div className="space-y-4">
              <Label className="text-sm text-gray-500">City</Label>
              <Input
                type="text"
                placeholder="Enter your city"
                className="border-gray-300"
              />
            </div>
            <div className="space-y-4">
              <Label className="text-sm text-gray-500">State</Label>
              <Input
                type="text"
                placeholder="Enter your state"
                className="border-gray-300"
              />
            </div>

            {/* Book Title */}
            <div className="space-y-4">
              <Label className="text-sm text-gray-500">Book Title</Label>
              <Input
                type="text"
                placeholder="Enter the book title"
                className="border-gray-300"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-8">
              <Button variant="default" className="bg-green-600 text-white hover:bg-green-700">
                Place Order
              </Button>
              <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-100">
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
