"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import $axios from "@/lib/axios.instance";

// ✅ Define Zod Schema for validation
const schema = z.object({
  name: z.string().min(1, "Name is required"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  shippingAddress: z.object({
    street: z.string().min(1, "Street is required"),
    city: z.string().min(1, "City is required"),
    state: z.string().min(1, "State is required"),
  }),
  paymentMethod: z.enum(["Khalti", "Cash On Delivery"], {
    message: "Please select a valid payment method",
  }),
});

export default function BookForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      shippingAddress: { street: "", city: "", state: "" },
      paymentMethod: "",
    },
  });
  // const form = useForm({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     categoryIcon: null,
  //     name: "",
  //     description: "",
  //   },
  // });
  //    useEffect(() => {
  //     getData();
  //     }, []);
  // const router = useRouter();
  // const userId = localStorage.getItem("id");

  const paymentMethod = watch("paymentMethod");
  // useEffect(() => {
  //   console.log("Validation Errors:", errors);
  // }, [errors]);
  // Handle form submission
  const onSubmit = async (data) => {
    alert("Submit");
    console.log("Form submitted with data:", data); // Debugging line
    try {
      const email = localStorage.getItem("email");
      console.log("Retrieved email from localStorage:", email); // Debugging line
      const userId = localStorage.getItem("id");
      console.log("Retrieved userId from localStorage:", userId); // Debugging line

      const order = { ...data, email };
      console.log("Order data before sending:", order); // Debugging line

      const response = await $axios.post(`/order/createOrder/${userId}`, order);
      console.log("Response Data:", response.data);
      alert("Order placed successfully!");
    } catch (error) {
      console.error("Error occurred:", error);
      alert("Failed to place order");
    }
  };

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
      <div className="container max-w-5xl bg-white shadow rounded p-8">
        <h1 className="text-4xl font-bold font-serif text-[#8B3623] mb-4">
          Book Order Form
        </h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-8">
            {/* Full Name */}
            <div className="space-y-2">
              <Label className="text-[#AF886B] text-lg"> Name</Label>
              <Input
                type="text"
                {...register("name")}
                placeholder="Enter your name"
                className="border-gray-300"
              />
              <p className="text-red-500 text-sm">{errors.name?.message}</p>
            </div>

            {/* Phone Number */}
            <div className="space-y-2">
              <Label className="text-[#AF886B] text-lg">Phone Number</Label>
              <Input
                type="tel"
                {...register("phone")}
                placeholder="Enter your phone number"
                className="border-gray-300"
              />
              <p className="text-red-500 text-sm">{errors.phone?.message}</p>
            </div>

            {/* Shipping Address */}
            <div className="space-y-2">
              <Label className="text-[#AF886B] text-lg">Shipping Address</Label>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  {/* <Label className="text-[#AF886B] text-sm">Street</Label> */}
                  <Input
                    type="text"
                    {...register("shippingAddress.street")}
                    placeholder="Street"
                    className="border-gray-300"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.shippingAddress?.street?.message}
                  </p>
                </div>
                <div>
                  {/* <Label className="text-[#AF886B] text-sm">City</Label> */}
                  <Input
                    type="text"
                    {...register("shippingAddress.city")}
                    placeholder="City"
                    className="border-gray-300"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.shippingAddress?.city?.message}
                  </p>
                </div>
                <div>
                  {/* <Label className="text-[#AF886B] text-sm">State</Label> */}
                  <Input
                    type="text"
                    {...register("shippingAddress.state")}
                    placeholder="State"
                    className="border-gray-300"
                  />
                  <p className="text-red-500 text-sm">
                    {errors.shippingAddress?.state?.message}
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Options */}
            <div className="space-y-4">
              <Label className="text-[#AF886B] text-lg">Payment Method</Label>
              <div className="flex space-x-6">
                {/* Khalti Payment */}
                <div
                  className={`cursor-pointer border p-2 rounded-lg ${
                    paymentMethod === "Khalti"
                      ? "border-[#AF886B]"
                      : "border-gray-300"
                  }`}
                  onClick={() => setValue("paymentMethod", "Khalti")}
                >
                  <Image
                    src="/photos/khalti.png"
                    alt="Khalti"
                    width={100}
                    height={40}
                  />
                </div>
                {/* Cash on delivery */}
                <div
                  className={`cursor-pointer border p-2 rounded-lg ${
                    paymentMethod === "Cash On Delivery"
                      ? "border-[#AF886B]"
                      : "border-gray-300"
                  }`}
                  onClick={() => setValue("paymentMethod", "Cash On Delivery")}
                >
                  <Image
                    src="/photos/cod.png"
                    alt="Cash on Delivery"
                    width={100}
                    height={60}
                  />
                </div>
              </div>

              {/* Selected Payment Method */}
              {paymentMethod && (
                <Input
                  type="text"
                  value={paymentMethod}
                  readOnly
                  className="border-gray-300 mt-2"
                />
              )}
              <p className="text-red-500 text-sm">
                {errors.paymentMethod?.message}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between pt-8">
              <Button
                type="submit"
                className="bg-[#8b3623] text-white hover:bg-[#C4A58D]"
              >
                Place Order
              </Button>
              <Button
                variant="outline"
                className="text-red-600 border-red-600 hover:bg-red-100"
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
