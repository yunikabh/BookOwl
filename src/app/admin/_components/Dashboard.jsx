// import { Button } from "@/components/ui/button";
import PChart from "./PChart"
import BChart from "./BChart"
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
// import { PieChart } from "lucide-react";
const statisticsData =[
    {
        id: 1,
        title:"Total Revenue",
        subtitle:"(Last 30 days)",
        num: "Rs 1000",



    },
    {
        id: 2,
        title:"Total Revenue",
        subtitle:"(Last 30 days)",
        num: "Rs 1000",



    },
    {
        id: 3,
        title:"Total Revenue",
        subtitle:"(Last 30 days)",
        num: "Rs 1000",



    },
    {
        id: 4,
        title:"Total Revenue",
        subtitle:"(Last 30 days)",
        num: "Rs 1000",



    }
]
export default function Dashboard(){
    return(
        <div className="w-screen max-w-full h-full  bg-[#fcf3ec] overflow-hidden " > 
         <div className="h-[90px] flex mx-3 px-3 items-center border-b-2 border-black"> <h1 className="text-3xl font-bold text-amber-900 text-center">Welcome to Bookowl Admin Dashboard</h1></div> 
         <div className="grid lg:grid-cols-3 grid-cols-1 mb-3 gap-5 p-5 text-amber-900" data-aos= "fade-up">
            <div className="">
                <PChart />
            </div>
            <div className=" ">
                <BChart />
            </div>
         </div>
         <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 mx-5">
            {statisticsData.map((items)=>(
                <Card className="p-5" key={items.id}>
                    <CardTitle className="text-amber-900">{items.title}</CardTitle>
                    <CardDescription className="pb-10">{items.subtitle}</CardDescription>
                    <h1 className="pb-10 text-amber-900 font-semibold">{items.num}</h1>
                    <h2 className="text-blue-900 underline text-md">Learn more</h2>
                </Card>
            ))}
         </div>
        </div>
    )
}