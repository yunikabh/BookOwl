"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Camera } from "lucide-react";

export default function ProfilePage() {
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState("neupaneaisha45");

  const [editUsername, setEditUsername] = useState(false);
  const [username, setUsername] = useState("@neupaneaisha45");

  const toggleEditName = () => setEditName(!editName);
  const toggleEditUsername = () => setEditUsername(!editUsername);

  const handleNameChange = (e) => setName(e.target.value);
  const handleUsernameChange = (e) =>
    setUsername(e.target.value.startsWith("@") ? e.target.value : "@" + e.target.value);

  return (
    <div className="min-h-screen bg-[#E6D4B9] flex items-start justify-center py-12">
      <div className="container max-w-2xl bg-white shadow rounded p-8">
        <h1 className="text-4xl font-bold font-serif text-[#8B3623] mb-4">Edit My Profile</h1>

        <div className="space-y-8">
          {/* Profile Picture Section */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-32 h-32 rounded-full bg-[#BD9D86] flex items-center justify-center text-white text-6xl font-light">
                {name[0]?.toUpperCase()}
              </div>
              {/* Camera Icon */}
              <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow cursor-pointer">
                <Camera className="w-5 h-5 text-gray-500 hover:text-gray-700" />
              </div>
            </div>
          </div>

          {/* Name Section */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Name</div>
                  {editName ? (
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        value={name}
                        onChange={handleNameChange}
                        className="border border-gray-300 rounded p-2 w-full"
                      />
                      <Button
                        onClick={toggleEditName}
                        variant="link"
                        className="text-green-500 hover:text-green-600"
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => setEditName(false)}
                        variant="link"
                        className="text-red-500 hover:text-red-600"
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div>{name}</div>
                  )}
                </div>
                {!editName && (
                  <Button
                    onClick={toggleEditName}
                    variant="link"
                    className="text-red-500 hover:text-red-600"
                  >
                    Update
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Username Section */}
          <Card>
            <CardContent className="p-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Username</div>
                  {editUsername ? (
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        className="border border-gray-300 rounded p-2 w-full"
                      />
                      <Button
                        onClick={toggleEditUsername}
                        variant="link"
                        className="text-green-500 hover:text-green-600"
                      >
                        Update
                      </Button>
                      <Button
                        onClick={() => setEditUsername(false)}
                        variant="link"
                        className="text-red-500 hover:text-red-600"
                      >
                        Cancel
                      </Button>
                    </div>
                  ) : (
                    <div>{username}</div>
                  )}
                </div>
                {!editUsername && (
                  <Button
                    onClick={toggleEditUsername}
                    variant="link"
                    className="text-red-500 hover:text-red-600"
                  >
                    Update
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
