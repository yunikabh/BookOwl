"use client";
// import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
import BookCard from "./BookCard"
import CategoryFilter from "./CategoryFilter"


export default function AllBooks({ data , loading }) {
  // const [selectedCategories, setSelectedCategories] = useState([]);
  // const [selectedMoods, setSelectedMoods] = useState([]);

  // const booksByCategory = booksData.reduce((acc, book) => {
  //     if (!acc[book.category]) acc[book.category] = [];
  //     acc[book.category].push(book);
  //     return acc;
  // }, {});

  // const booksByMood = booksData.reduce((acc, book) => {
  //     if (!acc[book.mood]) acc[book.mood] = [];
  //     acc[book.mood].push(book);
  //     return acc;
  // //   }, {});

  // const categories = Object.keys(booksByCategory);
  // const moods = Object.keys(booksByMood);

  // const handleCategoryChange = (category) => {
  //     setSelectedCategories((prev) =>
  //         prev.includes(category)
  //             ? prev.filter((c) => c !== category)
  //             : [...prev, category]
  //     );
  // };

  // const handleMoodChange = (mood) => {
  //     setSelectedMoods((prev) =>
  //       prev.includes(mood)
  //         ? prev.filter((m) => m !== mood)
  //         : [...prev, mood]
  //     );
  //   };

  // const displayedBooks = selectedCategories.length
  //     ? booksData.filter((book) => selectedCategories.includes(book.category))
  //     : booksData;

  // const displayedBooks = booksData.filter(
  //     (book) =>
  //       (!selectedCategories.length || selectedCategories.includes(book.category)) &&
  //       (!selectedMoods.length || selectedMoods.includes(book.mood))
  //   );
  return (
    <div className="">
      <div className="">
        {/* <div className="flex-shrink-0"><CategoryFilter /></div> */}
      
        <main className=" px-6">
          <ScrollArea className="space-y-6">
            
            {/* <h2 className="text-2xl font-semibold text-gray-700 mb-4">Books</h2> */}
            {/* <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
              {data.map((book) => (
              
                <BookCard key={book._id} book = {book}/>
              ))}
            </div> */}
            {loading ? (
            // Render a loading state here (e.g., spinner or skeleton cards)
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
              {Array.from({ length: 8 }).map((_, index) => (
                <div
                  key={index}
                  className="h-64 w-full bg-gray-200 animate-pulse rounded-lg"
                ></div>
              ))}
            </div>
          ) : (
            // Render books when data is loaded
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
              {data.map((book) => (
                <BookCard key={book._id} book={book} />
              ))}
            </div>
          )}
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
