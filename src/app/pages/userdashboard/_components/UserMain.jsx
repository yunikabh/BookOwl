// // pages/user-dashboard.js
// "use client";
// import { useState } from "react";
// import SidebarUser from "./_components/SidebarUser"
// import ProfileSection from "./_components/ProfileSection"
// import PurchaseSection from "./_components/PurchaseSection"
// import ReviewsSection from "./_components/ReviewsSection"

// // Dummy Data (You would replace this with data from your database)
// const user = {
//   name: "John Doe",
//   email: "johndoe@example.com",
// };

// const purchases = [
//   { id: 1, title: "The Art of Design", date: "2024-01-15", price: "$16.00 USD" },
//   { id: 2, title: "Nature Wonders", date: "2024-01-10", price: "$18.00 USD" },
// ];

// const reviews = [
//   { id: 1, book: "The Art of Design", rating: 5, comment: "Amazing read!" },
//   { id: 2, book: "Nature Wonders", rating: 4, comment: "Great, very informative." },
// ];

// const UserDashboard = () => {
//   const [activeTab, setActiveTab] = useState("purchases");
  
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <div className="max-w-7xl mx-auto py-10 px-6 sm:px-12 flex">
//         {/* Sidebar */}
//         <SidebarUser activeTab={activeTab} setActiveTab={setActiveTab} />

//         {/* Main Content */}
//         <div className="w-3/4 ml-6">
//           {/* User Profile Section */}
//           <ProfileSection user={user} />

//           {/* Content Section */}
//           <div className="mt-8">
//             {activeTab === "purchases" && <PurchaseSection purchases={purchases} />}
//             {activeTab === "reviews" && <ReviewsSection reviews={reviews} />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserMain;
