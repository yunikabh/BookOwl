import { Card } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,

  } from "@/components/ui/carousel"



const books = [

    {
        id : 1,
        name : "idk",
        img : "/photos/book.jpg",
    },
    {
        id : 2,
        name : "idk 1",
        img : "/photos/book.jpg",
    },
    {
        id : 3,
        name : "idk 2",
        img : "/photos/book.jpg",
    },
    {
        id : 4,
        name : "idk",
        img : "/photos/book.jpg",
    },
    {
        id : 5,
        name : "idk",
        img : "/photos/book.jpg",
    },
]


export default function BookCarousel(){
    return(
        <div className="w-full">
             <h1>Popular Books</h1>
        <Carousel 
        opts={{
            align: "start",
            loop: true,
         
        }} className="">
           
            <CarouselContent className=" gap-4">
                {books.map((item)=>(
                    <CarouselItem key = {item.id} className=" basis-1/5">
                        <Card className="bg-inherit w-[50%]">
                        <img src={item.img} className=" h-48 w-full" />
                       
                        </Card>
                       
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />

        </Carousel>
        </div>
    )
}
