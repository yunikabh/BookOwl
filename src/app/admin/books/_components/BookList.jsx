"use client"
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";

export default function BookList({data}) {
  const [searchBook,setSearchBook] = useState("");
  const filterdata = data.filter((book)=>
  book.bookName.toLowerCase().includes(searchBook.toLowerCase())||
book.author.name.toLowerCase().includes(searchBook.toLowerCase()));
  return (
    <div>
      <div className="w-full flex justify-end">
      <Input
        type="text"
        placeholder="Search for book or author"
        value={searchBook}
        onChange={(e)=> setSearchBook(e.target.value)}
        className="mt-5 mx-5 lg:w-[15%] w-full border-primary"
        />
        </div>
      <Card className="m-5 px-5 bg-transparent ">
        
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Book image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Book Summary</TableHead>
              <TableHead>Language</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Stock</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filterdata.map((data)=>(
              <TableRow key={data.ISBN}>
                <TableCell><div className="rounded-lg w-16 h-24 overflow-hidden"><img src={data.coverImage} className="w-full h-full object-contain" /></div></TableCell>
                <TableCell><h1 className="font-semibold text-base text-primary">{data.bookName}</h1> {data.author.name}</TableCell>
                <TableCell>{data.bookSummary}</TableCell>
                <TableCell>{data.language}</TableCell>
                <TableCell>{data.price}</TableCell>

                <TableCell>{data.stock}</TableCell>
                <TableCell><div className="flex flex-row gap-3"><Pencil className="w-5 h-5"/> <Trash className="w-5 h-5"/></div> </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
