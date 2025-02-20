import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Products = [
  {
    id: 1,
    // image: "/grande.jpg",
    name: "Eucerin Sun Transparent",
    category: "Hand Care",
    price: "Rs 2000",
  },
  {
    id: 2,
    // image: "/grande.jpg",
    name: "Eucerin Sun Transparent",
    category: "Hand Care",
    price: "Rs 2000",
  },
];
export default function YourOrder() {
  return (
    <div className=" w-full space-y-5">
      <h1 className=" text-lg w-full text-black font-semibold">Your Order</h1>
      <Card className="rounded-sm  h-fit px-7 py-5 space-y-3  text-sm text-gray-600">
          <div className="flex justify-between">
            <h1 className="">Product</h1>
            <p className="">Subtotal </p>
          </div>
       <Separator className="mb-5" />

        
          <div className="">
          {Products.map((items)=>(
          <div className="flex flex-col " key={items.id}>
            <div className="flex justify-between items-center">
           {/* <div className="flex items-center w-[70%]">
            <img src={items.image} 
            width={100}
            height={100} /> <h1 className="font-semibold pl-3 text-base text-black">{items.name} <span className="text-themePrimary font-normal"> x 1</span></h1>
           </div> */}
            <p className="pl-10 text-right text-themePrimary text-lg font-semibold">
             {items.price}
            </p>
            
          </div>
          <Separator className="my-5" />
          </div>
            ))}
           
          </div>
          <div className="flex justify-between ">
            <h1>Subtotal:</h1>
          <h1 className=" text-themePrimary  text-lg font-semibold">Rs 500</h1>
          </div>
          <div className="flex justify-between pb-3">
            <h1>Shipping</h1>
          <h1 className=" text-themePrimary  text-lg font-semibold">Rs 100</h1>
          </div>
         
        <Separator />
        <div className="text-xl flex justify-between ">
          <h1 className="text-lg font-semibold"> Total</h1>
          <h1 className="text-themePrimary font-semibold"> Rs 500</h1>
        </div>
      </Card>
      {/* <Button className="w-full rounded-sm bg-themePrimary py-5 font-semibold">
        Add To Cart
      </Button> */}
    </div>
  );
}
