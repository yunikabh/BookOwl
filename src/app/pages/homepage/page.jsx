
// import Welcome from "./Homepage/_components/Welcome"
// import Collections from "./Homepage/_components/collections"
// import Sidebar from "./Homepage/_components/Sidebar1" 

// export default function Homepage(){
//     return(
//         <div>
//             <Welcome/>
//             <Collections/>
//             <Sidebar/>
//         </div>
//     )
// }
import Bigdiscount from "./_components/bigdiscount"
import Main from "./_components/main"
import Sidebar from "./_components/sidebar"
import Bookgrid from "./_components/bookgrid"


export default function Homepage(){
    return(
        <div>
            <Main/>
            <Sidebar/>
            <Bookgrid/>
            <Bigdiscount/>
        
        </div>
    )
}