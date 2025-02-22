"use client";
import axios from 'axios';
import { Box, Calendar, CreditCard } from 'lucide-react'; // Import Lucide icons
import Link from "next/link";
import { useEffect, useState } from 'react';

const OrderDetails = () => {
  const order = {
      _id: "order1",
      purchasedDate: "2025-02-15",
      totalAmount: 900,
      status: "Delivered",
      paymentMethod: "Khalti",
      shippingAddress: {
        street: "12",
        city: "Kathmandu",
        state: "Bagmati",
      },
      items: [
        {
          bookName: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          price: 400,
          coverImage: "https://via.placeholder.com/100",
        },
        {
          bookName: "1984",
          author: "George Orwell",
          price: 500,
          coverImage: "https://via.placeholder.com/100",
        },
      ],
    };
  // const [order, setOrder] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");

  // useEffect(() => {
  //   getOrderDetails();
  // }, []);

  // const getOrderDetails = async () => {
  //   try {
  //     // const userId = localStorage.getItem("id"); // Assuming you store auth token in localStorage
  //     const response = await axios.get(`/orders/getOrderDetails/${orderId}`);
  //     setOrder(response.data.data); // Assuming response follows your ApiResponse structure
  //   } catch (error) {
  //     setError(error.response?.data?.message || "Error fetching order details");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  // if (loading) {
  //   return <p className="text-center text-lg">Loading order details...</p>;
  // }

  // if (error) {
  //   return <p className="text-center text-red-500">{error}</p>;
  // }

  return (
    <div className="min-h-screen bg-[#e6d4b9] flex items-center justify-center p-6 mt-10">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold font-serif text-[#8F3623] mb-4">Order Details</h2>

        <div className="space-y-2 text-gray-700">
          <p><strong>Order ID:</strong> {order._id}</p>
          <p><strong>Purchased Date:</strong> {order.purchasedDate} <Calendar className="inline-block ml-2" size={16} /></p>
          <p><strong>Total:</strong> Rs {order.totalAmount}</p>
          <p><strong>Payment Method:</strong> {order.paymentMethod} <CreditCard className="inline-block ml-2" size={16} /></p>
          <p><strong>Shipping Address:</strong> {order.shippingAddress.street}, {order.shippingAddress.city}, {order.shippingAddress.state}</p>
          <p className={`font-semibold ${order.status === "Delivered" ? "text-green-600" : "text-yellow-600"}`}>
            {order.status} <Box className="inline-block ml-2" size={16} />
          </p>
        </div>

        <h3 className="text-lg font-semibold text-[#8F3623] font-serif mt-4">Ordered Items</h3>
        <div className="mt-2 space-y-3">
          {order.items.map((item, index) => (
            <div key={index} className="flex items-center space-x-3 border rounded p-2 bg-gray-50">
              <img src={item.coverImage} alt={item.bookName} className="w-12 h-12 object-cover rounded-md" />
              <div>
                <p className="text-sm font-medium">{item.bookName}</p>
                <p className="text-xs text-gray-500">by {item.author}</p>
                <p className="text-sm font-semibold text-blue-600"> Rs {item.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-start gap-8 mt-6">
          <Link href="/pages/payment" legacyBehavior>
            <a className="inline-block bg-[#265073] text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-[#346B98] transition">
              Proceed to Payment
            </a>
          </Link>

          <Link href="/pages/order" legacyBehavior>
            <a className="inline-block bg-[#265073] text-white text-sm px-4 py-2 rounded-md shadow-md hover:bg-[#346B98] transition">
              Back to Order Form
            </a>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default OrderDetails;
