import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Books() {
    return(
        <div className="w-screen max-w-full h-screen  bg-[#fcf3ec] overflow-hidden " > 
         <div className="h-[90px] flex justify-between mx-3 px-3 items-center "> <h1 className="text-3xl font-bold text-amber-900 text-center">Books</h1> 
            <Button >
                Add Book <Plus />

            </Button>
            </div>
        </div>
    )
}