import CategoryList from "./_components/CategoryList"
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
export default function Category() {
  return (
    <div className="w-screen max-w-full h-screen  bg-[#fcf3ec] overflow-hidden ">
      <div className="h-[90px] flex justify-between mx-3 px-3 items-center border-b-2 border-gray-500 sticky ">
        {" "}
        <h1 className="text-3xl font-bold text-amber-900 text-center">
          Category
        </h1>
        <Button>
          Add Category <Plus />
        </Button>
      </div>
      <CategoryList />
    </div>
  );
}
