import { Book, ExternalLinkIcon, Home, Layout, LayoutDashboardIcon, } from "lucide-react"

const SideItems =[
    {
        id:1,
        name :"Home", 
        link :"/admin",
        icon: <Home />
    },
    {
        id:2,
        name :"Add Book", 
        link :"/admin/books",
        icon: <Book />

    },
    {
        id:3,
        name :"Stats", 
        link :"/admin",
        icon: <Layout/>

    },
    {
        id:4,
        name :"Add Category", 
        link :"/admin",
        icon: <LayoutDashboardIcon/>

    },
    {
        id:5,
        name :"Logout", 
        link :"/admin",
        icon: <ExternalLinkIcon />

    },
]


export default function SideBar(){
    return(
        <div className="fixed w-[15%] h-[1000px] bg-primary  text-white px-1 ">
           <div className="w-full bg-[#f5dac7]"> <img src="/photos/logo.png" className="mb-5 "></img></div>
            {SideItems.map((items)=>(
                <div key={items.id}>
              <a href={items.link}>   <div >  <h1 className="flex flex-row text-xl hover:bg-[#f5dac7] hover:text-primary py-2 "><span className="px-2">{items.icon}</span> {items.name}</h1></div></a> 
                    </div>
            ))}
        </div>
    )
}