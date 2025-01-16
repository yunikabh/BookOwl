
import Bigdiscount from "./_components/bigdiscount"
import Main from "./_components/main"
// import Sidebar from "./_components/sidebar"
// import Bookgrid from "./_components/bookgrid"
import Firstdesign from "./_components/firstdesign"
import CollectionCarousel from "./_components/CollectionCarousel"
import DealsCarousel from "./_components/DealsCarousel"
import Secondmain from "./_components/SecondMain"
// import NewArrivals from "./_components/NewArrivals"
import End from "./_components/End"

export default function Homepage(){
    return(
        <div>
            <Firstdesign/>
            <CollectionCarousel/>
            {/* <Sidebar/> */}
            {/* <Bookgrid/> */}
            <Main/>
            <DealsCarousel/>
            <Bigdiscount/>
            <Secondmain/>
            {/* <NewArrivals/> */}
            <End/>

            
        
        </div>
    )
}