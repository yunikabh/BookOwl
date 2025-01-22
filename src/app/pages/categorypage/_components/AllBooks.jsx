"use client";
// import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
// import { Card, CardHeader, CardContent } from "@/components/ui/card";
import BookCard from "./BookCard"
import CategoryFilter from "./CategoryFilter"

// const booksData = [
//     // Fiction Books
//     ...[
//         { id: 1, title: "Caaele Bipin", author: "Floyd Mila", price: "$12.00 USD", category: "fiction",mood:"adventerous"  },
//         { id: 2, title: "Whispers of Dawn", author: "Eryn Brooks", price: "$15.00 USD", category: "fiction",mood:"emotional" },
//         { id: 3, title: "Tides of Time", author: "Sam Rivera", price: "$18.00 USD", category: "fiction",mood:"emotional"  },
//         { id: 4, title: "Lost Horizons", author: "Emily Dawn", price: "$20.00 USD", category: "fiction",mood:"cozy"  },
//         { id: 5, title: "Moonlit Shores", author: "Liam Scott", price: "$22.00 USD", category: "fiction",mood:"adventerous"  },
//         { id: 6, title: "Shattered Skies", author: "Sophia Wells", price: "$24.00 USD", category: "fiction",mood:"thoughtful" },
//         { id: 7, title: "Echoes of Eternity", author: "Noah Blake", price: "$26.00 USD", category: "fiction",mood:"thoughtful" },
//         { id: 8, title: "The Last Voyage", author: "Olivia Moore", price: "$28.00 USD", category: "fiction",mood:"cozy" },
//     ],
//     // Non-Fiction Books
//     ...[
//         { id: 9, title: "The Art of Design", author: "John Doe", price: "$16.00 USD", category: "non-fiction", mood:"thoughtful"   },
//         { id: 10, title: "Science Simplified", author: "Jane Smith", price: "$18.00 USD", category: "non-fiction", mood:"thoughtful"  },
//         { id: 11, title: "Philosophy Unplugged", author: "Chris Wright", price: "$20.00 USD", category: "non-fiction", mood:"thoughtful" },
//         { id: 12, title: "The Financial Mindset", author: "Amy Johnson", price: "$22.00 USD", category: "non-fiction",mood:"curious" },
//         { id: 13, title: "Life Hacks for All", author: "Ryan Taylor", price: "$24.00 USD", category: "non-fiction",mood:"curious"  },
//         { id: 14, title: "Healthy Living", author: "Megan Green", price: "$26.00 USD", category: "non-fiction",mood:"curious"  },
//         { id: 15, title: "History Unveiled", author: "Ben White", price: "$28.00 USD", category: "non-fiction",mood:"informative"  },
//         { id: 16, title: "Cultural Insights", author: "Laura Lee", price: "$30.00 USD", category: "non-fiction",mood:"informative"  },
//     ],
//     // Mystery Books
//     ...[
//         { id: 17, title: "Mystery in the Dark", author: "Linda White", price: "$18.00 USD", category: "mystery",mood:"mysterious"  },
//         { id: 18, title: "The Hidden Truth", author: "Jake Brown", price: "$20.00 USD", category: "mystery",mood:"mysterious"  },
//         { id: 19, title: "Vanishing Shadows", author: "Karen Black", price: "$22.00 USD", category: "mystery",mood:"mysterious"  },
//         { id: 20, title: "The Unsolved Puzzle", author: "Tom Gray", price: "$24.00 USD", category: "mystery",mood:"chilling"  },
//         { id: 21, title: "Silent Witness", author: "Anna Drake", price: "$26.00 USD", category: "mystery" ,mood:"chilling" },
//         { id: 22, title: "The Forgotten Case", author: "Emma Clarke", price: "$28.00 USD", category: "mystery",mood:"chilling" },
//         { id: 23, title: "Crimson Clues", author: "John Steel", price: "$30.00 USD", category: "mystery",mood:"adventerous"  },
//         { id: 24, title: "Shadowed Streets", author: "Lisa Harper", price: "$32.00 USD", category: "mystery" , mood:"adventerous"  },
//     ],
//     // Fantasy Books
//     ...[
//         { id: 25, title: "The Wizard's Path", author: "Robert Gray", price: "$22.00 USD", category: "fantasy",mood:"dreamy"  },
//         { id: 26, title: "Dragon's Lair", author: "Sarah West", price: "$24.00 USD", category: "fantasy" ,mood:"dreamy" },
//         { id: 27, title: "Realm of Shadows", author: "Tim Knight", price: "$26.00 USD", category: "fantasy",mood:"dreamy"  },
//         { id: 28, title: "Sorcerer's Quest", author: "Eve Mason", price: "$28.00 USD", category: "fantasy",mood:"exciting" },
//         { id: 29, title: "Enchanted Forest", author: "Will Young", price: "$30.00 USD", category: "fantasy",mood:"exciting"  },
//         { id: 30, title: "Mystic Realms", author: "Laura Stone", price: "$32.00 USD", category: "fantasy" ,mood:"exciting" },
//         { id: 31, title: "Fae Chronicles", author: "Diana Frost", price: "$34.00 USD", category: "fantasy",mood:"cozy" },
//         { id: 32, title: "Legends Awaken", author: "George Smith", price: "$36.00 USD", category: "fantasy",mood:"cozy" },
//     ],

