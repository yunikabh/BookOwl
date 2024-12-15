import { Button } from "@/components/ui/button";
// import BookCarousel from "./BookCarousel";

export default function Background(){
    return(
        
         <div className="w-full overflow-x-hidden h-[800px] shadow-2xl">
            {/* Background design */}
    <div className="sm:absolute  sm:bg-[#BA9C84] sm:w-[1000px] sm:h-[1000px] sm:flex  sm:justify-items-end sm:origin-top-left sm:rotate-[25deg] sm:right-[-740px] sm:top-[-150px] sm:overflow-hidden "></div>
 <div className=" flex sm:justify-between sm:flex-row flex-col sm:mx-[10%] mx-[10px] sm:mt-[50px] mt-0">
    <div className="sm:w-[40%] w-full sm:mt-10 mt-5 text-primary ">
    <h1 className="sm:text-5xl text-xl z-40 leading-snug sm:my-10 my-5">
    Discover And Find 
Your New Favorite
Books 

    </h1>
    <p className="sm:leading-loose leading-normal ">
    Lorem Ipsum Dolor Sit Amet, Consectetur 
Adipiscing Elit, Sed Do Eiusmod Tempor 
Incididunt Ut Labore Et Dolore Magna Aliqua. 
Ut Enim Ad Minim Veniam, Quis Nostrud  
    </p>

    <Button className="my-10 bg-[#265073] ">Explore </Button>

    </div>
    <div className="z-30 ">
        <img src="/photos/coffeeimage.png" />
    </div>
 </div>


 
  </div>
    )
}