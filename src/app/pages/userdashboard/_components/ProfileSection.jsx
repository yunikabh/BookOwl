// components/ProfileSection.js
"use client";
import Link from "next/link";
const user = {
      name: "John Doe",
      email: "johndoe@example.com",
    };
const ProfileSection = ({ user }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-700">Welcome, {user.name}!</h2>
      <p className="text-gray-500">{user.email}</p>
      <div className="mt-4">
        <Link legacyBehavior href="/edit-profile">
          <a className="text-blue-500 hover:text-blue-700">Edit Profile</a>
        </Link>
      </div>
    </div>
  );
};

export default ProfileSection;
