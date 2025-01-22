"use client"
// import Sidebar from "./_components/Sidebar"
import { useEffect, useState } from "react"
import AllBooks from "./_components/AllBooks"
import $axios from "@/lib/axios.instance";


export default function Categorypage(){
    const [data, setData] = useState();
    useEffect(()=>{
        getData();
    },[]);
    const getData = async () => {
        const response = await $axios.get("/book/getBooks");
        console.log(response);
        if (!response) {
            throw new Error(`HTTP error status: ${response.status}`);
        }
        setData(response?.data.data);
    };
    
    return(
        <div>
{/* <Sidebar/> */}
{data?.length >0 && <AllBooks data = {data}/>}


        </div>
    )
}