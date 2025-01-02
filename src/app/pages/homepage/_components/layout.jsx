import { SidebarProvider } from "@/components/ui/sidebar";
import Sidebar from "./_components/sidebar";

export default function layout({children}){
    return(
        <div>
            <SidebarProvider >
            <Sidebar/>
            {children}
            </SidebarProvider>
        

        </div>
    )
}