"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProfilePage() {
  const [editEmail, setEditEmail] = useState(false);
  const [email, setEmail] = useState("example@gmail.com");

  const [editPassword, setEditPassword] = useState(false);
  const [password, setPassword] = useState("");

  const toggleEditEmail = () => setEditEmail(!editEmail);
  const toggleEditPassword = () => setEditPassword(!editPassword);

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      alert("Your account has been deleted.");
      // Add account deletion logic here
    }
  };

  return (
    <div className="min-h-screen bg-[#E6D4B9] flex items-start justify-center py-12">
      <div className="container max-w-2xl bg-white shadow rounded p-8">
        <h1 className="text-4xl font-bold font-serif text-[#8B3623] mb-4">Login And Security</h1>

        <div className="space-y-8">
          {/* Email Section */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Email</div>
                  {editEmail ? (
                    <div className="flex items-center gap-4">
                      <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        className="border border-gray-300 rounded p-2 w-full"
                      />
                      <Button
                        onClick={toggleEditEmail}
                        variant="link"
                        className="text-green-500 hover:text-green-600"
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => setEditEmail(false)}
                        variant="link"
                        className="text-red-500 hover:text-red-600"
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div>{email}</div>
                  )}
                </div>
                {!editEmail && (
                  <Button
                    onClick={toggleEditEmail}
                    variant="link"
                    className="text-red-500 hover:text-red-600"
                  >
                    Update
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Password Section */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Password</div>
                  {editPassword ? (
                    <div className="flex items-center gap-4">
                      <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        className="border border-gray-300 rounded p-2 w-full"
                      />
                      <Button
                        onClick={toggleEditPassword}
                        variant="link"
                        className="text-green-500 hover:text-green-600"
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => setEditPassword(false)}
                        variant="link"
                        className="text-red-500 hover:text-red-600"
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div>********</div>
                  )}
                </div>
                {!editPassword && (
                  <Button
                    onClick={toggleEditPassword}
                    variant="link"
                    className="text-red-500 hover:text-red-600"
                  >
                    Update
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Delete Account Section */}
          <div className="text-center pt-8">
            <Button
              onClick={handleDeleteAccount}
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-100"
            >
              Delete My Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
