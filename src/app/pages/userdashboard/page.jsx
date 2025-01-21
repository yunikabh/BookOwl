import SidebarUser from "./_components/SidebarUser"
import ProfileSection from "./_components/ProfileSection"
import PurchaseSection from "./_components/PurchaseSection"
import ReviewsSection from "./_components/ReviewsSection"

export default function UserDashboard(){
    return(
        <div>
         <SidebarUser/>
         <ProfileSection/>
         <PurchaseSection/>
         <ReviewsSection/>
      
     
    
        </div>
    )
}