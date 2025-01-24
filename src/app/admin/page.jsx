"use client";
import { useRouter } from "next/navigation";
import Dashboard from "./_components/Dashboard";
import { useEffect, useState } from "react";
import $axios from "@/lib/axios.instance";

const Admin = () => {
  const [data, setData] = useState(null); // Use useState to store the data
  const [loading, setLoading] = useState(true); // Manage loading state
  const router = useRouter();
  const role = localStorage.getItem("role");

  // Redirect if user is not admin
  useEffect(() => {
    if (role !== "admin") {
      router.push("/login");
    }
  }, [role, router]);

  // Fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await $axios.get("/book/getBooksStats");
        console.log("Books Stats Response:", response);
        if (response?.data?.data) {
          setData(response?.data.data); // Set the data if it exists
        } else {
          console.error("No data found in the response");
        }
        setLoading(false); // Data is now loaded, stop loading
      } catch (error) {
        console.error("Error fetching book stats:", error);
        setLoading(false); // Stop loading even in case of error
      }
    };

    if (role === "admin") {
      fetchData(); // Fetch data when role is admin
    }
  }, [role]);

  // Show loading message while fetching
  if (loading) {
    return <div>Loading...</div>;
  }

  // Show the dashboard with data once loaded
  console.log("Data passed to dashboard:", data); // Log the data that is passed to the Dashboard
  return (
    <div className="overflow-hidden">
      {data && data.length > 0 ? (
        <Dashboard data={data} /> // Pass the fetched data to the Dashboard component
      ) : (
        <div>No data available</div> // Show message when no data
      )}
    </div>
  );
};

export default Admin;
