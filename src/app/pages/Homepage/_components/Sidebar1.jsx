// components/Sidebar.jsx
import Link from "next/link";

const genres = [
  { name: "Fiction", slug: "fiction" },
  { name: "Non-Fiction", slug: "non-fiction" },
  { name: "Mystery", slug: "mystery" },
  { name: "Fantasy", slug: "fantasy" },
  { name: "Biography", slug: "biography" },
  { name: "Science Fiction", slug: "science-fiction" },
  { name: "Romance", slug: "romance" },
  { name: "Historical", slug: "historical" },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-100 p-4 shadow-md h-screen">
      <h2 className="text-2xl font-bold mb-4">Genres</h2>
      <ul className="space-y-2">
        {genres.map((genre) => (
          <li key={genre.slug}>
            <Link
              href={`/${genre.slug}`}
              className="block text-gray-700 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md transition"
            >
              {genre.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
