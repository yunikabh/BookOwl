"use client";
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Payment = () => {
  const [formData, setFormData] = useState({
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    address: "",
    city: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Processing Payment", formData);
    // Integrate with a payment gateway like Stripe or Razorpay
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-6 shadow-lg">
      <CardContent>
        <h2 className="text-xl font-semibold mb-4">Payment Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name on Card</Label>
            <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <Label>Card Number</Label>
            <Input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required maxLength="16" />
          </div>
          <div className="flex space-x-2">
            <div>
              <Label>Expiry Date</Label>
              <Input type="text" name="expiry" value={formData.expiry} onChange={handleChange} required placeholder="MM/YY" />
            </div>
            <div>
              <Label>CVV</Label>
              <Input type="password" name="cvv" value={formData.cvv} onChange={handleChange} required maxLength="3" />
            </div>
          </div>
          <div>
            <Label>Billing Address</Label>
            <Input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </div>
          <div className="flex space-x-2">
            <div>
              <Label>City</Label>
              <Input type="text" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div>
              <Label>ZIP Code</Label>
              <Input type="text" name="zip" value={formData.zip} onChange={handleChange} required maxLength="6" />
            </div>
          </div>
          <Button type="submit" className="w-full">Pay Now</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Payment;
