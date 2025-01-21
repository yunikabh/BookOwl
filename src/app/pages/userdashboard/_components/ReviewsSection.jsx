// components/ReviewsSection.js
"use client";
const reviews = [
  { id: 1, book: "The Art of Design", rating: 5, comment: "Amazing read!" },
  { id: 2, book: "Nature Wonders", rating: 4, comment: "Great, very informative." },
];
const ReviewsSection = ({ reviews }) => {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-700">Your Reviews</h3>
      <div className="mt-4 space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 rounded-lg shadow">
            <h4 className="text-lg font-semibold text-gray-800">{review.book}</h4>
            <p className="text-gray-600">Rating: {review.rating} ★</p>
            <p className="text-gray-600">Comment: {review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
