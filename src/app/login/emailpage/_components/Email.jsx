"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Forget from "./Forget";
import { useState } from "react";
import $axios from "@/lib/axios.instance";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function EmailPage() {
  const [isForgetVisible, setIsForgetVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState(""); // To store the email input value
  const [error, setError] = useState(""); // To store the error message

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Enter your email first.");
      return; // Stop execution if email is empty
    }

    setLoading(true);

    try {
      const response = await $axios.post("/auth/forgotPassword", { email });

      if (response.status === 200) {
        toast.success(response?.data.message || "Otp sent successfully");
      }

      if (response.status === 404) {
        toast.error(response?.data?.message || "User not found");
      }

      setError("");
      setIsForgetVisible(true);
    } catch (error) {
      // Check if the error response has a message property
      if (error?.response?.data?.message) {
        toast.error(error.response.data.message || "An error occurred");
      } else {
        // Fallback to a generic error message if no specific message is provided
        toast.error("Something went wrong. Please try again.");
      }
    } finally {
      setLoading(false); // Reset loading to false after request ends
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-[#E6D4B9]">
      {/* Forgot Password Modal */}
      {isForgetVisible && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
          {/* <div className="bg-white p-6 w-11/12 max-w-md rounded-lg"> */}
          <Forget email={email} />
        </div>
      )}
      <Card className="w-96 shadow-lg">
        <CardHeader>
          <CardTitle className="font-serif font-bold text-[#8F3623] text-2xl">
            Find your account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#265073] mb-4 text-lg">
            Please enter your email address to search for your account.
          </p>
          <Input
            placeholder="Email address"
            className="mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update email state
          />
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}{" "}
          {/* Display error message */}
          <div className="flex justify-end space-x-2">
            <Button
              onClick={handleSubmit} // Handle submit with validation
              className="bg-[#A98D78] hover:bg-[#b69a85]"
              disabled={loading}
            >
              {loading ? "Loading..." : "Search"} {/* Show loading text */}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
