"use client";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import $axios from "@/lib/axios.instance";
export default function DisplayReview({ data }) {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const response = await $axios.get(`book/getReviewsAndRating/${data._id}`);
    console.log("Review", response?.data.data);
    if (!response) {
      throw new Error(`HTTP erroe!:Status: ${response.status}`);
    }
    setReviews(response?.data.data);
  };

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Customize duration as needed
  }, []);
  return (
    <div className="space-y-6">
      {reviews.length > 0 ? (
        reviews.map((review) => (
          <div
            key={review._id}
            className="flex items-start gap-4 bg-white p-4 rounded-md shadow-sm"
          >
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <img
                src="/photos/user.jpg"
                alt="Avatar"
                className="rounded-full"
              />
              {/* {review.avatar ? (
                  <img
                    src={review.avatar}
                    alt="Avatar"
                    className="rounded-full"
                  />
                ) : (
                  <span className="text-lg font-bold text-gray-700">
                    {review.userName[0]}
                  </span>
                )} */}
            </div>
            <div>
              <div className="flex items-center justify-between">
                <h5 className="text-lg font-medium text-gray-800">
                  {review.user.name}
                </h5>
                <span className="text-sm text-gray-500">
                  {review.createdAt}
                </span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < review.rating ? "text-yellow-500" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 mt-2">{review.reviewText}</p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No reviews yet.</p>
      )}
    </div>
  );
}