//         // Biography Books
//     ...[
//     { id: 33, title: "The Life of Nelson", author: "John Williams", price: "$18.00 USD", category: "biography",mood:"emotional" },
//     { id: 34, title: "Living with Purpose", author: "Sarah Johnson", price: "$20.00 USD", category: "biography",mood:"emotional" },
//     { id: 35, title: "The Story of Me", author: "David Clark", price: "$22.00 USD", category: "biography" ,mood:"emotional"},
//     { id: 36, title: "Behind the Scenes", author: "Emma Richardson", price: "$24.00 USD", category: "biography",mood:"emotional" },
//     { id: 37, title: "Life's Milestones", author: "Thomas Cooper", price: "$26.00 USD", category: "biography",mood:"thoughtful" },
//     { id: 38, title: "Reflections of a Leader", author: "Margaret Adams", price: "$28.00 USD", category: "biography",mood:"thoughtful" },
//     { id: 39, title: "A Journey Through Time", author: "Charles King", price: "$30.00 USD", category: "biography",mood:"thoughtful" },
//     { id: 40, title: "My Personal Odyssey", author: "Linda Grant", price: "$32.00 USD", category: "biography" ,mood:"thoughtful"},
// ],

// // Romance Books
//      ...[
//     { id: 41, title: "Love in the Air", author: "Anna Miller", price: "$18.00 USD", category: "romance",mood:"emotional"  },
//     { id: 42, title: "Heartfelt Desires", author: "James Anderson", price: "$20.00 USD", category: "romance",mood:"emotional"  },
//     { id: 43, title: "Whispers of the Heart", author: "Sophie Evans", price: "$22.00 USD", category: "romance",mood:"emotional"  },
//     { id: 44, title: "A Kiss in the Rain", author: "Rachel Davis", price: "$24.00 USD", category: "romance" ,mood:"romantic" },
//     { id: 45, title: "Timeless Love", author: "David Turner", price: "$26.00 USD", category: "romance" ,mood:"romantic" },
//     { id: 46, title: "Passionate Bonds", author: "Olivia White", price: "$28.00 USD", category: "romance",mood:"romantic"  },
//     { id: 47, title: "Chasing Forever", author: "Benjamin Clark", price: "$30.00 USD", category: "romance" ,mood:"dreamy" },
//     { id: 48, title: "The Magic of Us", author: "Lily Thompson", price: "$32.00 USD", category: "romance" ,mood:"dreamy" },
// ],

// // Thriller Books
// ...[
//     { id: 49, title: "The Silent Hunter", author: "Daniel Moore", price: "$18.00 USD", category: "thriller",mood:"exciting"  },
//     { id: 50, title: "Nightmare Unveiled", author: "Katherine Lee", price: "$20.00 USD", category: "thriller" ,mood:"exciting" },
//     { id: 51, title: "The Edge of Fear", author: "Lucas Wilson", price: "$22.00 USD", category: "thriller",mood:"chilling"  },
//     { id: 52, title: "The Chase Begins", author: "Rebecca Hall", price: "$24.00 USD", category: "thriller" ,mood:"chilling" },
//     { id: 53, title: "Into the Abyss", author: "John Miller", price: "$26.00 USD", category: "thriller" ,mood:"mysterious" },
//     { id: 54, title: "Twisted Minds", author: "Olivia Jackson", price: "$28.00 USD", category: "thriller" ,mood:"mysterious"},
//     { id: 55, title: "Shadows in the Dark", author: "James Brown", price: "$30.00 USD", category: "thriller",mood:"adventerous" },
//     { id: 56, title: "The Final Hour", author: "Grace Williams", price: "$32.00 USD", category: "thriller" ,mood:"adventerous"},
// ],

// // Historical Books
// ...[
//     { id: 57, title: "War and Peace", author: "Leo Tolstoy", price: "$20.00 USD", category: "historical",mood:"thoughtful" },
//     { id: 58, title: "The Lost Kingdom", author: "Arthur Collins", price: "$22.00 USD", category: "historical",mood:"thoughtful" },
//     { id: 59, title: "Echoes of the Past", author: "Barbara Stone", price: "$24.00 USD", category: "historical",mood:"thoughtful" },
//     { id: 60, title: "A Tale of Two Cities", author: "Charles Dickens", price: "$26.00 USD", category: "historical",mood:"emotional" },
//     { id: 61, title: "The Rise and Fall", author: "Henry Shaw", price: "$28.00 USD", category: "historical",mood:"emotional" },
//     { id: 62, title: "Chronicles of Time", author: "Matthew Black", price: "$30.00 USD", category: "historical" ,mood:"informative"},
//     { id: 63, title: "The Emperor's Secret", author: "David Harris", price: "$32.00 USD", category: "historical",mood:"informative" },
//     { id: 64, title: "The Great Revolution", author: "George Thompson", price: "$34.00 USD", category: "historical",mood:"informative" },
// ],

// ];

export default function AllBooks({ data }) {
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
    <div className="flex flex-col px-[5%]">
      <div className="flex flex-row">
        <div className="flex-shrink-0"><CategoryFilter /></div>
      
        <main className="flex-1 px-6">
          <ScrollArea className="space-y-6">
            {/* <h2 className="text-2xl font-semibold text-gray-700 mb-4">Books</h2> */}
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 w-full">
              {data.map((book) => (
              
                <BookCard key={book._id} book = {book}/>
              ))}
            </div>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
