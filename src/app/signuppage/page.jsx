"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import React, { useState } from "react";

import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card";
import {  Mail , Eye, EyeOff, User,Lock } from "lucide-react";

// Define form schema with Zod
const formSchema = z.object({
  username: z
    .string()
    .min(5, { message: "Username must be at least 5 characters." }),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/[A-Z]/, "Password must include at least one uppercase letter")
    .regex(/[a-z]/, "Password must include at least one lowercase letter")
    .regex(/[0-9]/, "Password must include at least one number"),
    email:z
    .string().email("Email must be a valid address"),
    password1:z
    .string()

   
});

export default function LoginPage() {

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);

  
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
        username: "",
        password: "",
        password1: "",
        email: "",
    },
});
 

  function onSubmit(values) {
    console.log("Submitted values:", values);
}

  return (
    
    <div className="  flex justify-end w-full px-20 py-20 min-h-screen bg-[rgb(246,220,201)] overflow-hidden">
      {/* <div className="z-50  h-64 "> */}
      <img src="/photos/logo.png" alt="Logo" className="absolute top-5 right-20 w-30 h-10"></img>
      {/* </div>
           */}
<div className="relative  ">
  <div className="sm:absolute  sm:w-[750px] sm:h-[1625px] sm:flex  sm:justify-items-end sm:origin-top-left sm:rotate-[24deg] sm:right-[-40px] sm:top-[-450px] sm:overflow-hidden ">
  <img src="/photos/book.png" alt="Book" className="w-100 h-100"></img>
 </div>
 </div>
 {/* <div className=" flex sm:justify-between sm:flex-row flex-col sm:mx-[10%] mx-[10px] sm:mt-[50px] mt-0"></div> */}

  <Card className=" w-full max-w-md  bg-[rgb(238,218,200)] shadow-lg rounded-lg border border-gray-100 ">
  {/* <div className="z-50">
        <img src="/photos/logo.png" alt="Logo"></img> */}
      
            
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full flex flex-col items-center mt-5 mb-5 ">
            <h1 className="text-2xl font-bold italic text-[#6d433d] "> Welcome To Book Owl </h1>
            <h2 className="font-bold text-[#8d767c] ">Sign Up to continue</h2>

            {/* Username Field */}
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                  <div className="relative w-full">
              <User className="absolute left-2.5 top-2.5  " size={18} />
                  <input type="text"  placeholder="Enter your username" {...field}
                 className="w-full px-12 py-2  text-[#c2918b] rounded-full "   /></div>


                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

        {/* Email field */}
           <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Username</FormLabel> */}
                  <FormControl>
                  <div className="relative w-full">
                  <Mail  className="absolute left-2.5 top-2.5" size={18}/>
                  <input type="text"  placeholder="Enter your email address" {...field}
                 className="w-full px-12 py-2  text-[#c2918b] rounded-full "   /></div>


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
                  {/* <FormLabel>Password</FormLabel> */}
                  <FormControl>
                    <div className="relative w-full">
             <Lock className="absolute left-2.5 top-2.5" size={18}/>
             <button
        type="button"
        className="absolute right-2.5 top-2.5 "
        onClick={() => setIsPasswordVisible((prev) => !prev)}
        // aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {isPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
      </button>

             {/* <EyeOffIcon className="absolute right-2.5 top-2.5" size={18}/> */}
                    <input
                      type="password"
                      placeholder="Create password"
                      className= "w-full px-12 py-2 text-[#c2918b] rounded-full"
                      {...field}
                    /></div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password1"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Password</FormLabel> */}
                  <FormControl>
                    <div className="relative w-full">
             <Lock className="absolute left-2.5 top-2.5" size={18}/>
             <button
        type="button"
        className="absolute right-2.5 top-2.5 "
          onClick={() => setIsConfirmPasswordVisible((prev) => !prev)}
        // aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {isConfirmPasswordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
      </button>

             {/* <EyeOffIcon className="absolute right-2.5 top-2.5" size={18}/> */}
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className= "w-full px-12 py-2 text-[#c2918b] rounded-full"
                      {...field}
                    /></div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />


            {/* Submit Button */}
            <Button className="bg-[#5d768a] rounded-full  w-[150px]"  type="submit">
              Create an account
            </Button>
            {/* <p className="ml-[70px] mt-2"> */}
    
  
    <Button className="text-sm mt-2 bg-slate-100 text-[#a45254]">
      Sign Up with Google </Button>
      <div className="flex">

      <p className="text-[#a75257] text-sm" >
        Already have an account?</p>
        <a 
        href="/loginpage" 
        className="text-sm text-[#8d767c] hover:underline"  >
        Sign-In
      </a>
      </div>
          </form>
        </Form>
       
      </Card>
      
    </div>
  );
}
