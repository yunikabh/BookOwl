import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

export default function Books(){
    return(
        <div className="flex justify-between">
            <h1>All Books</h1>
            <Button >
                Add Book <Plus />

            </Button>
        </div>
    )
}