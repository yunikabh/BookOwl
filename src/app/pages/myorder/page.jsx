// // "use client";
// // import { useEffect, useState } from "react";
// // // import { useParams } from "react-router-dom"; // If using React Router
// // import axios from "axios";

// // const MyOrder = () => {
// //   // const { orderId } = useParams(); // Get orderId from URL
// //   const [order, setOrder] = useState(null);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState("");

// //   useEffect(() => {
// //     const fetchOrderDetails = async () => {
// //       try {
// //         const userId = localStorage.getItem("id"); // Assuming you store auth token in localStorage
// //         const response = await axios.get(`/orders/getOrderDetails/${userId}`,
         
// //         );
// //         setOrder(response.data.data); // Assuming response follows your ApiResponse structure
// //       } catch (error) {
// //         setError(error.response?.data?.message || "Error fetching order details");
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     // fetchOrderDetails();
// //   });

// //   if (loading) return <p>Loading...</p>;
// //   if (error) return <p>Error: {error}</p>;

// //   return (
// //     <div>
// //       <h2>Order Details</h2>
// //       <p>Order ID: {order._id}</p>
// //       <p>User Name: {order.userId.name}</p>
// //       <p>Email: {order.userId.email}</p>
// //       <p>Phone: {order.userId.phone}</p>

// //       <h3>Items:</h3>
// //       <ul>
// //         {order.items.map((item) => (
// //           <li key={item.bookId._id}>
// //             <img src={item.bookId.coverImage} alt={item.bookId.bookName} width="100" />
// //             <p>Book Name: {item.bookId.bookName}</p>
// //             <p>Author: {item.bookId.author}</p>
// //             <p>Price: ${item.bookId.price}</p>
// //             <p>Language: {item.bookId.language}</p>
// //             <p>Rating: {item.bookId.averageRating}</p>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default MyOrder;
// import Link from "next/link";

// const MyOrders = () => {
//   const orders = [
//     {
//       _id: "order1",
//       date: "2025-02-20",
//       totalAmount: 45.99,
//       status: "Delivered",
//       items: [
//         {
//           bookName: "The Great Gatsby",
//           author: "F. Scott Fitzgerald",
//           price: 15.99,
//           coverImage: "https://via.placeholder.com/100",
//         },
//         {
//           bookName: "1984",
//           author: "George Orwell",
//           price: 30.00,
//           coverImage: "https://via.placeholder.com/100",
//         },
//       ],
//     },
//     {
//       _id: "order2",
//       date: "2025-02-15",
//       totalAmount: 29.99,
//       status: "Shipped",
//       items: [
//         {
//           bookName: "To Kill a Mockingbird",
//           author: "Harper Lee",
//           price: 29.99,
//           coverImage: "https://via.placeholder.com/100",
//         },
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6 mt-20">
//       <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6">
//         <h2 className="text-2xl font-semibold text-gray-800 mb-4">📦 My Orders</h2>

//         {orders.length === 0 ? (
//           <p className="text-center text-gray-600">No orders found.</p>
//         ) : (
//           <div className="space-y-4">
//             {orders.map((order) => (
//               <div
//                 key={order._id}
//                 className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm"
//               >
//                 <p className="text-gray-700">
//                   <strong>Order ID:</strong> {order._id}
//                 </p>
//                 <p className="text-gray-600">
//                   <strong>Date:</strong> {order.date}
//                 </p>
//                 <p className="text-gray-600">
//                   <strong>Total:</strong> ${order.totalAmount}
//                 </p>
//                 <p
//                   className={`text-sm font-semibold ${
//                     order.status === "Delivered"
//                       ? "text-green-600"
//                       : "text-yellow-600"
//                   }`}
//                 >
//                   {order.status}
//                 </p>

//                 <div className="mt-3">
//                   <h4 className="font-semibold text-gray-700">📚 Items:</h4>
//                   <div className="flex space-x-4 overflow-x-auto">
//                     {order.items.map((item, index) => (
//                       <div
//                         key={index}
//                         className="flex items-center space-x-3 border rounded p-3 bg-gray-50"
//                       >
//                         <img
//                           src={item.coverImage}
//                           alt={item.bookName}
//                           className="w-12 h-12 object-cover rounded-md"
//                         />
//                         <div>
//                           <p className="text-sm font-medium">{item.bookName}</p>
//                           <p className="text-xs text-gray-500">by {item.author}</p>
//                           <p className="text-sm font-semibold text-blue-600">
//                             ${item.price}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <Link href={`/order/${order._id}`} legacyBehavior>
//                   <a className="mt-4 inline-block text-center bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition w-full">
//                     View Order Details
//                   </a>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default MyOrders;
