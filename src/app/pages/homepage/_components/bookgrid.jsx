import Link from "next/link";

const books = [
  {
    id: 1,
    title: "Book 1",
    cover: "/photos/user.png",
  },
  {
    id: 2,
    title: "Book 2",
    cover: "/photos/user.png",
  },
  {
    id: 3,
    title: "Book 3",
    cover: "/photos/user.png",
  },
  {
    id: 4,
    title: "Book 4",
    cover: "/photos/user.png",
  },
];

export default function BookGrid() {
  return (
    <main className="ml-72">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="p-4 rounded-lg shadow-md text-center mb-6 "
          >
            <img
              src={book.cover}
              alt={`Cover of ${book.title}`}
              className="w-96 h-80  mb-4"
            />
            <div className="space-x-2">
              <button className="bg-[#5d768a] text-white py-2 px-4 rounded hover:bg-blue-400">
                Buy Now
              </button>
              <Link href="/pages/review">
                <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
                  Review
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
