import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

const Books = [
  {
    id: 1,
    img: "/photos/image.webp",
    name: "It Ends With Us",
    price: "Rs 400",
    author: "Colleen Hoover",
    units: 10,
  },
  {
    id: 2,
    img: "/photos/book.jpg",
    name: "Giver",
    price: "Rs 400",
    author: "John Doe",
    units: 10,
  },
  {
    id: 3,
    img: "/photos/book.jpg",
    name: "Giver",
    price: "Rs 400",
    author: "John Doe",
    units: 10,
  },
  {
    id: 4,
    img: "/photos/book.jpg",
    name: "Giver",
    price: "Rs 400",
    author: "John Doe",
    units: 10,
  },
  {
    id: 5,
    img: "/photos/book.jpg",
    name: "Giver",
    price: "Rs 400",
    author: "John Doe",
    units: 10,
  },
];

export default function BookList() {
  return (
    <div>
      <Card className="m-5 px-5 bg-transparent ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Units</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Books.map((books)=>(
              <TableRow key={books.id}>
                <TableCell><div className="rounded-lg w-16 h-24 overflow-hidden"><img src={books.img} className="w-full h-full object-contain" /></div></TableCell>
                <TableCell><h1 className="font-semibold text-base text-primary">{books.name}</h1> {books.author}</TableCell>

                <TableCell>{books.price}</TableCell>

                <TableCell>{books.units}</TableCell>
                <TableCell><div className="flex flex-row gap-3"><Pencil className="w-5 h-5"/> <Trash className="w-5 h-5"/></div> </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
