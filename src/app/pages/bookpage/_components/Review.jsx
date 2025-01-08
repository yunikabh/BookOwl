// "use client";
// import { useState } from "react";
// const [review, setReview] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const handleReviewSubmit = (e) => {
//     e.preventDefault();
//     if (review.trim()) {
//       alert(`Review Submitted: ${review}`);
//       setReview("");
//       setSubmitted(true);
//     } else {
//       alert("Please write a review before submitting.");
//     }
//   };

// export default function Review(){
//     return(
// <div className="mt-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">
//             Write a Review
//           </h2>
//           {submitted ? (
//             <p className="text-green-600 font-medium">Thank you for your review!</p>
//           ) : (
//             <form onSubmit={handleReviewSubmit}>
//               <textarea
//                 value={review}
//                 onChange={(e) => setReview(e.target.value)}
//                 placeholder="Write your review here..."
//                 className="w-full p-3 border border-gray-300 rounded mb-4"
//                 rows="4"
//               />
//               <Button type="submit" className="rounded-full bg-[#265073]">
//                 Submit Review
//               </Button>
//             </form>
//           )}
//         </div>
//     )
// }