import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import BookList from "./_components/BookList"

export default function Books() {
    return(
        <div className="w-full  h-full  bg-[#fcf3ec]  " > 
         <div className=" bg-[#fcf3ec]  h-[90px]  flex justify-between mx-3 px-3 items-center border-b-2 border-gray-500  "> <h1 className="text-3xl font-bold text-amber-900 text-center">Books</h1> 
            <Button >
                Add Book <Plus />

            </Button>
        
            </div>
            <BookList />
        </div>
    )
}