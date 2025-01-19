// // components/Sidebar.jsx
// "use client";
// import { useState } from "react";

// const genres = [
//   { name: "Fiction", slug: "fiction" },
//   { name: "Non-Fiction", slug: "non-fiction" },
//   { name: "Mystery", slug: "mystery" },
//   { name: "Fantasy", slug: "fantasy" },
//   { name: "Biography", slug: "biography" },
//   { name: "Science Fiction", slug: "science-fiction" },
//   { name: "Romance", slug: "romance" },
//   { name: "Historical", slug: "historical" },
// ];

// function GenreItem({ genre, isChecked, onChange }) {
//   return (
//     <li className=" mt-16 flex items-center space-x-2 ">
//       <input
//         type="checkbox"
//         id={genre.slug}
//         checked={isChecked}
//         onChange={() => onChange(genre.slug)}
//         className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
//       />
//       <label
//         htmlFor={genre.slug}
//         className="text-[#5d768a] hover:text-blue-500 cursor-pointer"
//       >
//         {genre.name}
//       </label>
//     </li>
//   );
// }

// export default function Sidebar() {
//   const [selectedGenres, setSelectedGenres] = useState([]);

//   const handleCheckboxChange = (slug) => {
//     setSelectedGenres((prevSelected) =>
//       prevSelected.includes(slug)
//         ? prevSelected.filter((item) => item !== slug) // Remove genre
//         : [...prevSelected, slug] // Add genre
//     );
//   };

//   const applyFilter = () => {
//     console.log("Filtered genres:", selectedGenres);
//     // You can use this list to filter the displayed books or pass it to a parent component.
//   };

//   return (
//     <nav className="absolute top-24 left-0 w-64 bg-[#ffffff] p-4 shadow-md h-full flex flex-col overflow-y-auto">
//       <h2 className="text-[#6d433d] text-xl font-bold mb-4">Show all Categories</h2>
//       <ul className="space-y-3">
//         {genres.map((genre) => (
//           <GenreItem
//             key={genre.slug}
//             genre={genre}
//             isChecked={selectedGenres.includes(genre.slug)}
//             onChange={handleCheckboxChange}
//           />
//         ))}
//       </ul>
//       {/* <button
//         onClick={applyFilter}
//         className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition"
//       >
//         Apply Filter
//       </button> */}
//     </nav>
//   );
// }
