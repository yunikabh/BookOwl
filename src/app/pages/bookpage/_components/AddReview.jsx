// import { useEffect, useState } from 'react';
"use client"
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Star } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'; // Adjust import paths based on your setup
import { Button } from '@/components/ui/button'; // Adjust import path based on your setup
import $axios from '@/lib/axios.instance';

// Define the Zod schema
const reviewSchema = z.object({
  rating: z.number().min(1, 'Rating is required').max(5, 'Rating must be between 1 and 5'),
  reviewText: z.string().min(10, 'Review must be at least 10 characters long'),
});

export default function AddReview({bookData}) {
//   const [user, setUser] = useState(null); // User data
//   const [book, setBook] = useState(null); // Book data
const bookId = bookData._id;
  // Set up the form
  const form = useForm({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating: 0,
      reviewText: '',
    },
  });

  // Fetch user and book data
//   useEffect(() => {
//     async function fetchData() {
//       const userResponse = await fetch('/api/user');
//       const bookResponse = await fetch('/api/book');

//       const userData = await userResponse.json();
//       const bookData = await bookResponse.json();

//       setUser(userData);
//       setBook(bookData);
//     }

//     fetchData();
//   }, []);

const onSubmit = async (data) => {
    const requestData = {
      bookId, // Add the book ID to the data
      ...data,
    };

    try {
      const response = await $axios.post("/book/addReviewAndRating", requestData);
      console.log("Response:", response.data);
      form.reset(); // Reset the form after successful submission
      window.location.reload();
      
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };


  return (
    <div
      className=" shadow-lg rounded-lg bg-gray-50 max-w-5xl mx-auto mt-8"
      data-aos="fade-out"
    >
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="p-6 rounded-xl shadow-sm mb-6 space-y-3">
        <h3 className="text-2xl font-semibold mb-4 text-[#c2918b]">Write a Review</h3>

        {/* User Field (Read-only) */}
        {/* <FormItem>
          <FormLabel>User</FormLabel>
          <FormControl>
            <input
              type="text"
            //   value={user.name}
              readOnly
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            />
          </FormControl>
        </FormItem> */}

        {/* Book Field (Read-only) */}
        {/* <FormItem>
          <FormLabel>Book</FormLabel>
          <FormControl>
            <input
              type="text"
            //   value={book.title}
              readOnly
              className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
            />
          </FormControl>
        </FormItem> */}

        {/* Rating Field */}
        <FormField
          control={form.control}
          name="rating"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Rating</FormLabel>
              <FormControl>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, index) => (
                    <label key={index} className="cursor-pointer">
                      <Star
                        size={24}
                        className={index < field.value ? 'text-yellow-500' : 'text-gray-400'}
                        onClick={() => field.onChange(index + 1)}
                      />
                    </label>
                  ))}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Review Title Field */}
        {/* <FormField
          control={form.control}
          name="reviewTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review Title</FormLabel>
              <FormControl>
                <input
                  type="text"
                  {...field}
                  className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> */}

        {/* Review Text Field */}
        <FormField
          control={form.control}
          name="reviewText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Review Text</FormLabel>
              <FormControl>
                <textarea
                  {...field}
                  className="mt-2 p-2 w-full border border-gray-300 rounded-lg"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <Button type="submit" className="w-full bg-[#718798] text-white py-2 rounded-lg mt-4">
          Submit Review
        </Button>
      </form>
    </Form>
    </div>
  );
}
