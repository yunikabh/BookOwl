import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
// import { useState } from "react";
export default function AddCategory(){
    // const [formOpen,setFormOpen] = useState(false);
    return(
        <div className="h-[90px] flex justify-between mx-3 px-3 items-center border-b-2 border-gray-500  ">
        
        <h1 className="text-3xl font-bold text-amber-900 text-center">
          Category
        </h1>
        {/* <Button onClick={()=>setFormOpen(true)}>
          Add Category <Plus />
        </Button> */}
        <AddForm />
      </div>
    )
}

function AddForm(){
    return(
        <Dialog>
        <DialogTrigger asChild>
          <Button>Add Category <Plus /></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Category</DialogTitle>
            <DialogDescription>
              Make changes to your categories here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value="Romance" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="description" className="text-right">
                Description
              </Label>
              <Input id="description" value="Explain about the category" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input id="image"  value="Explain about the category" className="col-span-3" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog> 
    )
}