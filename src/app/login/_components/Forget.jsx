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

// Zod validation schema for OTP and new password
const FormSchema = z.object({
  pin: z
    .string()
    .length(6, { message: "Enter the OTP first" })
    .regex(/^\d+$/, { message: "OTP must contain only numbers" }),
  newPassword: z
    .string(),
  confirmPassword: z
    .string()
}).refine((data) => data.newPassword === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export default function ForgotPassword() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
      newPassword: "",
      confirmPassword: "",
    },
  });

  const router = useRouter();
  const [otpSent, setOtpSent] = useState(true);
  const [timer, setTimer] = useState(300);
  const [intervalId, setIntervalId] = useState(null);
  const [showModal, setShowModal] = useState(true);
  const [showResetForm, setShowResetForm] = useState(false);

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
      toast.error("Please enter the OTP before submitting.");
      return;
    }

    // OTP verification logic
    toast.success("OTP verified successfully! You can now reset your password.");

    // Show the reset password form after OTP is submitted
    setShowResetForm(true);
  };

  const handleResendOTP = () => {
    setOtpSent(true);
    setTimer(120);
    toast.info("A new OTP has been sent to your mail!");
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const handleCloseModal = () => {
    setShowModal(false);
    if (timer > 0) {
      clearInterval(intervalId);
    }
  };

  if (!showModal) return null;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-2/3 max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg relative"
      >
        {/* Close Button */}
        <Button
          type="button"
          onClick={handleCloseModal}
          className="absolute top-2 right-2 bg-red-500 text-white hover:bg-red-600"
        >
          X
        </Button>

        <h2 className="text-lg font-semibold text-[#8B3623]">
          Forgot Your Password?
        </h2>
        <FormDescription className="text-sm text-[#265073] font-serif">
          Please enter the 6-digit OTP sent to your mail to reset your password.
        </FormDescription>

        {/* OTP Field */}
        {!showResetForm && (
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
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Timer display */}
        {otpSent && timer > 0 && !showResetForm && (
          <div className="text-sm text-[#8B3623] font-serif">
            OTP will expire in: {formatTime(timer)}
          </div>
        )}

        {/* Button Group */}
        <div className="flex justify-between">
          <Button
            type="submit"
            className="bg-[#A98D78] hover:bg-[#b89b86]"
          >
            Submit OTP
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

      {/* Reset Password Form */}
      {showResetForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-80">
            <h2 className="text-lg font-semibold text-[#8B3623]">
              Reset Your Password
            </h2>
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#8B3623] font-serif ">
                    New Password
                  </FormLabel>
                  <FormControl>
                    <input
                      type="password"
                      {...field}
                      className="border border-gray-300 p-2 rounded-lg"
                      placeholder="Enter new password"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[#8B3623] font-serif ">
                    Confirm Password
                  </FormLabel>
                  <FormControl>
                    <input
                      type="password"
                      {...field}
                      className="border border-gray-300 p-2 rounded-lg"
                      placeholder="Re-type your password"
                    />
                  </FormControl>
                  <FormDescription className="text-sm text-[#265073] font-serif">
                    Confirm your new password.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex justify-between mt-4">
              <Button
                onClick={() => setShowResetForm(false)}
                className="bg-[#A98D78] hover:bg-[#b89b86]"
              >
                Cancel
              </Button>
              <Button
                onClick={form.handleSubmit(onSubmit)}
                className="bg-[#A98D78] hover:bg-[#b89b86]"
              >
                Confirm Reset
              </Button>
            </div>
          </div>
        </div>
      )}
    </Form>
  );
}
