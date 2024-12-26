import SideBar from "./_components/SideBar";

export default function layout({children}){
    return(
        <div>
            <SideBar />
{children}
        </div>
    )
}