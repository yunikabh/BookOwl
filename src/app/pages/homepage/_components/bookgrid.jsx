// import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"
// import Link from "next/link";

// const books = [

//     {
//         id : 1,
//         name : "Book1",
//         img : "/photos/user.png",
//     },
//     {
//         id : 2,
//         name : "Book2",
//         img : "/photos/user.png",
//     },
//     {
//         id : 3,
//         name : "Book3",
//         img : "/photos/user.png",
//     },
//     {
//         id : 4,
//         name : "Book4",
//         img : "/photos/user.png",
//     },
//     {
//         id : 5,
//         name : "Book5",
//         img : "/photos/user.png",
//     },
// ]


// export  default function Bookgrid() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full"
//     >
//       <CarouselContent className="  gap-4 ">
//                 {books.map((item)=>(
//                     <CarouselItem key = {item.id} className=" basis-1/5">
//                       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  ">
//                         <img src={item.img} className="" />
//                    </div>
                       
                      
//                         {/* <div className="space-x-2">
//               <button className="bg-[#5d768a] text-white py-2 px-4 rounded hover:bg-blue-400">
//                 Buy Now
//               </button>
//               <Link href="/pages/review">
//                 <button className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400">
//                   Review
//                 </button>
//               </Link>
//             </div> */}
                       
//                     </CarouselItem>
//                 ))}
//             </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }