import { Button } from "@/components/ui/button";

export default function Background(){
    return(
        
         <div className="w-full overflow-x-hidden">
    <div className="absolute bg-[#BA9C84] w-[1000px] h-[1000px] flex  justify-items-end origin-top-left rotate-[25deg] right-[-740px] top-[-150px] overflow-hidden "></div>
 <div className=" flex justify-between mx-[10%] mt-[50px]">
    <div className="w-[40%] mt-10 text-primary ">
    <h1 className="text-5xl   leading-snug my-10">
    Discover And Find 
Your New Favorite
Books 

    </h1>
    <p className="leading-loose">
    Lorem Ipsum Dolor Sit Amet, Consectetur 
Adipiscing Elit, Sed Do Eiusmod Tempor 
Incididunt Ut Labore Et Dolore Magna Aliqua. 
Ut Enim Ad Minim Veniam, Quis Nostrud  
    </p>

    <Button className="my-10">Explore </Button>

    </div>
    <div className="z-30 ">
        <img src="/photos/coffeeimage.png" />
    </div>
 </div>
 
  </div>
    )
}