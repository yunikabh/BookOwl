import Link from "next/link"
export default function Secondmain(){
    return(
        <div className="p-6  flex flex-col items-center mt-8 "
        data-aos="zoom-in-up">
        <h1 className="text-5xl font-serif font-bold  text-[#6d433d] mb-6 mr-14">Book Collections</h1>
        <p className="font-serif text-2xl text-gray-500">Explore our handpicked selections ranging from timeless literature to</p>
           <p className="font-serif text-2xl text-gray-500" >  contemporary bestsellers across.</p>
          
  
    <div className="flex items-center gap-4 mt-4">
     <Link href="/">
      <button className="bg-[#5d768a] text-white px-4 py-2 rounded-md hover:bg-[#9BACB9] ">
        New Arrival
      </button>
      </Link>
      
      <button className="bg-[#5d768a] text-white px-4 py-2 rounded-md hover:bg-[#9BACB9]  ">
        Best Seller
      </button>

      <button className="bg-[#5d768a] text-white px-4 py-2 rounded-md hover:bg-[#9BACB9] ">
        Featured
      </button>
      
    </div>
        
   

       
        </div>

    )
}