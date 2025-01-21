"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Card } from "@/components/ui/card";
import { Mail, Eye, EyeOff, Lock } from "lucide-react";
import $axios from "@/lib/axios.instance";
import { useRouter } from "next/navigation";

// Define form schema with Zod
const formSchema = z.object({
  // name: z.string().min(5, { message: "Name must be at least 5 characters." }),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number"),
  email: z.string().email("Email must be a valid address"),
});

export default function LoginPage() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  // const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const router = useRouter();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // username: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values) {
    const response = await $axios.post("/auth/login", values);
    console.log(response);
    if (!response) {
      throw new Error(`HTTP error!: Status: ${response.status}`);
    }
    if (response.status === 200) {
      // Store the token in localStorage or cookie
      // Logic for successful response
      const user = await response.data;
      // console.log(user)
      // console.log(response);
      localStorage.setItem("token", response.data.data.accessToken);
      const role = user.data?.user.role;
      console.log("role:", role);
      if (role === "admin") {
        router.push("/admin");
      } else {
        router.push("/pages/homepage");
      }

      // console.log("Submitted values:", values);
    }
    // const form = useForm<z.infer<typeof formSchema>>({
    //   resolver: zodResolver(formSchema),
    //   defaultValues: {
    //     username: "",
    //     password: "",

    //   },
    // });

    // function onSubmit(values: z.infer<typeof formSchema>) {
    //   console.log("Submitted values:", values);
    // }
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[rgb(246,220,201)] overflow-hidden">
      {/* Card with Flex Layout */}
      <Card className="w-full max-w-4xl bg-[#e1ceac] shadow-lg rounded-lg border border-gray-100 relative">
        <div className="flex w-full">
          {/* Owl Image Section */}
          <div className="w-1/2 p-0">
            <img
              src="/photos/owl2.jpg"
              alt="Owl"
              className="w-full h-full object-cover rounded-l-lg" // Cover the full left side and rounded left corner
            />
          </div>

          {/* Form Section */}
          <div className="w-1/2 p-6 flex flex-col justify-center">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6 w-full flex flex-col items-center"
              >
                <h1 className="text-2xl font-bold italic text-[#6d433d]">
                  Welcome To Book Owl
                </h1>
                <h2 className="font-bold text-[#8d767c]">Login to continue</h2>

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative w-full">
                          <Mail
                            className="absolute left-2.5 top-2.5"
                            size={18}
                          />
                          <input
                            type="email"
                            placeholder="Enter your email address"
                            {...field}
                            className="w-full px-12 py-2 text-[#c2918b] rounded-full"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="relative w-full">
                          <Lock
                            className="absolute left-2.5 top-2.5"
                            size={18}
                          />
                          <button
                            type="button"
                            className="absolute right-2.5 top-2.5"
                            onClick={() =>
                              setIsPasswordVisible((prev) => !prev)
                            }
                          >
                            {isPasswordVisible ? (
                              <Eye size={18} />
                            ) : (
                              <EyeOff size={18} />
                            )}
                          </button>
                          <input
                            type={isPasswordVisible ? "text" : "password"}
                            placeholder="Create password"
                            {...field}
                            className="w-full px-12 py-2 text-[#c2918b] rounded-full"
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Submit Button */}
                <Button
                  className="bg-[#5d768a] rounded-full w-[150px]"
                  type="submit"
                >
                  Login
                </Button>
                <Button className="text-sm mt-2 bg-slate-100 text-[#a45254]">
                  Login with Google{" "}
                </Button>
                <div className="flex">
                  <p className="text-[#a75257] text-sm">New User?</p>
                  <a
                    href="/signuppage"
                    className="text-sm text-[#8d767c] hover:underline"
                  >
                    Sign Up
                  </a>
                </div>
              </form>
            </Form>
          </div>
        </div>
      </Card>

      {/* Logo Image Outside of Card */}
      <div className="absolute top-4 right-20">
        <img
          src="/photos/logo.png" // Replace with your logo image path
          alt="Logo"
          className="w-32 h-12" // Adjust size of the logo
        />
      </div>
    </div>
  );
}
