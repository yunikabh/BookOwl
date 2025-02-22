"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { toast } from "sonner";
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
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import Link from "next/link";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export default function OTP() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  function onSubmit(data) {
    toast.success("OTP submitted successfully!", {
      description: `Entered PIN: ${data.pin}`,
    });
  }

  function handleResendOTP() {
    toast.info("A new OTP has been sent to your phone!");
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F5DAC7]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <FormField
            control={form.control}
            name="pin"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-[#8B3623] font-serif font-semibold text-lg">
                  One-Time Password
                </FormLabel>
                <FormControl>
                  <InputOTP maxLength={6} {...field}>
                    <InputOTPGroup>
                      <InputOTPSlot index={0} />
                      <InputOTPSlot index={1} />
                      <InputOTPSlot index={2} />
                      <InputOTPSlot index={3} />
                      <InputOTPSlot index={4} />
                      <InputOTPSlot index={5} />
                    </InputOTPGroup>
                  </InputOTP>
                </FormControl>
                <FormDescription className="text-sm text-[#265073] font-serif">
                  Please enter the one-time password sent to your phone.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {/* Button Group: Submit (left) & Resend OTP (right) */}
          <div className="flex justify-between">
            <Link href="/login">
            <Button type="submit" className=" bg-[#A98D78] hover:bg-[#b89b86] ">Submit</Button>
            </Link>
            <Button type="button" onClick={handleResendOTP} className=" bg-[#A98D78]  hover:bg-[#b89b86]  ml-4">
              Resend OTP
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
