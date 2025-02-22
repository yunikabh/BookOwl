"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
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
import { useState, useEffect } from "react";

// ✅ Zod Validation Schema (Ensures OTP is required)
const FormSchema = z.object({
  pin: z
    .string()
   
    .length(6, { message: "Enter the OTP first" })
    .regex(/^\d+$/, { message: "OTP must contain only numbers" }),
});

export default function OTP() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });

  const router = useRouter();
  const [otpSent, setOtpSent] = useState(true);
  const [timer, setTimer] = useState(120);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (otpSent && timer > 0) {
      const id = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      setIntervalId(id);

      return () => clearInterval(id);
    } else if (timer === 0) {
      setOtpSent(false);
      setTimer(120);
      clearInterval(intervalId);
    }
  }, [otpSent, timer]);

  const onSubmit = (data) => {
    if (!data.pin) {
      toast.error(" Please enter the OTP before submitting.");
      return;
    }
    toast.success("✅ OTP verified successfully! Redirecting to login...");
    setTimeout(() => {
      router.push("/login");
    }, 1500);
  };

  const handleResendOTP = () => {
    setOtpSent(true);
    setTimer(120);
    toast.info("🔄 A new OTP has been sent to your phone!");
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg"
      >
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#8B3623] font-serif font-semibold text-lg">
                Enter Your 6-digit Code
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
                Please enter the 6-digit code sent to your phone.
              </FormDescription>
              <FormMessage /> {/* ✅ Shows validation errors */}
            </FormItem>
          )}
        />

        {/* Timer display */}
        {otpSent && timer > 0 && (
          <div className="text-sm text-[#8B3623] font-serif">
            OTP will expire in: {formatTime(timer)}
          </div>
        )}

        {/* Button Group */}
        <div className="flex justify-between">
          <Button type="submit" className="bg-[#A98D78] hover:bg-[#b89b86]">
            Submit
          </Button>
          <Button
            type="button"
            onClick={handleResendOTP}
            className="bg-[#A98D78] hover:bg-[#b89b86] ml-4"
          >
            Resend OTP
          </Button>
        </div>
      </form>
    </Form>
  );
}
