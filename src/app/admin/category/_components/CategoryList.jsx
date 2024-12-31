"use client"
import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";

const Categories = [
  {
    id: 1,
    img: "/photos/romance.jpg",
    name: "Romance",
    description:"Loveee Loveee"
  
  },
  {
    id: 2,
    img: "/photos/romance.jpg",
    name: "Romance",
    description:"Loveee Loveee"
  },
  {
    id: 3,
    img: "/photos/romance.jpg",
    name: "Romance",
    description:"Loveee Loveee"
  },
  {
    id: 4,
    img: "/photos/romance.jpg",
    name: "Romance",
    description:"Loveee Loveee"
  },
  {
    id: 5,
    img: "/photos/romance.jpg",
    name: "Romance",
    description:"Loveee Loveee"
  },
];

export default function CategoryList() {
//   const [searchBook,setSearchBook] = useState("");
//   const filterBooks = Books.filter((book)=>
//   book.name.toLowerCase().includes(searchBook.toLowerCase())||
// book.author.toLowerCase().includes(searchBook.toLowerCase()));
  return (
    <div>
      {/* <div className="w-full flex justify-end">
      <Input
        type="text"
        placeholder="Search for book or author"
        value={searchBook}
        onChange={(e)=> setSearchBook(e.target.value)}
        className="mt-5 mx-5 lg:w-[15%] w-full border-primary"
        />
        </div> */}
      <Card className="m-5 px-5 bg-transparent ">
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Category image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Categories.map((items)=>(
              <TableRow key={items.id}>
                <TableCell><div className="rounded-lg w-20 h-20 overflow-hidden"><img src={items.img} className="w-full h-full object-cover" /></div></TableCell>
                <TableCell><h1 className="font-semibold text-base text-primary">{items.name}</h1></TableCell>

                <TableCell>{items.description}</TableCell>

                <TableCell><div className="flex flex-row gap-3"><Pencil className="w-5 h-5"/> <Trash className="w-5 h-5"/></div> </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
