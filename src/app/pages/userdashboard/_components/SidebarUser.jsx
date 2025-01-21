// components/Sidebar.js
"use client";
import Link from "next/link";

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-1/4 bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold text-gray-700 mb-8">Dashboard</h2>
      <nav className="space-y-6">
        <Link legacyBehavior href="/user-dashboard">
          <a
            className={`block text-lg font-medium ${activeTab === "purchases" ? "text-blue-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("purchases")}
          >
            Purchase History
          </a>
        </Link>
        <Link legacyBehavior href="/edit-profile">
          <a className="block text-lg font-medium text-gray-600">Edit Profile</a>
        </Link>
        <Link legacyBehavior href="/user-dashboard">
          <a
            className={`block text-lg font-medium ${activeTab === "reviews" ? "text-blue-600" : "text-gray-600"}`}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </a>
        </Link>
        {/* Add more links here as needed */}
      </nav>
    </div>
  );
};

export default Sidebar;
