"use client"
import AddCategory from "./_components/AddCategory"
import CategoryList from "./_components/CategoryList"

export default function Category() {
  return (
    <div className="w-screen max-w-full h-screen  bg-[#fcf3ec] overflow-hidden ">
     <AddCategory />
      <CategoryList />
    </div>
  );
}
