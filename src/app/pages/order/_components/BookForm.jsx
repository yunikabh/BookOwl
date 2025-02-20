"use client";
// import React, {useEffect} from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

// ✅ Define Zod Schema for validation
const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  paymentMethod: z.string().min(1, "Please select a payment method"),
});

export default function OrderForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const paymentMethod = watch("paymentMethod");

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Order Submitted", data);
    alert("Order placed successfully!");
  };
//    useEffect(() => {
//     getData();
//     }, []);
// const router = useRouter();
  // const userId = localStorage.getItem("id");

  // const handleCreateOrder = async () => {
  //   try {
  //     const order = {  name,phone,email,paymentMethod,shippingAddress: data._id };
  //     const response = await $axios.post(`/order/createOrder/${userId}`, order);
  //     console.log(response);
  //   }
    // const getData = async () => {
    //   const orderId = localStorage.getItem("id");
    //   try {
    //     const response = await $axios.get(`/order/getOrderDetails/${orderId}`);
    //     if (!response) {
    //       throw new Error(`HTTP error! Status: ${response.status}`);
    //     }
       
    //   } catch (error) {
    //     console.error("Error fetching order details:", error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };




  return (
    <div className="min-h-screen bg-[#E6D4B9]">
      <div className="container max-w-3xl bg-white shadow rounded p-8">
        <h1 className="text-4xl font-bold font-serif text-[#8B3623] mb-4">
          Book Order Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8">
            {/* Full Name */}
            <div className="space-y-2">
              <Label className="text-[#AF886B] text-lg">Full Name</Label>
              <Input type="text" {...register("fullName")} placeholder="Enter your full name" className="border-gray-300" />
              <p className="text-red-500 text-sm">{errors.fullName?.message}</p>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label className="text-[#AF886B] text-lg">Phone Number</Label>
              <Input type="tel" {...register("phone")} placeholder="Enter your phone number" className="border-gray-300" />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>

            {/* Shipping Address */}
            <div className="space-y-2">
              <Label className="text-[#AF886B] text-lg">Shipping Address</Label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  {/* <Label className="text-[#AF886B] text-sm">Street</Label> */}
                  <Input type="text" {...register("street")} placeholder="Street" className="border-gray-300" />
                  <p className="text-red-500 text-sm">{errors.street?.message}</p>
                </div>
                <div>
                  {/* <Label className="text-[#AF886B] text-sm">City</Label> */}
                  <Input type="text" {...register("city")} placeholder="City" className="border-gray-300" />
                  <p className="text-red-500 text-sm">{errors.city?.message}</p>
                </div>
                <div>
                  {/* <Label className="text-[#AF886B] text-sm">State</Label> */}
                  <Input type="text" {...register("state")} placeholder="State" className="border-gray-300" />
                  <p className="text-red-500 text-sm">{errors.state?.message}</p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <Label className="text-[#AF886B] text-lg">Payment Method</Label>
              <div className="flex space-x-6">
                {/* Khalti Payment */}
                <div
                  className={`cursor-pointer border p-2 rounded-lg ${paymentMethod === "Khalti" ? "border-[#AF886B]" : "border-gray-300"}`}
                  onClick={() => setValue("paymentMethod", "Khalti")}
                >
                  <Image src="/photos/khalti.png" alt="Khalti" width={100} height={40} />
                </div>
                {/* Cash on delivery */}
                <div
                  className={`cursor-pointer border p-2 rounded-lg ${paymentMethod === "Cash on Delivery" ? "border-[#AF886B]" : "border-gray-300"}`}
                  onClick={() => setValue("paymentMethod", "Cash on Delivery")}
                >
                  <Image src="/photos/cod.png" alt="Cash on Delivery" width={100} height={60} />
                </div>
              </div>

              {/* Selected Payment Method */}
              {paymentMethod && (
                <Input type="text" value={paymentMethod} readOnly className="border-gray-300 mt-2" />
              )}
              <p className="text-red-500 text-sm">{errors.paymentMethod?.message}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-8">
              <Button type="submit" className="bg-[#8b3623] text-white hover:bg-[#C4A58D]">
                Place Order
              </Button>
              <Button type="button" variant="outline" className="text-red-600 border-red-600 hover:bg-red-100">
                Cancel
              </Button>
            </div>
          </div>
        </form>
       

      </div>
     
    </div>
  );
}
