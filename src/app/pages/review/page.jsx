// components/ReviewsSection.jsx
"use client";
import  React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Star, ThumbsUp } from 'lucide-react';

const reviewsData = [
  {
    id: 1,
    bookTitle: "The Hobbit",
    rating: 5,
    reviewTitle: "A Timeless Classic!",
    reviewText: "J.R.R. Tolkien’s 'The Hobbit' is a masterpiece of fantasy literature. The vivid world-building and the journey of Bilbo Baggins kept me hooked throughout. Highly recommend!",
    helpfulCount: 12,
    date: "2024-12-15",
  },
  {
    id: 2,
    bookTitle: "1984",
    rating: 4,
    reviewTitle: "Thought-Provoking",
    reviewText: "A chilling depiction of a dystopian future. The concepts are deeply thought-provoking, but the pacing felt a bit slow in parts.",
    helpfulCount: 8,
    date: "2024-12-10",
  },
];

const ReviewsSection = () => {
  const { register, handleSubmit, reset } = useForm();
  const [reviews, setReviews] = useState(reviewsData);

  const handleHelpfulClick = (id) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === id
          ? { ...review, helpfulCount: review.helpfulCount + 1 }
          : review
      )
    );
  };

  const onSubmit = (data) => {
    const newReview = {
      id: reviews.length + 1,
      bookTitle: data.bookTitle,
      rating: parseInt(data.rating),
      reviewTitle: data.reviewTitle,
      reviewText: data.reviewText,
      helpfulCount: 0,
      date: new Date().toLocaleDateString(),
    };

    setReviews((prev) => [...prev, newReview]);
    reset(); // Reset the form after submission
  };

  return (
    <div className=" p-6 rounded-lg shadow-md">
      {/* <h2 className="text-2xl font-bold text-[#6d433d] mb-4">Your Reviews</h2> */}

      {/* Review Submission Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 rounded-xl shadow-sm mb-6">
        <h3 className="text-2xl font-semibold mb-4 text-[#c2918b]">Write a Review</h3>
        <div className="mb-4">
          <label className="block text-sm font-medium" htmlFor="bookTitle">Book Title</label>
          <input
            id="bookTitle"
            type="text"
            {...register('bookTitle', { required: 'Book title is required' })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="reviewTitle">Review Title</label>
          <input
            id="reviewTitle"
            type="text"
            {...register('reviewTitle', { required: 'Review title is required' })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="rating">Rating</label>
          <div className="flex mt-2">
            {[...Array(5)].map((_, index) => (
              <label key={index} htmlFor={`rating-${index + 1}`} className="cursor-pointer">
                <Star
                  size={24}
                  className={`${
                    index < parseInt(register('rating').value) ? 'text-yellow-500' : 'text-[#6d433d] '
                  }`}
                />
              </label>
            ))}
            <input
              id="rating"
              type="hidden"
              {...register('rating', { required: 'Rating is required' })}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium " htmlFor="reviewText">Review Text</label>
          <textarea
            id="reviewText"
            {...register('reviewText', { required: 'Review text is required' })}
            className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
          />
        </div>

        <button type="submit" className="w-full bg-[#718798] text-white py-2 rounded-lg">Submit Review</button>
      </form>

      {/* Display Reviews */}
      <div>
      <h2 className="text-2xl font-bold text-[#6d433d] mb-4">Your Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 mb-4 rounded-lg shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold">{review.bookTitle}</h3>
            <div className="flex items-center mt-1">
              {[...Array(5)].map((_, index) => (
                <Star
                  key={index}
                  size={20}
                  className={`${
                    index < review.rating ? 'text-yellow-500' : 'text-gray-400'
                  }`}
                />
              ))}
            </div>
            <h4 className="text-lg font-medium mt-2">{review.reviewTitle}</h4>
            <p className="text-gray-600 mt-2">{review.reviewText}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
              <span>Reviewed on {review.date}</span>
              <button
                onClick={() => handleHelpfulClick(review.id)}
                className="flex items-center text-blue-500 hover:text-blue-600"
              >
                <ThumbsUp size={16} className="mr-1" />
                {review.helpfulCount} Helpful
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
