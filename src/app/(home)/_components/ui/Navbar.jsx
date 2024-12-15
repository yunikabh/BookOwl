// import logo from "../../../lib/photos/logo.png";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";

const navItems = [
  { id: 1, name: "Home", href: "/" },
  { id: 2, name: "Shop", href: "/" },
  { id: 3, name: "Contact us", href: "/" },

];
const navDarkItems = [
    {
       id: 4, name: "Browse", href: "/"
    },
]
export default function Navbar() {
  return (
    <div className="fixed w-[100%]  flex justify-between items-center ml-[5%] bg-transparent z-50 " data-aos="fade-down">
        
      <div className="">
        <img src="/photos/logo.png" alt="Logo"></img>
      </div>

      <NavigationMenu className="flex gap-10 text-[#945F39] px-[5%] mr-[5%]">
        <NavigationMenuList className="flex gap-24">
          {navItems.map((item) => (
            <NavigationMenuItem key={item.id}>
              <a href={item.href}>{item.name}</a>


            </NavigationMenuItem>
            
          ))}
           {navDarkItems.map((item) => (
            <NavigationMenuItem className="text-white" key={item.id}>
              <a href={item.href}>{item.name}</a>


            </NavigationMenuItem>
            
          ))}
        </NavigationMenuList>
        <Button variant="outline" className="flex text-white ml-16 bg-transparent">
          Login
        </Button>
      </NavigationMenu>
    </div>
  );
}
