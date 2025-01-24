"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react"; // Importing the Pencil Icon from Lucide
import Link from "next/link";

export default function ProfilePage() {
  const profile = {
    name: "neupaneaisha45",
    username: "@neupaneaisha45",
    bio: "Passionate about books and technology. Always learning!",
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-16 -mt-20">
      <div className="container max-w-5xl bg-white shadow-lg rounded-xl p-12">
        {/* Profile Section */}
        <div className="flex items-center gap-6">
          {/* Profile Picture */}
          <div className="w-32 h-32 rounded-full bg-[#bd9d86] flex items-center justify-center text-white text-5xl font-bold uppercase">
            {profile.name[0]}
          </div>

          {/* Profile Info */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-bold text-[#8b3623]">{profile.name}</h1>
            <p className="text-xl text-[#5d768a]">{profile.username}</p>
          </div>

          {/* Edit Profile Button */}
          <div className="ml-auto">
            <Link href="/pages/userdashboard/editprofile">
              <Button
                variant="ghost"
                className="text-[#5d768a] hover:text-[#5d768a] flex items-center text-lg"
              >
                <Pencil className="w-5 h-5 mr-2" />
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>

        {/* Bio Section */}
        <div className="mt-8">

          <p className="text-lg text-[#5d768a] mt-4 leading-relaxed">{profile.bio}</p>
        </div>
      </div>
    </div>
  );
}
