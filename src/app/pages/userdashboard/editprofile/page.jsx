"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

// Schema for form validation using Zod
const profileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  username: z.string().startsWith("@", "Username must start with '@'."),
  bio: z.string().max(200, "Bio cannot exceed 200 characters.").optional(),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits."),
  address: z.string().min(5, "Address must be at least 5 characters."),
});

export default function ProfilePage() {
  const form = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      name: "neupaneaisha45",
      username: "@neupaneaisha45",
      bio: "",
      phone: "",
      address: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Profile Updated:", data);
    alert("Profile Updated Successfully!");
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex  flex-grow overflow-hidden">
        {/* Sidebar */}
       

        {/* Profile Section */}
        <div className="flex-grow overflow-y-auto bg-[#E6D4B9] p-8">
          <div className="max-w-4xl mx-auto bg-white shadow rounded-lg p-8">
            <h1 className="text-4xl font-bold font-serif text-[#8B3623] mb-6">
              Edit My Profile
            </h1>

            <div className="space-y-8">
              {/* Profile Picture Section */}
              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-[#BD9D86] flex items-center justify-center text-white text-6xl font-light">
                    {form.getValues("name")[0]?.toUpperCase()}
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                    <Camera className="w-5 h-5 text-gray-500 hover:text-gray-700" />
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  {/* Name Field */}
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter your name" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Username Field */}
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter your username" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Bio Field */}
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Bio</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Tell us about yourself" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number Field */}
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter your phone number" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Address Field */}
                  <FormField
                    control={form.control}
                    name="address"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Address</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Enter your address" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#8B3623] text-white"
                  >
                    Save Changes
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>

    
    </div>
  );
}
