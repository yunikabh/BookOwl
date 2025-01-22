import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function BookCard({book}){
    const router = useRouter();
    const handleBookClick = () =>{
       
        router.push(`/pages/bookpage/${book._id}`);
        console.log(book._id);
    }
    return(
        <Card key={book._id} className=" shadow-lg cursor-pointer" onClick={handleBookClick}>
                  <CardHeader className="text-center p-4">
                    <img
                      src={
                        book?.coverImage
                          ? book.coverImage.replace(/\\/g, "/") // Replace backslashes with forward slashes
                          : "/images/default-cover.jpg" // Fallback to default cover image
                      }
                      alt="Cover Image"
                      className="w-full h-full object-contain rounded-sm"
                    />
                  </CardHeader>
                  <CardContent>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {book.bookName}
                    </h3>
                    <p className="text-sm text-gray-600">
                      by {book.author.authorName}
                    </p>
                    <p className="mt-2 text-xl font-bold text-gray-900">
                     Rs {book.price}
                    </p>
                  </CardContent>
                </Card>
    )
}