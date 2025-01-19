export default function Sidebar({
    return(
        <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md h-screen p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Dashboard</h2>
        <nav className="space-y-4">
          <Link href="/dashboard">
            <Button className="w-full justify-start">Home</Button>
          </Link>
          <Link href="/dashboard/my-books">
            <Button className="w-full justify-start">My Books</Button>
          </Link>
          <Link href="/dashboard/wishlist">
            <Button className="w-full justify-start">Wishlist</Button>
          </Link>
          <Link href="/dashboard/reviews">
            <Button className="w-full justify-start">My Reviews</Button>
          </Link>
          <Link href="/dashboard/settings">
            <Button className="w-full justify-start">Settings</Button>
          </Link>
        </nav>
      </aside>
      </div>
    )
})