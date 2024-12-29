import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
  } from "@/components/ui/sidebar"
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


export default function SideBarAdmin(){
    return(
        // <div className="">
        //    <div className="w-full bg-[#f5dac7] border-b-2 border-black"> <img src="/photos/logo.png" className="mb-3 "></img></div>
        //     {SideItems.map((items)=>(
        //         <div key={items.id}>
        //       <a href={items.link}>   <div>  <h1 className="flex flex-row text-xl hover:bg-[#f5dac7] hover:text-primary py-2 "><span className="px-2">{items.icon}</span> {items.name}</h1></div></a> 
        //             </div>
        //     ))}
        // </div>
    //    <div className="fixed w-[15%] h-[1000px] bg-[#f5dac7]  text-amber-900 " >
    //      <div className="w-full bg-[#f5dac7] border-b-2 border-black"> <img src="/photos/logo.png" className="mb-3 "></img></div>
        <Sidebar className="fixed  ">
        <SidebarContent>
          <SidebarGroup>
          <div className="w-full border-b-2"> <img src="/photos/logo.png" className="mb-3 "></img></div>
            <SidebarGroupLabel className="text-md">Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {SideItems.map((item) => (
                  <SidebarMenuItem className="" key={item.title}>
                    <SidebarMenuButton className=" hover:text-[#f5dac7] hover:bg-amber-900 text-lg " asChild>
                      <a href={item.url}>
                       {item.icon}
                        <span>{item.name}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>  
    //   </div>

       
    )
}